import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import App from "../App";
import Receipe from "./Receipe";

const Router = () =>(
  <BrowserRouter>
   <Switch>
     <Route exact path="/" component={App} />
     <Route path="/Receipe" component={Receipe} />
   </Switch>
  </BrowserRouter>
);

export default Router;