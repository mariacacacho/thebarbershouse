import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { LayoutContainer } from './styles/Layout.style'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <LayoutContainer>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Home />} />
        </Routes>
    </LayoutContainer>
  );
}

export default App;
