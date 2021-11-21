import { useState, useEffect } from 'react';

function PlanetGallery({ planetArray }) {
    const [userSelect, setUserSelect] = useState(false);
    const handleClick = (event) => {
        setUserSelect(event)
    }
        
    useEffect(() => {

    })
    


    return (
        
        <div className="planetGallery">
            <ul>
                {
                planetArray.map((planet) => {
                    return (
                        <>
                            <li>
                                <h2>{planet.astralName}</h2>
                                <img src={planet.planetImage} alt={planet.astralName}/>
                                <button onClick={handleClick}>More Info</button>
                            </li>
                        </>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default PlanetGallery