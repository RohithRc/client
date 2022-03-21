import './App.css';
import Home from "./Home";
import Dashboard from './Dashboard';
import Onboard from './Onboard';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import  {Cookies, useCookies} from "react-cookie"



function App() {




  return (
    <BrowserRouter>
    <Routes>
      <Route path = {'/'} element={<Home />}/>
      <Route path = {'/Dashboard'} element={<Dashboard />}/>
      <Route path = {'/Onboard'} element={<Onboard />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
