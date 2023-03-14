import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          path="/"
          exact
          element={<Login />}
        />
        <Route
          path="/signup"
          exact
          element={<Signup />}
        />
      </Routes>
    </div>
  );
}

export default App;
