import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'


const ShowDrinks = (props) => {

    const [drink, setDrink] = useState(null);
    const [ingredient, setIngredient] = useState(null)
    const {id} = useParams();
    console.log({id}.id)

    const fetchDrink = async() => {
      try{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
        const result = await response.json()
        console.log(result)
        setDrink(result.drinks[id])
      } catch (err){
          console.log(err)
      }
    };

    const fetchIngredient = async() => {
      try{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17060`)
        const result = await response.json()
        console.log(result)
        setIngredient(result)
      }catch (err){
        console.log(err)
      }
    };

    // console.log(drink.idDrink)

    useEffect(() => {fetchDrink()}, []);
    useEffect(() => {fetchIngredient()},[]);

    if (!drink) {
      return <p>loading drink...</p>
    }
    if (!ingredient) {
      return <p>loading ingredient...</p>
    } 
    let i=1
    const ingredientObj = `strIngredient1`
    console.log(ingredientObj)
    const listIngredients = () => {
      for(let i=1; i<=15; i++) {
         return (
          
            <h3>{ingredient.drinks[0].strIngredient1}</h3>
          
         )
      }
    }

  

    console.log(listIngredients())
    console.log(ingredient)
    let num = 2
    console.log(ingredient.drinks[0].strIngredient1)

    return(
      <div>
        <h1>{drink.strDrink}</h1>
        <img src={`${drink.strDrinkThumb}`} alt={`${drink.strDrink}`}/>
        {Object.keys(ingredient.drinks[0]).map((key, index) => {
          return (
            <div key={index}>
              
              <h3>
                {key.startsWith("strIngredient")?ingredient.drinks[0][key]:null}
              </h3>
              </div>
          )
        })}
      </div>
    )

        
        
        // <h1>{listIngredients}</h1>
        // {return(
        // for(proptery in ingredient.drinks[0]) {
        //   return(
        //       <div>
        //       <h3>{ingredient.strIngredient+`${index+1}`}</h3>
        //      </div>
        // )})}
}

export default ShowDrinks
