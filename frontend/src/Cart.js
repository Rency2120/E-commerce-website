import React, { useContext } from 'react';
import { UserContext } from './Context';
import './App.css'
import { FaPlus, FaMinus } from "react-icons/fa";
import './App.css'
import Order from './Components/Order';

function Cart() {

  const { cart, handleRemove,totalPrice,handleDecrement,handleIncrement,count} = useContext(UserContext);

  return (
    <>
      <div className="container mt-5">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart
            .filter(item => item)
            .map((item, index) => (
              <div key={index} className="row cart-row">
                <div className="col-md-2"></div>
                <div className="col-md-3">
                  <img
                    src={item.image}
                    className="img-fluid"
                    alt={item.title}
                    style={{ height: "200px", width: "100%", objectFit: 'contain' }}
                  />
                </div>
                <div className="col-md-5">
                  <h3>{item.title}</h3>
                  <p style={{ fontSize: "15px" }}>{item.description}</p>
                  <p>
                    <b>Price:</b> $ {(item.price) * (count[item.id] || 1)}
                  </p>
                  <p className='d-flex '>
                    <b>Quantity: </b>
                    <div className="cart-update">
                      <FaPlus className='cart-icon' onClick={() => handleIncrement(item.id)} />
                      <span>{count[item.id] || 1}</span>
                      <FaMinus className='cart-icon' onClick={() => handleDecrement(item.id)} />
                    </div>
                  </p>
                  <div className="main-button d-flex ">
                    <button className="btn btn-danger" onClick={() => handleRemove(item)} >Remove</button>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            ))
        )}
        <div className="total-price">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
      <Order/>
    </>
  );
}

export default Cart;
