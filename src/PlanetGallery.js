import { useState, useEffect } from 'react';


function PlanetGallery({ planetArray }) {
    const [userSelect, setUserSelect] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setUserSelect(!userSelect)
        if (userSelect === false) {
            return planetArray
        }
    }

    useEffect(() => {
        if (userSelect) {
            setUserSelect(planetArray)
        }
    }, [planetArray, userSelect])

    const handleLikes = () => {
        setLikes(likes + 1);
    }


    return (

        <>
            <div className="planetInfo">
                    
                <ul>
                    <li>
                        <h2>{userSelect ? `Name: ${planetArray.astralName}` : "Name:"} </h2>
                    </li>
                    <li>
                        <p>{userSelect ? `Terrain: ${planetArray.planetTerrain}` : "Terrain:"}</p>
                    </li>
                    <li>
                        <p>{userSelect ? `Climate: ${ planetArray.planetClimate }` : "Climate:"}</p>
                    </li>
                    <li>
                        <p>{userSelect ? `Number of Moons: ${planetArray.moonNumber}` : "Number of Moons:"} </p>
                    </li>
                    <li>
                        <p>{userSelect ? `Popular Moons: ${planetArray.namedMoons}` : "Popular Moons"} </p>
                    </li>
                    <li>
                        <p>Population: {`${planetArray.planetPopulation + likes}`} </p>
                    </li>
                </ul>
                        
            </div>

            <div className="planetGallery">
                <ul>
                    {
                    planetArray.map((planet) => {
                        return (
                                <li key={planet.id}>
                                    <h2>{planet.astralName}</h2>
                                    <img src={planet.planetImage} alt={planet.astralName}/>
                                    <button onClick={handleClick}>More Info</button>
                                    <button onClick={handleLikes}>♥️</button>
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