import { useState } from 'react';

const PlanetInformation = ({ planetArray }) => {
    
    const [userSelect, setUserSelect] = useState(0);

    return (
        <>
            {
                <ul>
                    <li>
                    <h2>Name: {planetArray.astralName} </h2>
                    </li>
                    <li>
                    <p>Terrain: {planetArray.planetTerrain}</p>
                    </li>
                    <li>
                    <p>Climate: {planetArray.planetClimate}  </p>
                    </li>
                    <li>
                    <p>Number of Moons: {planetArray.moonNumber} </p>
                    </li>
                    <li>
                    <p>Popular Moons: {planetArray.namedMoons} </p>
                    </li>
                    <li>
                    <p>Population:  </p>
                    </li>
                </ul>

            }
            
        </>
)
}

export default PlanetInformation