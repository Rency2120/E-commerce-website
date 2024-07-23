import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function SingleProduct() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const API = `https://fakestoreapi.com/products/${id}`;

  const getProductData = async (url) => {
    try {
      const res = await fetch(url);
      const jsonData = await res.json();
      setProduct(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData(API);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, image, description, price } = product;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={image}
            className="img-fluid"
            alt={title}
            style={{ height: "400px", width: "100%", objectFit: 'contain' }}
          />
        </div>
        <div className="col-md-6">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>
            <b>Price:</b>{price}
          </p>
          <div className="main-button d-flex ">
            <button className="btn btn-success" >Add</button>
            <button className="btn btn-danger">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
