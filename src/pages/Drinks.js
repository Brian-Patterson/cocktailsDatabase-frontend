import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const Drinks = (props) => {

    const [drinks, setDrinks] = useState({});

    const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"

    const getDrinks = async () => {
        try{
            const response = await fetch(BASE_URL)
            console.log(response)
            const allDrinks = await response.json()
            setDrinks(allDrinks)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect (() => {getDrinks()}, []);

    // console.log(`${drinks.drinks.length} drinks`)
    console.log(drinks.drinks)
    // console.log(typeof drinks);
    // console.log(typeof drinks.drinks);
    // console.log(typeof drinks.drinks[1])
    // console.log(drinks.drinks[1])   

    const loaded = () => {
        return drinks.drinks?.map((drinks, index) => {
            return (
                <Link to={`/drinks/${index}`}>
                <div key={index}>
                    <h1>{drinks.strDrink}</h1>
                </div>
                </Link>
            );
        });
    };
  
        
    const loading = () => {
        console.log("loading");
            <section>
                <h1>
                    Loading...
                </h1>
            </section>
    };

    return (
        <section>
            {drinks ? loaded(): loading()}
        </section>
    )
}

export default Drinks