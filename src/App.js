import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}