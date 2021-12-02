import React from "react";
import Crs from "./Crs";

import Home from "./Home";
// import { Route,Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      
        {/* <Switch>
          <Route path="/" component={Home} />
          <Route path="/course" component={Crs} />
        </Switch> */}
        <Home/>
        <Crs/>
      
    </>
  );
}
