import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Recipes from "./components/Recipes"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Recipes />
    </div>
  );
}

export default App;
