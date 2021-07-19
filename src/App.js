import logo from './logo.svg';
import './App.css';
import { FaBuilding } from "react-icons/fa"
import {Switch,Route} from "react-router-dom"
import Button from './component/button';
import SectionHeader from './component/section-header';
import Service from './component/service';
import Product from './component/product';
import Navbar from './component/navbar';
import Slide from './component/slide';
import HomePage from './pages/HomePage';
import Footer from './component/footer';
import AboutImage from './component/image';
import Mission from './component/mission';
import ProductPage from './pages/ProductsPage';
import ProductDescription from './pages/ProductDescriptionPage';
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route path="/products" >
        <ProductPage/>
      </Route>
      <Route path="/product/:id">
      <ProductDescription/>
      </Route>
      <Route path="/login" >
        <Login/>
      </Route>
      <Route path="/register">
        <RegisterPage/>
      </Route>
      <Route path="/" >
         <HomePage/>
      </Route>
      
   </Switch>
    
  );
}

export default App;
