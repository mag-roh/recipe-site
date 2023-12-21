import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import db from './Components/firebase';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const snapshot = await db.collection('recipes').get();
                const recipeData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    dishName: doc.data().dishName,
                    description: doc.data().description,
                    ingrediants: doc.data().ingrediants,
                    procedure: doc.data().procedure,
                }));
                setRecipes(recipeData);
            } catch (error) {
                console.log('Error!!');
            }
        };
        fetchRecipes();
    }, []);
    const selectRecipe = (recipeId) => {
    const selected = recipes.find((recipe) => recipe.id === recipeId);
    setSelectedRecipe(selected);
  };
    return (
        <UserContext.Provider value={{user, setUser, recipes, selectedRecipe, selectRecipe }}>
            {children}
        </UserContext.Provider>
    );
}
UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export const useContextValue = () => useContext(UserContext);