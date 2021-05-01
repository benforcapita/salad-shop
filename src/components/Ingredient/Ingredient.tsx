import React from 'react';
import Button from "@material-ui/core/Button";
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
    <Wrapper>
      <div className='grid'>
      <p>Ingredient:</p>
      <p>Price:</p>
      <p>{item.name}</p>
      <p>{item.price}</p>
      </div>
       <Button onClick={() => handleAddToCart(item) }>Add</Button>
    </Wrapper>
  
  )
  
}

export default Ingredient;
