import './App.css';

import './components/layouts/Header'
import Login from './components/layouts/Login';
import Register from './components/layouts/Register';
import ForgetPassword from './components/layouts/ForgetPassword';
import Profile from './components/layouts/Profile';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/layouts/Home';
import Challenges from './components/layouts/Challenges';


function App() {
  const token = localStorage.getItem('token')
  console.log('ss', token)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<Login />} />
          {token !== null ? <>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path="/challenges" element={<Challenges />} />

            <Route exact path="/profile" element={<Profile />} />
          </>
            : false}
          <Route exact path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
