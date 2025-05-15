import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Hero from './components/hero/hero';
import AlgunsProdutos from './components/algunsProdutos/algunsProdutos';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/hero" element={<Hero />} />
        <Route exact path="/alguns" element={<AlgunsProdutos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
