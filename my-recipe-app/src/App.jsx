import { useState } from 'react'

import './App.css'
import Home from './Components/Home'
import {Routes,Route } from 'react-router-dom' 
import RecipeDetails from './Components/RecipeDetails'

function App() {
  

  return (
    <>
      <div>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path='/recipe/:id' element={<RecipeDetails/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
