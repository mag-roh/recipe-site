import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
// import Login from './LoginSignup/Login';
import { auth, provider } from "./firebase";
// import Signup from './LoginSignup/Signup';
import './Homepage.css';
import { useContextValue } from '../UserContext'
import Recipe from './Recipe';
const Homepage = () => {
  // const [seen, setSeen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null)
  const { recipes , user, setUser } = useContextValue();
  // const togglePop = () => {
  //   setSeen(!seen);
  // }
  useEffect(() => {
    if (inputRef.current)
      inputRef.current.focus();
  }, [])
  const handleLogin = () => {
    auth.signInWithPopup(provider).then((result) => {
      setUser(result.user)
    })
  }
  const handleSearch = () => {
    console.log('Done');
  }
    console.log(recipes);
  return (
    <div className='homepage'>
      <nav className="navbar">
        <div className='homepage__search'>
            <input ref={inputRef}
              type='text'
              placeholder="Search Recipe"
              value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
            <button onClick={handleSearch}>Submit</button>
</div>
<div className='homepage__links'>
            <Link to='/' className="nav-item">Homepage</Link>
            <Link to="/Add-Recipe" className='nav-item'>Add Recipe</Link>
</div>
      </nav>
      <div className="homepage__header">
          <h1 className='homepage__message'>Welcome to the World of recipes</h1>
        {/* if login/signup token not available*/}
        {user ? recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            dishName={recipe.dishName}
            description={recipe.description}
            ingrediants={recipe.ingrediants}
            procedure={recipe.procedure}
          />)) : (<div className='landing__element'>
          <h3>Login to access and add your recipes</h3>
          <button className='landing__button' onClick={handleLogin}>Login using Google</button>
        </div>)} 
          {/* {(seen && action === 'Login') ? <Login toggle={togglePop}/> : null} */}
      {/* <button className='landing__button' onClick={() => {
        togglePop()
        setAction('Sign-up');
      }}>Signup</button>
          {(seen && action === 'Sign-up')? <Signup toggle={togglePop}/> : null} */}
        {/* else render the Recipes component <Recipe/>*/}
        </div>
    </div>
  )
}
export default Homepage;