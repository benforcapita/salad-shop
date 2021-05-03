import { useQuery } from "react-query";
//components 
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Ingredient from "../../Ingredient/Ingredient";
//styles
import { Wrapper } from './IngredientsPage.styles'
import { SaladIngredientsItem } from "../../../Types";
import {useDispatch} from 'react-redux';
import * as actions from '../../../actions'

const getSaladIngredients = async ():Promise<SaladIngredientsItem[]> => await (await fetch('https://siasky.net/AACIMmTNSWmjuOAzih6nSiRYqgQR5o3ZgDW55mEUSvs_0Q')).json();

const IngredientsPage: React.FC= () => {

const { data, isLoading, error } = useQuery<SaladIngredientsItem[]>(
    'Ingredients',
    getSaladIngredients
  )
  const dispatch = useDispatch();
  const HandleAddToCart = (clickedItem: SaladIngredientsItem) => {
    dispatch(actions.addItems(clickedItem));
    dispatch(actions.CalculateAmount());
  }

  if (isLoading)
    return <div data-testid="IngredientsPage"> <CircularProgress /></div>;
  if (error)
    return <div>something went wrong</div>
  return (
    <Wrapper data-testid = "IngredientsPage">
      <Grid container spacing = {2}>
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

