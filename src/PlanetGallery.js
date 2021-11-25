import { useState, useEffect } from 'react';

function PlanetGallery({ planetArray }) {
    // creating a state for the More Info button on each li in Planet Gallery
    const [userSelect, setUserSelect] = useState(false);
    //  creating state for the Live  Here button on each li in planet gallery 
    const [likes, setLikes] = useState(0);
    //creating state for the information in the planetInfo section 
    const [displayPlanet, setDisplayPlanet] = useState({
        astralName: "",
        planetTerrain: "",
        planetClimate: "",
        moonNumber: "",
        namedMoons: "",
        planetPopulation: 0
    });

    // event listener for the More info button 
    const handleClick = (e) => {
        setUserSelect(!userSelect)
        //when the user clicks the More Info button, set it to tru and return that specific planets array 
        if (userSelect === true) {
            return planetArray
        } 

        // call the state of the information of the planets and pass in the values of that planet
        setDisplayPlanet(planetArray[e.target.value])
    }
    
    // Event listener for the Live Here button 
    const handleLikes = () => {
        setLikes(likes + 1);
    }

    // if the user selects the more info button, bring in the planet information specific to that planet
    useEffect(() => {
        if (userSelect) {
            setUserSelect(planetArray)
        }
    }, [planetArray, userSelect])



    return (
        <>
            <div className="planetInfo">
                {/* If the user select is true then display tthe information from the specific planets array, if not, display th title of the property */}
                <ul>
                    <li>
                        {userSelect ? (<h2>Name: {displayPlanet.astralName}</h2>) : (<h2>Name:</h2>)}
                    </li>
                    <li>
                        {userSelect ? (<p>Terrain: {displayPlanet.planetTerrain}</p>) : (<p>Terrain:</p>)}
                    </li>
                    <li>
                        {userSelect ? (<p>Climate: {displayPlanet.planetClimate}</p>) : (<p>Climate:</p>)}
                    </li>
                    <li>
                        {userSelect ? (<p>Number of Moons: {displayPlanet.moonNumber}</p>) : (<p>Number of Moons:</p>)}
                    </li>
                    <li>
                        {userSelect ? (<p>Popular Moons: {displayPlanet.namedMoons}</p>) : (<p>Popular Moons:</p>)}
                    </li>
                    <li>
                        {userSelect ? (<p>Population: {displayPlanet.planetPopulation + likes}</p>) : (<p>Population:</p>)}
                    </li>
                </ul>
                        
            </div>

            <div className="planetGallery">
                <ul>
                    {/* Display the name and chosen picture for every planet that has been submitted through the form */}
                    {
                    planetArray.map((planet, index) => {
                        return (
                                <li key={index}>
                                    <h2>{planet.astralName}</h2>
                                    <img src={planet.planetImage} alt={planet.astralName}/>
                                    <button
                                    onClick={handleClick}
                                    value={index}
                                    >More Info</button>
                                    <button onClick={handleLikes}>Live Here</button>
                                </li>
                        )
                    })
                    }
                </ul>
            </div>
        </>
        
    )
}

export default PlanetGallery