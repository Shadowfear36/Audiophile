import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Search from "./components/Search/Search";
import Music from './components/Music/Music';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import CreatePage from './components/Create/CreatePage';
import AlbumPage from './components/Album/AlbumPage';
import PlaylistPage from './components/Playlist/PlaylistPage';
import SongPage from './components/Song/SongPage';

/**
 * Component for routing and displaying the application routes
 *
 * @component
 * @example
 * return (
 *   <App />
 * )
 */

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
        <Route
          path='/create'
          exact
          element={<CreatePage />}
        />
        <Route
          path="/home"
          exact
          element={<Home />}
        />
        <Route
          path='/search'
          exact
          element={<Search />}
        />
        <Route
          path='/music'
          exact
          element={<Music />}
        />
        <Route
          path='/profile/:username'
          element={<Profile />}
        />
        <Route
          path='/settings'
          exact
          element={<Settings />}
        />
        <Route
          path='/album/:id'
          exact
          element={<AlbumPage />}
        />
        <Route
          path='/playlist/:id'
          exact
          element={<PlaylistPage />}
        />
        <Route
          path='/song/:id'
          exact
          element={<SongPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
