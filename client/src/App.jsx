
import './App.css'
import Navigation from './components/Navbar/Navigation'
import ProductList from './components/ProductList/ProductList'
import { Navbar, Container, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Store from './Pages/Store/Store';
import About from './Pages/About/About';


function App() {


  return (
    <CartProvider>
   
    <Router>
    <Navigation />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/store' element={<Store />} />
    <Route path='/about' element={<About />} />

    </Routes>
   
   
    </Router>
    </CartProvider>
  )
}

export default App
