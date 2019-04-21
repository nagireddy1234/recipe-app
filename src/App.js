import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";
import ReceipesList from './Components/ReceipesList';

class App extends Component {
    
  state={
    receipes:[]
  }

   getReceipe = async(e) => {
     e.preventDefault();
     const API_KEY ="b05dde71f8168678f8c1376c33d49be8"
     const receipe = e.target.elements.receipeName.value ;
     const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${receipe}`);
     const data=await api_call.json(); 
     this.setState({receipes: data.recipes});
     console.log(data.recipes);   
  }

  render() {
    return (
      <div className="App">
      <header className="App-header"> 
      <h1 className="App-title">Receipe Search</h1>
        </header>
        <Form getReceipe={this.getReceipe} />
        <ReceipesList receipesList={this.state.receipes}/>
      </div>
    );
  }
}

export default App;
