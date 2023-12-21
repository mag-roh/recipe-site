import './Recipe.css';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
const Recipe = ({id, dishName, description}) => {
  const navigate = useNavigate();
  return (
    <div className='recipe__container' onClick={() => navigate(`/recipes/${id}`)}>
      <div className="recipe__title">
        <h1>{dishName}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
Recipe.propTypes = {
    key: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
    dishName: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
}
export default Recipe;