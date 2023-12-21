import { useContextValue } from '../UserContext';
import { useState } from 'react';
import AddRecipePopup from './AddRecipePopup';
const AddRecipe = () => {
  const { user } = useContextValue();
  const [seen, setSeen] = useState(false);
  const togglePop = () => {
    setSeen(!seen);
  }
  
  return (
    // if token present show 'ADD RECIPE' button else show message
    <div>
      {user ? (<div>
        <h1>Please click the button to add your recipes</h1>
        <button onClick={togglePop}>Add Recipe</button>
        {seen ? <AddRecipePopup toggle={togglePop}/>:null}
        </div>) : (<div className='addRecipe'>
Please login to add  your own exciting recipes
    </div >)}
    </div>
  )
}
export default AddRecipe;