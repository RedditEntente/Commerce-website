
import Home from "./componets/routes/home/home.componet";
import {Routes, Route } from "react-router-dom";
import Navigation from "./componets/routes/navigation/navigation.component";
import Authentication from "./componets/routes/authentication/authentication";

import Shop from "./componets/routes/shop/shop.componet";




const App = () => {
  return (<Routes>
    <Route path="/" element = {<Navigation/>}>
    <Route index element = {<Home/>}/>
    <Route path="shop" element = {<Shop/>}/>
    <Route path="auth" element = {<Authentication/>}/>
    </Route>
  
    </Routes>
  );
  };

export default App;
