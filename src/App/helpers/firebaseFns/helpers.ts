/* ====================================================== */
/**
 * specific fetch for firebase server
 * @param args 
 */
export async function fbFetch(args: {
    url: string,
    token?: string,
    firebase_host?: string,
    finalBody?,
    method: 'DELETE' | 'GET' | 'PATCH' | 'POST',
}) {
    try {
        const headers = {}
        if (args.token) headers['Authorization'] = `Bearer ${args.token}`
        const options = {
            method: args.method,
            headers: headers,
        }
        if (args.finalBody) options['body'] = JSON.stringify(args.finalBody)
        const res: Response = await fetch(args.url, {
            ...options,
        })
            .catch(e => {
                console.error(e)
                return null
            })
        if (!res) {
            console.error('couldnt fetch!')
            return null
        } 
        const resJson = await res.json() 
        return resJson
    } catch (error) {
        console.log(error)
        return null
    }
}
/* ====================================================== */
export function getFireType(targetValue: any,fb_fs_url:string) {
    if (targetValue === null) {
        return { type: 'nullValue', value: 'NULL_VALUE' }
    }
    else if (typeof targetValue === 'boolean') {
        return { type: 'booleanValue', value: targetValue }
    }
    else if (typeof targetValue === 'number') {
        return { type: 'integerValue', value: Number(targetValue) }
    }
    else if (typeof targetValue === 'string') {
        return { type: 'stringValue', value: targetValue.toString() }
    }
    /* todo:still so many more types plus times  */
    else if (typeof targetValue === 'object') { /* null also is an object but we got it earler */
        if (targetValue.ref) {
            return { type: 'referenceValue', value: `${fb_fs_url}/${targetValue.ref.col}/${targetValue.ref.id}` }
        } else if (Array.isArray(targetValue)) {
            const values = []
            targetValue.map(i => {
                const { type, value } = getFireType(i,fb_fs_url)
                values.push({ [type]: value })
            })
            return { type: 'arrayValue', value: { values: values } }
        }
        else {
            const fields = {}
            for (const key in targetValue) {
                const { type, value } = getFireType(targetValue[key],fb_fs_url)
                fields[key] = { [type]: value }
            }
            return { type: 'mapValue', value: { fields: fields } }
        }
    }
    else {
        throw 'not supported!!!'
    }
}
/* ====================================================== */
 
