import { Wrapper,DrawerButton } from "./CartDrawer.styles";
import Drawer from "@material-ui/core/Drawer";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";


import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../Types'
import * as actions from '../../actions'

const CartDrawer: React.FC = () => {

  const cartOpen = useSelector((state: types.StoreType) => state.open)
  const cartItems = useSelector((state: types.StoreType) => state.Items)
  const cartItemsLength = useSelector((state: types.StoreType) => state.Items.length)
  
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={(e) => dispatch(actions.close())}>
        cart goes here
      </Drawer>
      <DrawerButton onClick={(e) => dispatch(actions.open())}>
        <Badge badgeContent={cartItemsLength} color='error'>
          <AddShoppingCartIcon/>
      </Badge>
      </DrawerButton>
  </Wrapper>
  );

}
export default CartDrawer;
