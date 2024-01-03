import './App.css';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Router>
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/" element={<Navigate to="/Home" replace/>}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
