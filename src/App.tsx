import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Splash from './pages/Splash';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
