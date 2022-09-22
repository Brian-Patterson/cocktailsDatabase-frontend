import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function getRandomInt() {
    return Math.floor(Math.random() * 100);
}

let index1 = getRandomInt()
let index2 = getRandomInt()
let index3 = getRandomInt()
let index4 = getRandomInt()
let index5 = getRandomInt()

const Drinks = (props) => {

    const [drinks, setDrinks] = useState({});
    const [ingredient1, setIngredient1] = useState(null)
    const [ingredient2, setIngredient2] = useState(null)
    const [ingredient3, setIngredient3] = useState(null)
    const [ingredient4, setIngredient4] = useState(null)
    const [ingredient5, setIngredient5] = useState(null)

    const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"

    const getDrinks = async () => {
        try{
            const response = await fetch(BASE_URL)
            // console.log(response)
            const allDrinks = await response.json()
            setDrinks(allDrinks)
        } catch(err) {
            console.log(err)
        }
    }


    // console.log(index1)
    // console.log(drinks.drinks[index1].idDrink)
    useEffect(() => {
    const fetchIngredient1 = async() => {
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index1].idDrink}`)
            // console.log(drinks.drinks[index1].idDrink)
            const result = await response.json()
            // console.log(result)
            setIngredient1(result)
        }catch (err){
            console.log(err)
        }
    };
    fetchIngredient1();
    }, [drink?.idDrink, drink]);

    useEffect(() => {
    const fetchIngredient2 = async() => {
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index2].idDrink}`)
            // console.log(drinks.drinks[index2].idDrink)
            const result = await response.json()
            // console.log(result)
            setIngredient2(result)
        }catch (err){
            console.log(err)
        }
    };
    fetchIngredient2();
    }, [drink?.idDrink, drink]);

    useEffect(() => {
    const fetchIngredient3 = async() => {
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index3].idDrink}`)
            // console.log(drinks.drinks[index3].idDrink)
            const result = await response.json()
            // console.log(result)
            setIngredient3(result)
        }catch (err){
            console.log(err)
        }
    };
    fetchIngredient3();
    }, [drink?.idDrink, drink]);

    useEffect(() => {
    const fetchIngredient4 = async() => {
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index4].idDrink}`)
            // console.log(drinks.drinks[index4].idDrink)
            const result = await response.json()
            // console.log(result)
            setIngredient4(result)
        }catch (err){
            console.log(err)
        }
    };
    fetchIngredient4();
    }, [drink?.idDrink, drink]);

    useEffect(() => {
    const fetchIngredient5 = async() => {
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index5].idDrink}`)
            // console.log(drinks.drinks[index5].idDrink)
            const result = await response.json()
            // console.log(result)
            setIngredient5(result)
        }catch (err){
            console.log(err)
        }
    };
       fetchIngredient5();
    }, [drink?.idDrink, drink]);
 

    useEffect (() => {getDrinks()}, []);
    // useEffect(() => {fetchIngredient1()},[drinks?.drinks, fetchIngredient1]);
    // useEffect(() => {fetchIngredient2()},[drinks?.drinks, fetchIngredient2]);
    // useEffect(() => {fetchIngredient3()},[drinks?.drinks, fetchIngredient3]);
    // useEffect(() => {fetchIngredient4()},[drinks?.drinks, fetchIngredient4]);
    // useEffect(() => {fetchIngredient5()},[drinks?.drinks, fetchIngredient5]);


    if (!ingredient1) {
        return <p>loading ingredients...</p>
    } 
    if (!ingredient2) {
        return <p>loading ingredients...</p>
    } 
    if (!ingredient3) {
        return <p>loading ingredients...</p>
    } 
    if (!ingredient4) {
        return <p>loading ingredients...</p>
    } 
    if (!ingredient5) {
        return <p>loading ingredients...</p>
    } 

    // console.log(ingredient1)
    // console.log(index1)

    const loaded = () => {

            return (
            <div className="mainGrid">
                <section className="rand1 randy">
                    <Link to={`/drinks/${index1}`}>
                        <div key={index1} className={`randIndex1 idxCard`}>
                            <h1 className="drinkName">{ingredient1.drinks[0].strDrink}</h1>
                            <img src={`${ingredient1.drinks[0].strDrinkThumb}`} alt={`${ingredient1.drinks[0].strDrink}`} className="indexImg indexImg1"/>
                            {ingredient1 && Object.keys(ingredient1.drinks[0]).map((key, index1) => {
                                // console.log(ingredient1.drinks[0])
                                return (
                                    <div key={index1} className={`ingredient_${index1} recipe`}>
                                    <h3>
                                        {key.startsWith("strIngredient")?ingredient1.drinks[0][key]:null}
                                    </h3>
                                    <h3 className="idxMeasure1">
                                        {key.startsWith("strMeasure")?ingredient1.drinks[0][key]:null}   
                                    </h3>
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                </section>
                <section className="rand2 randy">
                    <Link to={`/drinks/${index2}`}>
                        <div key={index2} className={`randIndex2 idxCard`}>
                            <h1 className="drinkName">{ingredient2.drinks[0].strDrink}</h1>
                            <img src={`${ingredient2.drinks[0].strDrinkThumb}`} alt={`${ingredient2.drinks[0].strDrink}`} className="indexImg"/>
                            {ingredient2 && Object.keys(ingredient2.drinks[0]).map((key, index2) => {
                                // console.log(ingredient2.drinks[0])
                                return (
                                    <div key={index2} className={`ingredient_${index2} recipe`}>
                                    <h3>
                                        {key.startsWith("strIngredient")?ingredient2.drinks[0][key]:null}
                                    </h3>
                                    <h3 className="idxMeasure2">
                                        {key.startsWith("strMeasure")?ingredient2.drinks[0][key]:null}   
                                    </h3>
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                </section>
                <section className="rand3 randy">
                    <Link to={`/drinks/${index3}`}>
                        <div key={index3} className={`randIndex3 idxCard`}>
                            <h1 className="drinkName">{ingredient3.drinks[0].strDrink}</h1>
                            <img src={`${ingredient3.drinks[0].strDrinkThumb}`} alt={`${ingredient3.drinks[0].strDrink}`} className="indexImg"/>
                            {ingredient3 && Object.keys(ingredient3.drinks[0]).map((key, index3) => {
                                // console.log(ingredient3.drinks[0])
                                return (
                                    <div key={index3} className={`ingredient_${index3} recipe`}>
                                    <h3>
                                        {key.startsWith("strIngredient")?ingredient3.drinks[0][key]:null}
                                    </h3>
                                    <h3 className="idxMeasure3">
                                        {key.startsWith("strMeasure")?ingredient3.drinks[0][key]:null}   
                                    </h3>
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                </section>
                <section className="rand4 randy">
                    <Link to={`/drinks/${index4}`}>
                        <div key={index4} className={`randIndex4 idxCard`}>
                            <h1 className="drinkName">{ingredient4.drinks[0].strDrink}</h1>
                            <img src={`${ingredient4.drinks[0].strDrinkThumb}`} alt={`${ingredient4.drinks[0].strDrink}`} className="indexImg"/>
                            {ingredient4 && Object.keys(ingredient4.drinks[0]).map((key, index4) => {
                                // console.log(ingredient4.drinks[0])
                                return (
                                    <div key={index4} className={`ingredient_${index4} recipe`}>
                                    <h3>
                                        {key.startsWith("strIngredient")?ingredient4.drinks[0][key]:null}
                                    </h3>
                                    <h3 className="idsMeasure4">
                                        {key.startsWith("strMeasure")?ingredient4.drinks[0][key]:null}   
                                    </h3>
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                </section>
                <section className="rand5 randy">
                    <Link to={`/drinks/${index5}`}>
                        <div key={index5} className={`randIndex5 idxCard`}>
                            <h1 className="drinkName">{ingredient5.drinks[0].strDrink}</h1>
                            <img src={`${ingredient5.drinks[0].strDrinkThumb}`} alt={`${ingredient5.drinks[0].strDrink}`} className="indexImg"/>
                            {ingredient5 && Object.keys(ingredient5.drinks[0]).map((key, index5) => {
                                // console.log(ingredient5.drinks[0])
                                return (
                                    <div key={index5} className={`ingredient_${index5} recipe`}>
                                    <h3>
                                        {key.startsWith("strIngredient")?ingredient5.drinks[0][key]:null}
                                    </h3>
                                    <h3 className="idxMeasure5">
                                        {key.startsWith("strMeasure")?ingredient5.drinks[0][key]:null}   
                                    </h3>
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                </section>
            </div>
        )
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
            {drinks.drinks ? loaded(): loading()}
            <nav className="leftBar">
                {drinks.drinks?.map((drinks, index) => {
                    return (
                        <Link to={`/drinks/${index}`}>
                        <div key={index}>
                            <h1 className="list">{drinks.strDrink}</h1>
                        </div>
                        </Link>
                    );
                })};
            </nav>
            <div className='footer'>
                <p>Special thanks to CocktailsDB @ <span className="tyLink"><a className="tyLink" href="https://www.thecocktaildb.com/">https://www.thecocktaildb.com/</a></span></p>
            </div>
        </section>
    )
}

export default Drinks