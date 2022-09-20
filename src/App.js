import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import FlowerTile from './components/FlowerTile';
import data from "./models/data";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div id="outer-div">
      {data.map(flower => {
        return (
          <FlowerTile {...flower} />
        )
      })}
      </div>
    </div>
  );
}

export default App;
