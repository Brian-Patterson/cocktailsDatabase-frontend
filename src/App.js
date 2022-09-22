import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Search from "./components/Search";
// import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
