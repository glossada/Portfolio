import logo from './logo.svg';
import './App.css';
import {Routes,Route,} from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Bio from './views/Bio/Bio'
import Proyects from './views/Proyects/Proyects'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={< Landing />} />
        <Route path={'/bio'} element={< Bio />} />
        <Route path={'/proyects'} element={< Proyects />} />
      </Routes>
    </div>
  );
}

export default App;
