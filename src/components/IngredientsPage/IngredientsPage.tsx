import { useState} from "react";
import { useQuery } from "react-query";
//components 
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
import Ingredient from "../Ingredient/Ingredient";
//styles
import { Wrapper } from './IngredientsPage.styles'
import { SaladIngredientsItem, Action } from "../../Types";
import{connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import * as actions from '../../actions'
//https://siasky.net/AABoZWRlg6AudRIBA7S8BGkC4r2XVPGhaT0wmd5mTocMSQ 

const getSaladIngredients = async ():Promise<SaladIngredientsItem[]> => await (await fetch('https://siasky.net/AACIMmTNSWmjuOAzih6nSiRYqgQR5o3ZgDW55mEUSvs_0Q')).json();

const IngredientsPage: React.FC= () => {

const { data, isLoading, error } = useQuery<SaladIngredientsItem[]>(
    'Ingredients',
    getSaladIngredients
  )
  const dispatch = useDispatch();
  const GetTotalIngredients = () => null;
  const HandleAddToCart = (clickedItem: SaladIngredientsItem) => {
    dispatch(actions.addItems(clickedItem))
  }
  const HandleRemoveFromCart = () => null;

  if (isLoading)
    return <div data-testid="IngredientsPage"> <CircularProgress /></div>;
  if (error)
    return <div>something went wrong</div>
  return (
    <Wrapper>
      <Grid container spacing = {3}>
        {
          data?.map(item => (
          <Grid item key={item.name} xs={12} sm ={4}>
            <Ingredient item={item} handleAddToCart={HandleAddToCart}/>
          </Grid>
          ))
        
        }
      </Grid>
    </Wrapper>
    )
}
export default IngredientsPage;

