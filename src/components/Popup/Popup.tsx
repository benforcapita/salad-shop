import React from 'react';
import { PopupBox,NoneVisibleDiv } from "./Popup.styles";
import { useSelector } from "react-redux";
import * as types from '../../Types'
import Button from "@material-ui/core/Button";

type Props = 
  {
    isOpen: boolean;
    totalPrice:number;
  }



const Popup: React.FC<Props> = ({ isOpen, totalPrice}) => {
  
  const items =  useSelector((state: types.StoreType) => state.Items)
    return ((isOpen === false) ? <NoneVisibleDiv></NoneVisibleDiv> :
      <PopupBox>
        <div className="content">
          <h2>Thank you for your Order</h2>
          <p>You ordered: </p>
          <div className="order">
            {items?.map(item=>(
              <div>
                <p>{item.name}*{item.amount} </p>
                </div>
            ))}
            <p><b>For: {totalPrice}</b></p>
          </div>
          <p>The Order is on the Way!</p>
          <Button variant="contained" color="primary" href="/">Close</Button>
        </div>
      </PopupBox>
    )
  
};

export default Popup;
