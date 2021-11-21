import { useState } from 'react';
import firebase from "./firebase.js";


function Form() {
    const [userInput, setUserInput] = useState({
        astralName: "",
        terrain: "",
        climate: "",
        numberOfMoons: "",
        popularMoons: "",
        planetImage: '',
    });
    const handleChange = (event) => {
        setUserInput(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const dbRef = firebase.database().ref();
    
        dbRef.push(userInput);
    
        setUserInput('');
    
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newPlanetName">Create a Name for your Planet</label>
            <input
                id="newPlanetName"
                type="text"
                name="newPlanetName"
                value={userInput.astralName}
                onChange={handleChange}
            />
            <label htmlFor="newTerrain">Describe your Terrain</label>
            <input
                id="newTerrain"
                type="text"
                name="newTerrain"
                value={userInput.terrain}
                onChange={handleChange}
            />
            <label htmlFor="newClimate">Describe your climate</label>
            <input
                id="newClimate"
                type="text"
                name="newClimate"
                value={userInput.climate}
                onChange={handleChange}
            />
            <label htmlFor="newMoonNumber">How many Moons?</label>
            <input
                id="newMoonNumber"
                type="text"
                name="newMoonNumber"
                value={userInput.numberOfMoons}
                onChange={handleChange}
            />
            <label htmlFor="newPopular">Give some Moons a name</label>
            <input
                id="newPopular"
                type="text"
                name="newPopular"
                value={userInput.popularMoons}
                onChange={handleChange}
            />
            <label htmlFor="planetPicture">Upload a Picture of your Planet</label>
            <input
                id="planetPicture"
                type="file"
                name="planetPicture"
                value={userInput.planetImage}
                onChange={handleChange}
            />
            <button>Create Your Planet!</button>
        </form>
    )
}

export default Form