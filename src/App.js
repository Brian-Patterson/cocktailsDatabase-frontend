import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search"
// import Recipes from "./components/Recipes"

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
      {/* <Recipes /> */}
    </div>
  );
}

export default App;
