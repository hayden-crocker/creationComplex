import { useState, useEffect } from 'react';


function PlanetGallery({ planetArray }) {
    const [userSelect, setUserSelect] = useState(false);
    const [likes, setLikes] = useState(0);
    const [displayPlanet, setDisplayPlanet] = useState({
        astralName: "",
        planetTerrain: "",
        planetClimate: "",
        moonNumber: "",
        namedMoons: "",
        planetPopulation: 0
    });

    const handleClick = (e) => {
        setUserSelect(!userSelect)
        if (userSelect === true) {
            return planetArray
        }
        setDisplayPlanet(planetArray[e.target.value])
    }
    
    const handleLikes = () => {
        setLikes(likes + 1);
    }

    useEffect(() => {
        if (userSelect) {
            setUserSelect(planetArray)
        }
    }, [planetArray, userSelect])



    return (
        <>
            <div className="planetInfo">
                    
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