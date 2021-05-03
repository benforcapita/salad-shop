import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import Add from "@material-ui/icons/Add";
//type
//style
import { Wrapper } from "./Ingredient.style";
import { SaladIngredientsItem } from '../../Types';

type Props =
{
    item: SaladIngredientsItem;
    handleAddToCart: (clickedItem: SaladIngredientsItem) => void;
}
const Ingredient: React.FC<Props> = ({item,handleAddToCart}) => {

  return (
    <Wrapper data-testid="Ingredient" >
        <p>{item.name}</p>
        <p>{item.price}</p>
       <IconButton onClick={() => handleAddToCart(item) }><Add/></IconButton>
    </Wrapper>
  
  )
  
}

export default Ingredient;
