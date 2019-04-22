import React from 'react';
import { Link } from "react-router-dom";



const API_KEY ="ca77ba8e00642303614dc2050b0a6f6d";

class Receipe extends React.Component{
  
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.receipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const res=await req.json(); 
    console.log(res); 
    this.setState({activeRecipe : res.recipes[0]});
    console.log(this.state.activeRecipe);
  }
  
  render(){
    
    
    return(
      <div>
      {this.state.activeRecipe.length!==0 && <div key={this.state.activeRecipe.recipe_id} className= "Receipe_container" > 
      <img className="Receipe_container-img" src={this.state.activeRecipe.image_url} alt={this.state.activeRecipe.title} />
         <div className="Receipe_card-body">
           <p className="Receipe__title"> { `${this.state.activeRecipe.title}`} </p>
             <p className="Receipe__subtitle">PUBLISHER:<span> {this.state.activeRecipe.publisher} </span>  </p>
             <p className="Receipe_website">WEBSITE:<span>  <a>{this.state.activeRecipe.publisher_url} </a></span></p>
               <button className="Receipe__button">
               <Link to={{pathname:'/',}}>  HOME </Link>
                 </button> 
         </div>
     </div>  }
      </div>
      
    )
  }
}

export default Receipe;
