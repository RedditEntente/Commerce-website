
import Home from "./componets/routes/home/home.componet";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (<Routes>
    <Route path="/home" element = {<Home/>}/>
  
    </Routes>
  );
  };

export default App;
