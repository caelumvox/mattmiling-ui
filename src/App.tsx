import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Splash from './components/Splash';
import About from './components/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
