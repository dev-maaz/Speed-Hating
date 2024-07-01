

import { Route,Router,Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PlayPage from './pages/PlayPage';




function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
  );
}



export default App;
