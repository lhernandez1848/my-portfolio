import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import './App.scss'
import Projects from './pages/Projects/page'
import Resume from './pages/Resume/page'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} /> 
      <Route path='/resume' element={<Resume />} />
    </Routes>
  );
}