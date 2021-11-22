import { useState } from 'react';
import firebase from "./firebase.js";


function Form() {
    const [userInput, setUserInput] = useState({
        planetName: '',
        terrain: "",
        climate: "",
        numberOfMoons: "",
        popularMoons: "",
        src: '',
    });

    const handleChange = (event) => {
            const target = event.target;
            const value = target.value;
            const name = target.name;
        setUserInput({
                ...userInput,
                [name]: value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const dbRef = firebase.database().ref();
    
        dbRef.push(userInput);
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
            />
            <label htmlFor="terrain">Describe your Terrain</label>
            <input
                id="terrain"
                type="text"
                name="terrain"
                value={userInput.terrain}
                onChange={handleChange}
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
            />
            <label htmlFor="popularMoons">Give some Moons a name</label>
            <input
                id="popularMoons"
                type="text"
                name="popularMoons"
                value={userInput.popularMoons}
                onChange={handleChange}
            />
            <label htmlFor="src">Pick a Planet Piture</label>
            <div className="choosePlanet">
                <label htmlFor="planetImage1"><img src="./assets/pngfind.com-purple-planet-png-4520924.png" alt="Purple Planet" /></label>
                <input
                    id="planetImage1"
                    type="checkbox"
                    name="src"
                    value="./assets/pngfind.com-purple-planet-png-4520924.png"
                    onChange={handleChange}
                />
                <label htmlFor="planetImage2"><img src="./assets/pngfind.com-planet-png-589786.png" alt="Desert Planet" /></label>
                <input
                    id="planetImage2"
                    type="checkbox"
                    name="src"
                    value='./assets/pngfind.com-planet-png-589786.png'
                    onChange={handleChange}
                />
                <label htmlFor="planetImage3"><img src="./assets/pngfind.com-captain-planet-png-6856012.png" alt="Captain Planet" /></label>
                <input
                    id="planetImage3"
                    type="checkbox"
                    name="src"
                    value="./assets/pngfind.com-captain-planet-png-6856012.png"
                    onChange={handleChange}
                />
                <label htmlFor="planetImage4"><img src="./assets/pngwing.com.png" alt="Green Planet" /></label>
                <input
                    id="planetImage4"
                    type="checkbox"
                    name="src"
                    value="./assets/pngwing.com.png"
                    onChange={handleChange}
                />
            </div>
            <button onSubmit={handleSubmit}>Create Your Planet!</button>
        </form>
    )
}

export default Form