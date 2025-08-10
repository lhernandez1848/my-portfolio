import { Route, Routes } from 'react-router-dom';
import './css/colors.scss';
import Home from './routes/home';
import Projects from './routes/projects';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}