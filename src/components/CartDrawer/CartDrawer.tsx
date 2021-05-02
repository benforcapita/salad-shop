import { Wrapper } from "./CartDrawer.styles";
import IconButton from '@material-ui/core/IconButton'
import Cart from "../Cart/Cart";
import Drawer from "@material-ui/core/Drawer";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../../Types'
import * as actions from '../../actions'

const CartDrawer: React.FC = () => {

  const cartOpen = useSelector((state: types.StoreType) => state.open)
  const cartItemsLength = useSelector((state: types.StoreType) => state.amount)
  
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={(e) => dispatch(actions.close())}>
       <Cart/>
      </Drawer>
      <IconButton onClick={(e) => dispatch(actions.open())}>
        <Badge badgeContent={cartItemsLength} color='error'>
          <AddShoppingCartIcon/>
      </Badge>
      </IconButton>
  </Wrapper>
  );

}
export default CartDrawer;
