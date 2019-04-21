import React from 'react';


const Form = (props) => {
return (
 <form className="form-container" onSubmit={props.getReceipe} >
    <input type="text" name="receipeName"/>
    <button> SEARCH </button>
 </form>
);

}

export default Form;