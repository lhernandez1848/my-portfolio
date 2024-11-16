import { Route, Routes } from 'react-router-dom';
import './App.scss';
import './css/colors.scss';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}
