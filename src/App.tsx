import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.scss'
import Projects from './pages/Projects/Projects';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} /> 
    </Routes>
  );
}