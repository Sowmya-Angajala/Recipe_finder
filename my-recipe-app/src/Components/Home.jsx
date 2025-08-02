import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from 'axios';

const Home=()=>{
  const[recipes,setRecipes] =useState([]);
  const [loading ,setLoading] =useState(true);

  useEffect(()=>{
    axios.get("https://dummyjson.com/recipes")
    .then(res=>setRecipes(res.data.recipes))
    .finally(()=>setLoading(false));
  },[])
return(

    <div className="recipe-grid">
        {recipes.map((recipe,idx)=>(
            <RecipeCard  key={idx}  recipe={recipe}/>
        ))}
    </div>
)

}


export default Home;