import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const RecipeCard=({recipe})=>{
    const[favorite,setFavorite]=useState(false);
    const navigate =useNavigate();


return(
    <>
    <div className="recipe-card" onClick={()=> navigate(`/recipe/${Number(recipe.id)}`)}>

        <img src={recipe.image} alt={recipe.name} />
        <h1>{recipe.name}
        </h1>
        <p>{recipe.cuisine}</p>
<button onClick={()=>setFavorite(!favorite)}>
    {favorite ? "Fav" : "NotFav"}

</button>

    </div> 
    </>
)
}
export default RecipeCard