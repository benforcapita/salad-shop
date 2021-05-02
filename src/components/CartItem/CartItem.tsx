import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { SaladIngredientsItem } from "../../Types";
import { Wrapper } from "./CartItem.styles";
import { useDispatch } from 'react-redux';
import * as actions from '../../actions'


type Props = {
  item: SaladIngredientsItem;
  index:number
}

const CartItem: React.FC<Props> = ({item,index}) => {
  
  const dispatch = useDispatch();
  const removeItem = (index:number) => {
        dispatch(actions.RemoveItem(index))
          dispatch(actions.CalculateAmount())
  }
  return (
     <Wrapper data-testid="CartItem">
      <h3>{item.name}</h3>
      <div>
        <p>Price: { item.price}</p>
        <p>Amount: { item.amount}</p>
        <p>Total: {(item.price * item.amount).toFixed(2)}</p>
      </div>
      <div>
        <IconButton onClick={
          () => { removeItem(index) }}>
          <DeleteIcon/>
          </IconButton>
      </div>
    </Wrapper>
  )
 
};

export default CartItem;
