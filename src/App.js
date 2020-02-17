import React, { Component } from 'react';
import './App.css';
import Form from "./Components/Form";
import ReceipesList from './Components/ReceipesList';
require('dotenv').config();

const API_KEY =process.env.REACT_APP_API_KEY;
class App extends Component {
    
  state={
    receipes:[]
  }

   getReceipe = async (e) => {
     e.preventDefault();
     const receipe = e.target.elements.receipeName.value ;   
     const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${receipe}`)
     const data=await api_call.json(); 
     this.setState({receipes: data.recipes});  
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recepe");
    const recepe1 = JSON.parse(json);
    this.setState({recepe1});
  }

  componentDidUpdate = () => {
    const recepe = JSON.stringify(this.state.receipes);
    localStorage.setItem("recepe", recepe);
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
