import React, { useContext } from 'react';
import '../App.css';
import { UserContext } from '../Context';
import { useNavigate } from 'react-router-dom';

function Order() {
    const { cart, itemPrices} = useContext(UserContext);
    const navigate = useNavigate();

    
    const grandTotal = cart.reduce((acc, item, index) => {
        const itemPrice = itemPrices[index];
        const tax = itemPrice * 0.05;
        const shippingFee = 5;
        const itemGrandTotal = itemPrice + tax + shippingFee;
        return acc + itemGrandTotal;
    }, 0);

    return (
        <>
            <div className="main-table">
                <table className="table table-striped caption-top" style={{ width: "80%" }}>
                    <caption style={{ color: "black" }}><h4>Order Summary</h4></caption>
                    <thead>
                        <tr>
                            <td>Total Price</td>
                            <td>Tax per Product</td>
                            <td>Total Tax</td>
                            <td>Shipping Fee</td>
                            <td>Grand Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => {
                            const itemPrice = itemPrices[index];
                            const tax = itemPrice * 0.05;
                            const shippingFee = 5;
                            const itemGrandTotal = itemPrice + tax + shippingFee;
                            return (
                                <tr key={item.id}>
                                    <td>${itemPrice.toFixed(2)}</td>
                                    <td>${tax.toFixed(2)}</td>
                                    <td>${(itemPrice * 0.05).toFixed(2)}</td>
                                    <td>$5.00</td>
                                    <td>${itemGrandTotal.toFixed(2)}</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td colSpan="4"><strong>Grand Total</strong></td>
                            <td><strong>${grandTotal.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn btn-primary" onClick={() => navigate('/confirm')}>Place Order</div>
            </div>
        </>
    );
}

export default Order;
