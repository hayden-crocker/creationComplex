import './App.css';
import { useState, useEffect } from 'react';
import firebase from './firebase.js';
import Form from './Form.js';
import PlanetGallery from './PlanetGallery.js';
import backgroundImage from './pexels-photo-998641.jpeg'


function App() {
  // create state as a new array for the information from the database to be stored in
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    // Call Firebase data 
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      
      const newState = [];
      
      const data = response.val();

      // for every object in firebase, push it to the new array 
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
      {/* I know this looks bad having inline styles, but react doesn't like images. I tried putting this in my assets folder, but netlify/term2 wouldn't compile this image otherwise */}
      <main style={{ backgroundImage: `url(${backgroundImage})` }}>
          <PlanetGallery
          planetArray={planets}
        />
      </main>
      <footer>
        Created at <a href="https://junocollege.com">Juno College</a>
      </footer>
    </div>
  );
}

export default App;
