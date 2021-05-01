import { action } from 'typesafe-actions';
import { Constants,SaladIngredientsItem } from "../Types";

export function addItems(item:SaladIngredientsItem ) {
    return action(Constants.ADD_ITEM, item);
}

export function open() {
    return action(Constants.OPEN_DRAWER);
}

export function close() {
    return action(Constants.ClOSE_DRAWER);
}