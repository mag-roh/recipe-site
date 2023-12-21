import './AddRecipePopup.css';
import { useState} from 'react';
import db from './firebase';
import PropTypes from 'prop-types';
const AddRecipePopup = (props) => {
    const [dishName, setDishName] = useState('');
    const [description, setDescription] = useState('');
    const [ingrediants, setIngrediants] = useState('');
    const [procedure, setProcedure] = useState('');

    const clearForm = () => {
    setDishName('');
    setDescription("");
    setIngrediants("");
        setProcedure('');
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("recipes").add({
      dishName: dishName,
      description: description,
      ingrediants: ingrediants,
      procedure: procedure,
    });
    console.log("Signup successful!");
    clearForm();
  };
  return (
    <div className="popup">
    <div className="popup-inner">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Dish Name:
                <input type="text" value={dishName} onChange={e => setDishName(e.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            </label>
            <label>
                Ingrediants:
                <input type="text" value={ingrediants} onChange={e => setIngrediants(e.target.value)} />
                  </label>
            <label>
                Procedure:
                <textarea type="text" value={procedure} onChange={e => setProcedure(e.target.value)} />
                  </label>
          <div className="submit-container">
        <button type="submit" className="btn" onClick={props.toggle}>
          Submit
            </button>
            </div>
        </form>
        <button onClick={props.toggle}>Close</button>
          </div>   
        </div>
  )
}
AddRecipePopup.propTypes = {
    toggle: PropTypes.node.isRequired,
}
export default AddRecipePopup;