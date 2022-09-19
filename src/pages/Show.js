import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router'

const ShowDrinks = (props) => {

    const [drink, setDrink] = useState([]);
    const {index} = useParams();
    console.log(useParams())

    const fetchDrink = async() => {
      try{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
        const result = await response.json()
        console.log(result)
        setDrink(`${result}.${index}`)
      } catch (err){
          console.log(err)
      }
    }

    console.log(drink)

    useEffect(() => {fetchDrink()}, []);

    if (!drink) {
      return <p>loading...</p>
    }

    console.log(drink)

    return (
      <div>
        <h1>{drink}</h1>
      </div>
    )
  }
  
  export default ShowDrinks
  