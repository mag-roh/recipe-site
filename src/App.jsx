import './App.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './assets/Components/Homepage';
import AddRecipe from './assets/Components/AddRecipe';
function App() {
  return (
    <Routes>
        <Route index element={<Homepage />} />
        <Route path='/Add-Recipe' element={<AddRecipe/>}/>
      {/* <Route path='/Login' element={<Login/>} />
      <Route path='/Signup' element={<Signup/>}/> */}
      </Routes>
  )
}

export default App;
