import React from 'react';


function CharacterList(props){
    return (
       <div className='card'>
            <p>{props.characters.name}</p>
            <p><strong>height:</strong> {props.characters.height}</p>
            <p><strong>birth-year:</strong> {props.characters.birth_year}</p>
            <p><strong>species:</strong> {props.characters.species}</p>
            <p><strong>homeworld:</strong> {props.characters.homeworld}</p>
       </div>
    )
}

export  default CharacterList;