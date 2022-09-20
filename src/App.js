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
      {data.map(flower => {
        return (
          <FlowerTile {...flower} />
        )
      })}
    </div>
  );
}

export default App;
