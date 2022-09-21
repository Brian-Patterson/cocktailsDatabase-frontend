// import { useState, useEffect } from "react";
// import {Link} from "react-router-dom"

// const Drinks = (props) => {

//     const [drinks, setDrinks] = useState({});

//     const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"

//     const getDrinks = async () => {
//         try{
//             const response = await fetch(BASE_URL)
//             console.log(response)
//             const allDrinks = await response.json()
//             setDrinks(allDrinks)
//         } catch(err) {
//             console.log(err)
//         }
//     }

//     useEffect (() => {getDrinks()}, []);

//     // console.log(`${drinks.drinks.length} drinks`)
//     // console.log(drinks.drinks[1].strDrink)
//     // console.log(typeof drinks);
//     // console.log(typeof drinks.drinks);
//     // console.log(typeof drinks.drinks[1])
//     // console.log(drinks.drinks[1])   

//     function getRandomInt() {
//         return Math.floor(Math.random() * 100);
//       }

//     console.log(drinks)
//     const loaded = () => {
//             let index = 0;
//             return (
//             <div>
//                 <section className="rand1">
//                     {index = getRandomInt()}
//                     <Link to={`/drinks/${index}`}>
//                         <div key={index} className={`{randIndex}`}>
//                             <h1>{drinks.drinks[index].strDrink}</h1>
//                             <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
//                         </div>
//                     </Link>
//                 </section>
//                 <section className="rand2">
//                     {index = getRandomInt()}
//                     <Link to={`/drinks/${index}`}>
//                         <div key={index} className={`{randIndex}`}>
//                             <h1>{drinks.drinks[index].strDrink}</h1>
//                             <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
//                         </div>
//                     </Link>
//                 </section>
//                 <section className="rand3">
//                     {index = getRandomInt()}
//                     <Link to={`/drinks/${index}`}>
//                         <div key={index} className={`{randIndex}`}>
//                             <h1>{drinks.drinks[index].strDrink}</h1>
//                             <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
//                         </div>
//                     </Link>
//                 </section>
//                 <section className="rand4">
//                     {index = getRandomInt()}
//                     <Link to={`/drinks/${index}`}>
//                         <div key={index} className={`{randIndex}`}>
//                             <h1>{drinks.drinks[index].strDrink}</h1>
//                             <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
//                         </div>
//                     </Link>
//                 </section>
//                 <section className="rand5">
//                     {index = getRandomInt()}
//                     <Link to={`/drinks/${index}`}>
//                         <div key={index} className={`{randIndex}`}>
//                             <h1>{drinks.drinks[index].strDrink}</h1>
//                             <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>
//                         </div>
//                     </Link>
//                 </section>
//             </div>
//         )


//         // return drinks.drinks?.map((drinks, index) => {
//         //     return (
//         //         <Link to={`/drinks/${getRandomInt()}`}>
//         //         <div key={index} className={`drink_${index}`}>
//         //             <h1>{drinks.strDrink}</h1>
//         //             <img src={`${drinks.strDrinkThumb}`} alt={`${drinks.strDrink}`} className="indexImg"/>
//         //         </div>
//         //         </Link>
//         //     );
//         // })

//                 // let randArr = [];
//         // for(let i=0; i<5; i++) {
//         //     let index = getRandomInt();
//         //     console.log(typeof index);
//         //     let drink_i = 
//         //     '<Link to={`/drinks/${index}`}>' +
//         //         '<div key={index} className={randIndex}>' +
//         //             '<h1>{`drinks.drinks[${index}`.strDrink}</h1>' +
//         //             '<img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/>' +
//         //         '</div>' +
//         //     '</Link>'
//         //     randArr.push(drink_i)
//         // };
//         // console.log(randArr[0])
        
//         //     randArr.map((element) => {
//         //         return (
//         //             <div>
//         //             {element}
//         //             </div>
//         //         )
//         //     })
//     };
  
        
//     const loading = () => {
//         console.log("loading");
//             <section>
//                 <h1>
//                     Loading...
//                 </h1>
//             </section>
//     };

//     return (
//         <section className="drinksSection">
//             <div className="drinklersList">
//                 {drinks ? loaded(): loading()}
//             </div>
//             <nav className="leftBar">
//                 {drinks.drinks?.map((drinks, index) => {
//                     return (
//                         <Link to={`/drinks/${index}`}>
//                         <div key={index}>
//                             <h1>{drinks.strDrink}</h1>
//                         </div>
//                         </Link>
//                     );
//                 })};
//             </nav>
//         </section>
//     )
// }

// export default Drinks

import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

function getRandomInt() {
    return Math.floor(Math.random() * 100);
}

