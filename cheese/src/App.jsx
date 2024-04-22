import './App.css'
import Beverages from './components/Beverages'
import { Route, Routes } from 'react-router-dom'
import Pudding from './components/Pudding'
import Navbar from './components/Navbar'
import Cheesecake from './components/Cheesecake'
import Home from './routes/Home'
import Salads from './components/Salads'
import Others from './components/Others'
import Contact from './components/Contact'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beverages' element={<Beverages />} />
        <Route path='/pudding' element={<Pudding />} />
        <Route path='/cheesecakes' element={<Cheesecake />} />
        <Route path='/salads' element={<Salads />} />
        <Route path='/others' element={<Others />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


    </>
  )
}

export default App
