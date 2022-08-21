import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Login from './component/LoginSignUp'
import CreateAccount from './component/CreateAccount';
import Success from './component/Success';
import AppntDetails from './component/AppntDetails';
import Activity from './component/Activity'
import LandingPage from './component/LandingPage';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path='/Login' element={<Login />} />
        <Route  path='/Home' element={<Home/>} />
        <Route path='/Exercise' element={<Exercise/>} />
        <Route path='/Success' element={<Success />} />
        <Route path='/AppntDetails' element={<AppntDetails />} />
        <Route path='/Activity' element={<Activity />} />
        <Route path='/AppntDetails' element={<AppntDetails />} />
      </Routes>
    </div>
  );
}

export default App;
