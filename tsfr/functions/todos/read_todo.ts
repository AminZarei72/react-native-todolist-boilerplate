import { 
    FrString,
    docExists, request, isString, isInt,
    getData, fieldsEqualTo, strBetween, getReq, str,
    getCurrentValues, FrBoolean,
} from "ts-firebase-rules"
import { _globalVariables_ } from "../_globalVariables_"
import * as mt from '../../modelsTypes'

export function list_todo(): FrBoolean {
    // const currentValues = getCurrentValues<mt.read_todo>()
    return ( 
        true
        ////incase u want to add user ,use below examples
        // request.auth != null && // user has logged in
        // docExists<mt.T>(request.auth.uid, 'users') && // user exist
        // currentValues.createdBy === request.auth.uid  
    )

} 
export function get_todo(id:FrString): FrBoolean {
    // const currentValues = getCurrentValues<mt.read_todo>()
    return ( 
        // true
        docExists<mt.T>(id, 'todos') // this todo hasnt been created already 
        ////incase u want to add user ,use below examples
        // request.auth != null && // user has logged in
        // docExists<mt.T>(request.auth.uid, 'users') && // user exist
        // currentValues.createdBy === request.auth.uid  
    )

} 
