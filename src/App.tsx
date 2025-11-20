import { Route, Routes } from 'react-router-dom';
import './css/colors.scss';
import Home from './routes/home';
import Projects from './routes/projects';
import ProjectDescription from './routes/projectDescription';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/project/:slug' element={<ProjectDescription />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}