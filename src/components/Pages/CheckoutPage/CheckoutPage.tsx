import {useState} from 'react';
import { Wrapper } from "./CheckoutPage styles";
import { useSelector } from "react-redux";
import * as types from '../../../Types'
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Popup from '../../Popup/Popup'
import Button from "@material-ui/core/Button";


const CheckoutPage: React.FC = () => {


  const items =  useSelector((state: types.StoreType) => state.Items)
  const TotalAmount = ():number=>{
    var amount:number = 0;
    items.forEach(item => {
      amount= amount+(item.price*item.amount)
    });
    return Math.round( amount * 1e2 ) / 1e2;
  }
 
  const [openPopup, setOpen] = useState(false);
  return(
  <Wrapper>
    <h1>CheckOut Page</h1>
    <div className="checkout-bg">
        {items.length === 0 ? <p>No Items in cart</p> : null}
      {items.map((item,index) => (
        <div key={index} className="checkout-item">
          <p>{item.name}</p>
          <p>Price: {(item.price * ((item.amount)>0?item.amount:1) ).toFixed(2)}</p>
       </div>
      ))}
      </div>
      < div className="order-details">
        <p>Total Price : {TotalAmount()}</p>
      </div>
      <form className="order-form" noValidate autoComplete="off">
      <FormControl>
        <InputLabel >Name</InputLabel>
        <Input id="component-simple" required/>
      </FormControl>
      <FormControl>
        {/* TODO make inputs required  */}
        <InputLabel>Email</InputLabel>
        <Input required/>
        </FormControl>
        <FormControl>
        <textarea/>
        </FormControl>
          <FormControl>
          <Button onClick={()=>{setOpen(true)}}>
            Finish Order
          </Button>
        </FormControl>
      </form>
      <Popup isOpen={ openPopup} totalPrice={TotalAmount()}/>
  </Wrapper>)
};

export default CheckoutPage;
