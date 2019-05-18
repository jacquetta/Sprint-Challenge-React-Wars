import React from 'react';
import './StarWars.css'

function CharacterList(props){
    return (
       <div className='card'>
            <h2 className="title">{props.characters.name}</h2>
            <p className="text"><strong>height:</strong> {props.characters.height}</p>
            <p className="text"><strong>birth-year:</strong> {props.characters.birth_year}</p>
            <p className="text"><strong>species:</strong> {props.characters.species}</p>
            <p className="text"><strong>homeworld:</strong> {props.characters.homeworld}</p>
       </div>
    )
}

export  default CharacterList;