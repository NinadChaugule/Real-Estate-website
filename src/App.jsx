import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
