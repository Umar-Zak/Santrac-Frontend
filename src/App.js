import './App.css';
import { Switch, Route,Redirect } from "react-router-dom"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode"
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductsPage';
import ProductDescription from './pages/ProductDescriptionPage';
import Login from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Logout from './component/Logout';
import Dashboard from './pages/Dashboard';

function App() {
 let user=null
  try {
      user=jwt_decode(localStorage.getItem("token"))
  }
  catch (ex) {
   
  }

  return (
    <div>
      <ToastContainer/>
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
      <Route path="/dashboard" render={({ }) => (
        user?<Dashboard/>:<Redirect path="/"/>
      )} >
        
      </Route>
      <Route path="/logout">
        <Logout/>
      </Route>
      <Route path="/" >
         <HomePage/>
      </Route>
      
   </Switch>
    </div>
    
  );
}

export default App;
