import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Beverages from './components/Beverages';
import Pudding from './components/Pudding';
import Navbar from './components/Navbar';
import Cheesecake from './components/Cheesecake';
import Home from './routes/Home';
import Salads from './components/Salads';
import Others from './components/Others';
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './components/context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth()

  const location = useLocation();

  // Check if the current location is the Signup page
  const isSignupPage = location.pathname === '/signup';

  // Render Navbar only if not on the Signup page
  const renderNavbar = !isSignupPage ? <Navbar /> : null;

  return (
    <>
      {renderNavbar}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beverages' element={<Beverages />} />
        <Route path='/pudding' element={<Pudding />} />
        <Route path='/cheesecakes' element={<Cheesecake />} />
        <Route path='/salads' element={authUser?<Salads />:<Navigate to='/signup'/>} />
        <Route path='/others' element={<Others />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
