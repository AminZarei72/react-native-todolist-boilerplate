import {
    FrString,
    docExists, request, isString, isInt,
    getData, fieldsEqualTo, strBetween, getReq, str,
    getCurrentValues, FrBoolean,include
} from "ts-firebase-rules"
import { _globalVariables_ } from "../_globalVariables_"
import * as mt from '../../modelsTypes'

export function update_todo(id: FrString): FrBoolean {
    const currentValues = getCurrentValues<mt.read_todo>()
    const reqData = getReq<mt.update_todo>()
    return (
        docExists<mt.T>(id, 'todos') && // this todo hasnt been created already 
        fieldsEqualTo([
            'status',
        ]) &&
        currentValues.status === str('waiting') &&
        (
            reqData.status === str('done') ||
            reqData.status === str('delayed')
        )  
        ////incase u want to add user ,use below examples
        // request.auth != null && // user has logged in
        // docExists<mt.T>(request.auth.uid, 'users') && // user exist
        // reqData.createdBy === request.auth.uid && 
    )

} 
