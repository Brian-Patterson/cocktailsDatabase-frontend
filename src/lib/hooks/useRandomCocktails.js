import { useEffect, useState } from "react";

export const useRandomCocktails = (amount) => {
  const [randomDrinks, setRandomDrinks] = useState();

  useEffect(() => {
    // wait for dependency
    if (!amount) return;

    const fetchRandomDrinks = async () => {
        // BASE_URL = localhost:4000 on dev
        // BASE_URL = herokuapp.com/whatever on production
      const drinks = await fetch(
        `${process.env.BASE_URL}/drinks/random/${amount}`
      );
      const result = await drinks.json();
      setRandomDrinks(result);
    };

    fetchRandomDrinks();
  }, [amount]);

  return randomDrinks;
};
