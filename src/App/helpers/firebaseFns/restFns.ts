/* ====================================================== */
import FireStoreParser from 'firestore-parser'
import * as helpers from './helpers'
import * as types from './types'
import * as configs from '../../myApp/actions/configs'
const fb_fs_url = `${configs.firebase_fireStore_url.split('/v1/')[1]}`
/* ====================================================== */
/* ====================================================== */
export async function push(args: {
    col: types.tables,
    fields,
    firebase_host?: string,
    token?: string,
}) {
    /* ----------- */
    if (!args.firebase_host) args.firebase_host = configs.firebase_fireStore_url
    /* ----------- */
    const finalFields = {}
    for (const key in args.fields) {
        const fieldValue = args.fields[key]
        const { type, value } = helpers.getFireType(fieldValue, fb_fs_url)
        finalFields[key] = { [type]: value }
    }
    const finalBody = {
        fields: {
            ...finalFields,
        }
    }
    /* ---------- */
    const res: {
        error?: types.firestoreServerErr,
        createTime: string,
        name: string,
        updateTime: string,
        fields
    } = await helpers.fbFetch({
        url: `${args.firebase_host}/${args.col}`,
        finalBody,
        method: 'POST',
        ...args,
    })/* todo:check what it sends */
    if (!res) return null
    let id = ''
    if (!res.error) {
        const asdasd = res.name.split('/')
        id = asdasd[asdasd.length - 1]
    }
    const finalObject: {
        error?: types.firestoreServerErr
        data?: any,
    } = {
        error: res.error,
        data: res.error ? null : {
            id: id,
            createTime: res.createTime,
            name: res.name,
            updateTime: res.updateTime,
            ...FireStoreParser(res.fields)
        },
    }
    return finalObject
    /* ----------- */
}
/* ====================================================== */
export async function getAll(args: {
    firebase_host?: string,
    col: types.tables,
    token?: string,
}) {
    /* ----------- */
    let finalResss: { data?: { [itemId: string]: any }, error?: types.firestoreServerErr }
    try {
        /* ----------- */
        if (!args.firebase_host) args.firebase_host = configs.firebase_fireStore_url
        const resJson: {
            error?: types.firestoreServerErr,
            documents?: types.fsDoc[]
        } = await helpers.fbFetch({
            url: `${args.firebase_host}/${args.col}`,
            method: 'GET',
            ...args,
        })

        if (resJson?.documents) {
            const finalDocs: { [itemId: string]: { [field: string]: any }; } = {}
            for (let docIndex = 0; docIndex < resJson.documents.length; docIndex++) {
                const doc = resJson.documents[docIndex]
                if (!doc) continue
                const asdasd = doc.name.split('/')
                const id = asdasd[asdasd.length - 1]

                const finalObject: { [x: string]: any } = {
                    id,
                    createTime: doc.createTime,
                    name: doc.name,
                    updateTime: doc.updateTime,
                    ...FireStoreParser(doc.fields),
                }
                finalDocs[id] = finalObject
            }
            finalResss = {
                error: null,
                data: finalDocs
            }
        } else {
            const catchedError = resJson?.error
            finalResss = {
                error: catchedError,
                data: null
            }
        }
    } catch (error) {
        finalResss = {
            error: { code: 11111, message: 'unknownErr', status: 'unknownErr' },
            data: null
        }
    }

    return finalResss
}
/* ==================================== */
 
