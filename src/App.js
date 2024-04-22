import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/SignUp' element={<SignUpPage />} />
            <Route path='/Profile' element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
