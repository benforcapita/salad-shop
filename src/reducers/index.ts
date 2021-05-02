
import { StoreType, Action,Constants } from "../Types";

const initialState: StoreType =
{
    open: false,
    Items: [],
    amount:0
}
function CartReducer(state: StoreType = initialState , action: Action):StoreType {
  var TempState:StoreType = state || {};
  switch (action.type) {
    case Constants.OPEN_DRAWER:
      TempState.open = true;
      return TempState;
    case Constants.ClOSE_DRAWER:
      TempState.open = false;
      return TempState;
    case Constants.ADD_ITEM:
      {
        var item = action.payload;
        item.amount = item.amount ? item.amount : 1;
        if (TempState.Items.includes(item))
        {
          let index: number = TempState.Items.indexOf(item);
          TempState.Items[index].amount += 1;
        }
        else {
            TempState.Items.push(item);
        }
      return TempState;
      }
    case Constants.REMOVE_ITEM:
      {
        let item = TempState.Items[action.payload];
        if (item.amount > 1)
          item.amount -= 1;
        else
          TempState.Items.splice(action.payload, action.payload + 1);
      return TempState;
      }
    case Constants.AMOUNT:
      {
        let amount: number = 0;
        TempState.Items.forEach((item) => {
          if (item.amount > 0)
          {
            amount += item.amount;
          }
          else
          {
            amount++;
          }
        })
        TempState.amount = amount;
        return TempState;
      }
    default: return TempState;
  }
}

export default CartReducer;
