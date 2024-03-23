
import Home from "./componets/routes/home/home.componet";
import {Routes, Route } from "react-router-dom";
import Navigation from "./componets/routes/navigation/navigation.component";
import SignIn from "./componets/routes/sign-in/sign-in.component";



const Shop = () => {
  return <h1>I am the shop page</h1>

}

const App = () => {
  return (<Routes>
    <Route path="/" element = {<Navigation/>}>
    <Route index element = {<Home/>}/>
    <Route path="shop" element = {<Shop/>}/>
    <Route path="sign-in" element = {<SignIn/>}/>
    </Route>
  
    </Routes>
  );
  };

export default App;
