import './App.css';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import { UserProvider } from './Context';
import Confirm from './Components/Confirm';
import PaymentPage from './Components/PaymentPage';
import ConfirmOrder from './Components/ConfirmOrder';
import Registration from './Components/Registration';
import Login from './Components/Login';



function App() {

  return (

    <UserProvider>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
        <Route path='/confirm' element={<Confirm />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/order' element={<ConfirmOrder />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </UserProvider>


  );
}

export default App;
