
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import Personlize from './pages/Personalize';
import CardDetailsMain from './pages/CardDetailsMain';
import LHome from './pages/LHome';
import Personalize from './pages/Personalize';
import CardDesign from './pages/CardDesign';


function App() {
  return (
    <div className="App">
      {/* setting routes to page navigations */}
      <Routes>
                  <Route path='/' exact element={<Home/>}/>
                  <Route path='SignIn'  element={<SignIn/>}/>
                  <Route path='Registration'  element={<Registration/>}/>
                  <Route path='CardDetailsMain' element={<CardDetailsMain/>}/>
                  <Route path='CardDesign' element={<CardDesign/>}/>
                  <Route path='LHome' element={<LHome/>}/>
                  <Route path='Personalize' element={<Personalize/>}/>
      </Routes>
    </div>
  );
}

export default App;
