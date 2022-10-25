// // components/ShowDrinks.js
// const Drink = () => {
//   return <div>name ingredients etc</div>;
// };

// const ShowDrinks = () => {
//   const { id } = useParams();
//   const drink = useDrink(id);

//   return drink ? <Drink drink={drink} /> : <div>Loading</div>;
// };

// // pages/ShowPage.js
// // do auth or preloading
// // show a loading icon
// const ShowPage = () => (
//   <>
//     <ShowDrinks />
//   </>
// );

// //presential component

// const ShowDrinks = () => {
//   return drink ? <Drink drink={drink} /> : <div>Loading</div>;
// };

// // pages/ShowPage.js
// // do auth or preloading
// // show a loading icon
// const Drink = ({ drink }) => {
//   return (
//     <>
//       <h1>{drink.name}</h1>
//       <h1>{drink.aloholic}</h1>
//       <h1>{drink.ingredients.map...}</h1>
//     </>
//   );
// };

// const ShowPage = () => {
//   const { id } = useParams();
//   const drink = useDrink(id);

//   return <>{drink ? <Drink drink={drink} /> : <div>Loading</div>}</>;
// };
