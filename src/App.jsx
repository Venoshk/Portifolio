
import { About } from "./Pages/About/About";
import { Home } from "./Pages/Home/Home";
import {Routes, Route} from 'react-router-dom'
import { Project } from "./Pages/Project/Project";
const App = () => {
    return(
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
      </Routes>
      </>
    )
};

export default App