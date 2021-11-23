import { useState, useEffect } from 'react';
import firebase from './firebase.js';
import Form from './Form.js';
import PlanetGallery from './PlanetGallery.js';


function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Call Firebase data 
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      
      const newState = [];
      
      const data = response.val();

      for (let property in data) {
        newState.push({
          astralName: data[property].planetName,
          planetImage: data[property].src,
          planetTerrain: data[property].terrain,
          planetClimate: data[property].climate,
          moonNumber: data[property].numberOfMoons,
          namedMoons: data[property].popularMoons,
          planetPopulation: data[property].population
        })
      }
        
      setPlanets(newState);
    });
  }, [])

  return (
    <div className="App">
      <header>
        <h1 className="wrapper">Creation Complex </h1>
        <Form
          planetArray={planets}
        />
      </header>
      <main>
          <PlanetGallery
          planetArray={planets}
        />
      </main>
      <footer>
        Created at <a href="#">Juno College</a>
      </footer>
    </div>
  );
}

export default App;
