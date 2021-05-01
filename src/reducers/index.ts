
import { StoreType, Action,Constants } from "../Types";

const initialState: StoreType =
{
    open: false,
    Items:[]
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
      TempState.Items.push(action.payload);
      return TempState;
     case Constants.REMOVE_ITEM:
      TempState.Items.splice(action.payload,action.payload+1);
      return TempState;
    default: return TempState;
  }
}

export default CartReducer;
