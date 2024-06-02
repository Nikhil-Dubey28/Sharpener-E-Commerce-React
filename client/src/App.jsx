
import './App.css'
import Navigation from './components/Navbar/Navigation'
import ProductList from './components/ProductList/ProductList'
import { Navbar, Container, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <>
    <Navigation />
    <ProductList />
    <footer className="bg-primary text-white text-center py-3 mt-4">
        <Container>
          <p>&copy; 2024 The Generics</p>
        </Container>
      </footer>
    </>
  )
}

export default App
