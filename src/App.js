import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Farmers from './pages/Farmers';
import Subsidies from './pages/Subsidies';

function App() {
  return (
    <div style={{ background: 'linear-gradient(to bottom, #a8e6cf, #dcedc1)', minHeight: '100vh' }}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/farmers" element={<Farmers />} />
            <Route path="/subsidies" element={<Subsidies />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;