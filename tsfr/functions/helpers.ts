import {
    FrString, FrStringAsParam,
    FrBoolean, docExists
} from "ts-firebase-rules";
import { _globalVariables_ } from "./_globalVariables_";

export function titleIsValid(title: FrString): FrBoolean {
    return (
        title.matches('[A-Za-z][A-Za-z0-9]*') &&
        title.size() >= _globalVariables_.minimumCharsInTitle &&
        title.size() <= _globalVariables_.maximumCharsInTitle)

} 
