import React from 'react';
import {Link} from "react-router-dom";

const ReceipesList = props => (
  <div className="ReceipesList_maincontainer">
    { props.receipesList.map((receipe)=> {
       return (   
       <div key={receipe.recipe_id} className= "ReceipesList_container" > 
             <img className="card-img-top" src={receipe.image_url} alt={receipe.title} />
                <div className="card-body">
                  <p className="ReceipesList__title"> {receipe.title.length < 16 ? `${receipe.title}`:`${receipe.title.substring(0,20)}...`} </p>
                    <p className="ReceipesList__subtitle">PUBLISHER:<span>  {receipe.publisher} </span>  </p>
                      <button className="ReceipesList__button">
                      <Link to={{
                                  pathname:`/receipe/${receipe.recipe_id}`,
                                  state : {receipe : receipe.title}
                                  }}>  VIEW RECIPE </Link>
                                  
                      </button> 
                </div>
            </div>     
    )})}
  </div>
)

export default ReceipesList;