let index1 = getRandomInt()

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
            console.log(response)
            const allDrinks = await response.json()
            setDrinks(allDrinks)
        } catch(err) {
            console.log(err)
        }
    }


    console.log(index1)
    // console.log(drinks.drinks[index1].idDrink)
    const fetchIngredient1 = async() => {
        try{
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index1].idDrink}`)
            console.log(drinks.drinks[index1].idDrink)
            const result = await response.json()
            console.log(result)
            setIngredient1(result)
        }catch (err){
            console.log(err)
        }
    };
    // console.log(drinks.drinks[index1].idDrink)
    // const fetchIngredient2 = async() => {
    //     let index = getRandomInt();
    //     try{
    //       const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index]}`)
    //       const result = await response.json()
    //       console.log(result)
    //       setIngredient2(result)
    //     }catch (err){
    //       console.log(err)
    //     }
    // };
    // const fetchIngredient3 = async() => {
    //     let index = getRandomInt();
    //     try{
    //       const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index]}`)
    //       const result = await response.json()
    //       console.log(result)
    //       setIngredient3(result)
    //     }catch (err){
    //       console.log(err)
    //     }
    // };
    // const fetchIngredient4 = async() => {
    //     let index = getRandomInt();
    //     console.log(index)
    //     try{
    //       const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index]}`)
    //       const result = await response.json()
    //       console.log(result)
    //       setIngredient4(result)
    //     }catch (err){
    //       console.log(err)
    //     }
    // };
    // const fetchIngredient5 = async() => {
    //     let index = getRandomInt();
    //     try{
    //       const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.drinks[index]}`)
    //       const result = await response.json()
    //       console.log(result)
    //       setIngredient5(result)
    //     }catch (err){
    //       console.log(err)
    //     }
    // };

    useEffect (() => {getDrinks()}, []);
    useEffect(() => {fetchIngredient1()},[drinks?.drinks]);
    // useEffect(() => {fetchIngredient2()},[]);
    // useEffect(() => {fetchIngredient3()},[]);
    // useEffect(() => {fetchIngredient4()},[]);
    // useEffect(() => {fetchIngredient5()},[]);

    if (!ingredient1) {
        return <p>loading ingredients...</p>
    } 
    // if (!ingredient2) {
    //     return <p>loading ingredients...</p>
    // } 
    // if (!ingredient3) {
    //     return <p>loading ingredients...</p>
    // } 
    // if (!ingredient4) {
    //     return <p>loading ingredients...</p>
    // } 
    // if (!ingredient5) {
    //     return <p>loading ingredients...</p>
    // } 

    console.log(ingredient1)
    console.log(index1)

    const loaded = () => {

            return (
            <div className="drinklersList">
                <section className="rand1 randy">
                    <Link to={`/drinks/${index1}`}>
                        <div key={index1} className={`{randIndex1}`}>
                            <h1>{ingredient1.drinks[0].strDrink}</h1>
                            <img src={`${ingredient1.drinks[0].strDrinkThumb}`} alt={`${ingredient1.drinks[0].strDrink}`} className="indexImg"/>
                            {ingredient1 && Object.keys(ingredient1.drinks[0]).map((key, index1) => {
                                console.log(ingredient1.drinks[0])
                                return (
                                    <div key={index1} className={`ingredient1_${index1}`}>
                                    <h3>
                                        {key.startsWith("strIngredient")?ingredient1.drinks[0][key]:null}
                                    </h3>
                                    </div>
                                )
                            })}
                        </div>
                    </Link>
                </section>
                {/* <section className="rand2 randy">
                    Cocktail #{index = getRandomInt()}
                    <Link to={`/drinks/${index}`}>
                        <div key={index} className={`{randIndex}`}>
                            {/* <h1>{drinks.drinks[index].strDrink}</h1>
                            <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/> */}
                        </div>
                //    </Link>
                // </section> */}
                // <section className="rand3 randy">
                //     Cocktail #{index = getRandomInt()}
                //     <Link to={`/drinks/${index}`}>
                //         <div key={index} className={`{randIndex}`}>
                //             {/* <h1>{drinks.drinks[index].strDrink}</h1>
                //             <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/> */}
                //         </div>
                //     </Link>
                // </section>
                // <section className="rand4 randy">
                //     Cocktail #{index = getRandomInt()}
                //     <Link to={`/drinks/${index}`}>
                //         <div key={index} className={`{randIndex}`}>
                //             {/* <h1>{drinks.drinks[index].strDrink}</h1>
                //             <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/> */}
                //         </div>
                //     </Link>
                // </section>
                // <section className="rand5 randy">
                //     Cocktail #{index = getRandomInt()}
                //     <Link to={`/drinks/${index}`}>
                //         <div key={index} className={`{randIndex}`}>
                //             {/* <h1>{drinks.drinks[index].strDrink}</h1>
                //             <img src={`${drinks.drinks[index].strDrinkThumb}`} alt={`${drinks.drinks[index].strDrink}`} className="indexImg"/> */}
                //         </div>
                //     </Link>
                // </section>
            // </div>
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
                {drinks.drinks ? loaded(): loading()}
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