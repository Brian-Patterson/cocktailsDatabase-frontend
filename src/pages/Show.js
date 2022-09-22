import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'


const ShowDrinks = (props) => {

    const [drink, setDrink] = useState(null);
    const [ingredient, setIngredient] = useState(null)
    const {id} = useParams();
    // console.log({id})
    useEffect(() => {
      const fetchDrink = async() => {
        try{
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
          const result = await response.json()
          // console.log(result)
          setDrink(result.drinks[id])
        } catch (err){
            console.log(err)
        }
      }; 
      fetchDrink();
      }, [id]);
    
    useEffect(() => {
    const fetchIngredient = async() => {
      try{
        if(drink){
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink?.idDrink}`)
        const result = await response.json()
        // console.log(result)
        setIngredient(result)
        }
      }catch (err){
        console.log(err)
      }
    };
    fetchIngredient();
    }, [drink?.idDrink, drink]);
    

    // console.log(ingredient)
    //if ingredients dont' load, comment out and recomment in above console.log

    // useEffect(() => {fetchDrink()}, []);
    // useEffect(() => {fetchIngredient()},[drink?.idDrink]);

    if (!drink) {
      return <p>loading drink...</p>
    }


    return(
      <div className='showGrid'>
        <h1 className='showDrinkName'>{drink.strDrink}</h1>
        <img src={`${drink.strDrinkThumb}`} alt={`${drink.strDrink}`} className="showImg"/>
        {ingredient && Object.keys(ingredient.drinks[0]).map((key, index) => {
          return (
            <div key={index} className={`ingredient_${index}`}>
              <h3>
                {key.startsWith("strIngredient")?ingredient.drinks[0][key]:null}
              </h3>
            </div>
          )
        })}
        {ingredient && Object.keys(ingredient.drinks[0]).map((key, index) => {
          return (
            <div key={index} className={`showInstructions_${index}`}>
              <h3>
                {key.startsWith("strInstructions")?ingredient.drinks[0][key]:null}
              </h3>
            </div>
          )
        })}
        {ingredient && Object.keys(ingredient.drinks[0]).map((key, index) => {
          return (
            <div key={index} className={`showMeassure_${index}`}>
              <h3>
                {key.startsWith("strMeasure")?ingredient.drinks[0][key]:null}
              </h3>
            </div>
          )
        })}
        {ingredient && Object.keys(ingredient.drinks[0]).map((key, index) => {
          return (
            <div key={index} className={`showGlass_${index}`}>
              <h3>
                {key.startsWith("strGlass")?ingredient.drinks[0][key]:null}
              </h3>
            </div>
          )
        })}
        <div className='showFooter'>
          <p>Special thanks to CocktailsDB @ <span className='showTyLink'><a className='showTyLink' href="https://www.thecocktaildb.com/">https://www.thecocktaildb.com/</a></span></p>
        </div>
      </div>
    )
}

export default ShowDrinks