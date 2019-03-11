import React from 'react';
import './StarWars.css';

function Character(props) {
    return (
      <div className="bio">
        <h3>{props.character.name}</h3>
        <p>
          <strong>Born:</strong> {props.character.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {props.character.gender}
        </p>
        <p>
          <strong>Home World:</strong> {props.character.homeworld}
        </p>
        <p><strong>Species:</strong> {props.character.species}</p>
      </div>
    );
}

export default Character;