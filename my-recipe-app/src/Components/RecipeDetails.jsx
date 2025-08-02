import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom'


const RecipeDetails =()=>{
    const {id} =useParams();
    const[recipe,setRecipe] =useState(null);

    useEffect(()=>{
        if(id){
        axios.get(`https://dummyjson.com/recipes/${Number(id)}`)
        .then(res=>setRecipe(res.data))
        .catch(err=> console.log(err))
    }
    },[id]);
     return(
        <div>
            <h2>{recipe?.name ||'Pizza'}</h2>
            <img src={recipe?.image} alt={recipe.name} />
            <p>Cuisine:{recipe?.cuisine || 'Indian'}</p>
            <p>{recipe?.instructions || " "}</p>
        </div>
     )
}
export default RecipeDetails