import './App.css';
import Home from "./Home";
import Dashboard from './Dashboard';
import Onboard from './Onboard';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import  {Cookies, useCookies} from "react-cookie"



function App() {

  const[cookies,setCookie,removeCookie] = useCookies(["user"])
  const auth = cookies.AuthToken
  console.log(auth)

  return (
    <BrowserRouter>
    <Routes>
      <Route path = {'/'} element={<Home />}/>
      {auth &&<Route path = {'/Dashboard'} element={<Dashboard />}/>}
      {auth &&<Route path = {'/Onboard'} element={<Onboard />}/>}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
