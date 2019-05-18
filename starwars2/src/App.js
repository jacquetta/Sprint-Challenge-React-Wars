import React, { Component } from 'react';
import './App.css';
import CharacterList from './Components/CharactersList';
import "./Components/StarWars.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount(){
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })

      .then(data => {
       this.setState({ starwarsChars: data.results });
      })

      .catch(err => {
        throw new Error(err);
      });
  };

  render(){
    return (
      <div className='App container'>
        <h1 className="Header">React Wars</h1>
        <div className= "flex-container"> {
          this.state.starwarsChars.map((char, index) => (
            <CharacterList characters={char} key={index}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
