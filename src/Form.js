import { useState } from 'react';
import firebase from "./firebase.js";



function Form() {
    // create state for every input on the form, and store it inside an object
    const [userInput, setUserInput] = useState({
        planetName: "",
        terrain: "",
        climate: "",
        numberOfMoons: "",
        popularMoons: "",
        src: "",
        population: 0
    });

    // record changes to the inputs and store them in a variable 
    const handleChange = (event) => {
        // save event.target as a variable 
        const target = event.target;
        // save event.target.value as a variable
        const value = target.value;
        // save event.target.name as a variable 
        const name = target.name;
        // for every key: value in the object, save it to state 
        setUserInput({
            // SPREAD OUT THE OBJECT. if it isn't spread, only the last input value will be saved to state 
            ...userInput,
            // save the value of the corresponding input name to state 
            [name]: value
        });
    }

    // event lisenter for the Form submission 
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const dbRef = firebase.database().ref();
    
        // send the state object to firebase 
        dbRef.push(userInput);

        // when the form has been submitted, empty out the form 
        setUserInput({
            planetName: "",
            terrain: "",
            climate: "",
            numberOfMoons: "",
            popularMoons: "",
            src: "",
            population: 0
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="planetName">Create a Name for your Planet</label>
            <input
                id="planetName"
                type="text"
                name="planetName"
                value={userInput.planetName}
                onChange={handleChange}
                required
            />
            <label htmlFor="terrain">Describe your Terrain</label>
            <input
                id="terrain"
                type="text"
                name="terrain"
                value={userInput.terrain}
                onChange={handleChange}
                required
            />
            <label htmlFor="climate">Describe your climate</label>
            <input
                id="climate"
                type="text"
                name="climate"
                value={userInput.climate}
                onChange={handleChange}
            />
            <label htmlFor="numberOfMoons">How many Moons?</label>
            <input
                id="numberOfMoons"
                type="text"
                name="numberOfMoons"
                value={userInput.numberOfMoons}
                onChange={handleChange}
                required
            />
            <label htmlFor="popularMoons">Give some Moons a name</label>
            <input
                id="popularMoons"
                type="text"
                name="popularMoons"
                value={userInput.popularMoons}
                onChange={handleChange}
                required
            />
            <label htmlFor="src">Pick a Planet Piture</label>
            <div className="choosePlanet">
                <input
                    id="planetImage1"
                    type="checkbox"
                    name="src"
                    value="./assets/pngfind.com-purple-planet-png-4520924.png"
                    onChange={handleChange}
                />
                <label htmlFor="planetImage1"><img src="./assets/pngfind.com-purple-planet-png-4520924.png" alt="Purple Planet" /></label>
                <input
                    id="planetImage2"
                    type="checkbox"
                    name="src"
                    value='./assets/pngfind.com-planet-png-589786.png'
                    onChange={handleChange}
                />
                <label htmlFor="planetImage2"><img src="/assets/pngfind.com-planet-png-589786.png" alt="Desert Planet" /></label>
                <input
                    id="planetImage3"
                    type="checkbox"
                    name="src"
                    value="./assets/pngfind.com-captain-planet-png-6856012.png"
                    onChange={handleChange}
                />
                <label htmlFor="planetImage3"><img src="./assets/pngfind.com-captain-planet-png-6856012.png" alt="Captain Planet" /></label>
                <input
                    id="planetImage4"
                    type="checkbox"
                    name="src"
                    value="./assets/pngwing.com.png"
                    onChange={handleChange}
                />
                <label htmlFor="planetImage4"><img src="./assets/pngwing.com.png" alt="Green Planet" /></label>
            </div>
            <button>Create Your Planet!</button>
        </form>
    )
}

export default Form