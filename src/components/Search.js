import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [drinks, setDrinks] = useState({});
  const nav = useNavigate();

  const BASE_URL =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

  const getDrinks = async () => {
    try {
      const response = await fetch(BASE_URL);
      const allDrinks = await response.json();
      setDrinks(allDrinks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDrinks();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    drinks.drinks.filter((drink) => {
      return drink.strDrink.match(searchInput.toLocaleLowerCase());
    });
  }

  // const nav = () => {
  //     navigate("/drinks/:searchInput")
  // }
  //might need to change input to form for onSubmit funciton

  const arrIdx = drinks.drinks?.findIndex(
    (element) => (element = element.strDrink === searchInput)
  );

  // console.log(drinks.drinks)
  // console.log(drinks.drinks[5].strDrink)
  // console.log(arrIdx)

  let handleSubmit = async (e) => {
    e.preventDefault();
    nav(`/drinks/${arrIdx}`);
    // console.log(arrIdx)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Cocktail Name"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">SEARCH</button>
      </form>
    </div>
  );
};

export default Search;
