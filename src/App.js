import './App.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';

function App() { 
  return (
    <div className="app">
      <div className="app-wrap">
          <Routes>
            <Route path='/' element={<Auth />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
