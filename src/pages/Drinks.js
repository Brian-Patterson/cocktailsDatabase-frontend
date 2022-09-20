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
    // console.log(drinks.drinks[1].strDrink)
    // console.log(typeof drinks);
    // console.log(typeof drinks.drinks);
    // console.log(typeof drinks.drinks[1])
    // console.log(drinks.drinks[1])   

    function getRandomInt() {
        return Math.floor(Math.random() * 100);
      }

    console.log(drinks)
    const loaded = () => {
            let index = 0;
            return (
            <div>
                <section className="rand1">
                    {index = getRandomInt()}
                    <Link to={`/drinks/${index}`}>
                        <div key={index} className={`{randIndex}`}>
                            <h1>{drinks.drinks[index].strDrink}</h1>
                            <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
                        </div>
                    </Link>
                </section>
                <section className="rand2">
                    {index = getRandomInt()}
                    <Link to={`/drinks/${index}`}>
                        <div key={index} className={`{randIndex}`}>
                            <h1>{drinks.drinks[index].strDrink}</h1>
                            <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
                        </div>
                    </Link>
                </section>
                <section className="rand3">
                    {index = getRandomInt()}
                    <Link to={`/drinks/${index}`}>
                        <div key={index} className={`{randIndex}`}>
                            <h1>{drinks.drinks[index].strDrink}</h1>
                            <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
                        </div>
                    </Link>
                </section>
                <section className="rand4">
                    {index = getRandomInt()}
                    <Link to={`/drinks/${index}`}>
                        <div key={index} className={`{randIndex}`}>
                            <h1>{drinks.drinks[index].strDrink}</h1>
                            <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
                        </div>
                    </Link>
                </section>
                <section className="rand5">
                    {index = getRandomInt()}
                    <Link to={`/drinks/${index}`}>
                        <div key={index} className={`{randIndex}`}>
                            <h1>{drinks.drinks[index].strDrink}</h1>
                            <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
                        </div>
                    </Link>
                </section>
            </div>
        )


        // return drinks.drinks?.map((drinks, index) => {
        //     return (
        //         <Link to={`/drinks/${getRandomInt()}`}>
        //         <div key={index} className={`drink_${index}`}>
        //             <h1>{drinks.strDrink}</h1>
        //             <img src={`${drinks.strDrinkThumb}`} alt={`${drinks.strDrink}`} className="indexImg"/>
        //         </div>
        //         </Link>
        //     );
        // })

                // let randArr = [];
        // for(let i=0; i<5; i++) {
        //     let index = getRandomInt();
        //     console.log(typeof index);
        //     let drink_i = 
        //     '<Link to={`/drinks/${index}`}>' +
        //         '<div key={index} className={randIndex}>' +
        //             '<h1>{`drinks.drinks[${index}`.strDrink}</h1>' +
        //             '<img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>' +
        //         '</div>' +
        //     '</Link>'
        //     randArr.push(drink_i)
        // };
        // console.log(randArr[0])
        
        //     randArr.map((element) => {
        //         return (
        //             <div>
        //             {element}
        //             </div>
        //         )
        //     })
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
        <section className="drinksSection">
            <div className="drinklersList">
                {drinks ? loaded(): loading()}
            </div>
            <nav className="leftBar">
                {drinks.drinks?.map((drinks, index) => {
                    return (
                        <Link to={`/drinks/${index}`}>
                        <div key={index}>
                            <h1>{drinks.strDrink}</h1>
                        </div>
                        </Link>
                    );
                })};
            </nav>
        </section>
    )
}

export default Drinks