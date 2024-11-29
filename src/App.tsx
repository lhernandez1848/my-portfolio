import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './css/colors.scss';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}
