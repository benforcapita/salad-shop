
export type StoreType = {
  open: boolean;
  Items: Array<SaladIngredientsItem>;
  amount: number;
}

export type SaladIngredientsItem = {
  name: string;
  price: number;
  amount:number
}

export enum Constants {
    OPEN_DRAWER = 'OPEN',
    ClOSE_DRAWER = 'ClOSE',
    ADD_ITEM = 'ADD',
    REMOVE_ITEM = 'REMOVE',
    AMOUNT = 'AMOUNT',
}

export type Action =
    { type: Constants.OPEN_DRAWER } |
    { type: Constants.ClOSE_DRAWER } |
    { type: Constants.AMOUNT } |
    { type: Constants.ADD_ITEM,payload:SaladIngredientsItem } |
    { type: Constants.REMOVE_ITEM, payload: number }
    

