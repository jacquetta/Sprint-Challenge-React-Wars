import React, { Component } from 'react';
import './App.css';
import DogBreed from './Components/DogBreed';
class App extends Component {
  constructor(){
    super();
    this.state ={
      doggyBreeds: []
    };
  }

  attachComponents(){
    this.getBreeds("https://dog.ceo/api/breeds/list/all");
  }

  attachComponents = URL => {
    fetch(URL)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ doggyBreeds: data.results });
    })
    .catch(err => {
      throw new Error(err);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Dog Breed</h1>
        </header>
        <div className='dog-list'>
          {this.state.doggyBreeds.map(doggy => (
            <DogBreed dogBreed={doggy} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
