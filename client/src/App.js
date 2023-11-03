import logo from './logo.svg';
import './App.css';
import {Routes,Route,} from 'react-router-dom';
import Landing from './views/Landing/Landing'
import Bio from './views/Bio/Bio'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={< Landing />} />
        <Route path={'/bio'} element={< Bio />} />
      </Routes>
    </div>
  );
}

export default App;
