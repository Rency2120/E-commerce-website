import React, { useContext, useEffect, useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';
import { UserContext } from './Context';

function Home() {

  const [data, setData] = useState([]);
  
  const {addToCart, handleRemove }= useContext(UserContext)
  

  const API = 'https://fakestoreapi.com/products';

  const getApiData = async (url) => {
    try {
      const res = await fetch(url)
      const jsonData = await res.json();
      setData(jsonData);
      console.log(jsonData)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getApiData(API)
  }, [])
  
  const navigate = useNavigate()
  

  return (
    <>
      <div className="container m-5 ">
      
        <div className="row gy-5">

          {
            data.map((curElem) => {
              const { id, title, image, description, price } = curElem
              return (
                <>
                  <div className="col-md-4" style={{width: '22rem'}}>
                    <div key={id} className="card" >
                      <img src={image} className="card-img-top img-fluid" alt="..." style={{height:"200px", width:"100%", objectFit: 'contain'}} />
                      <div className="card-body">
                        <h5 className="card-title">{title.slice(0,12)}</h5>
                        <p className="card-text" >{description.slice(0,90)}...<br></br><span><button className='read-button' onClick={()=> navigate(`/singleproduct/${id}`)} >Read More</button></span></p>
                        <p><span><b>Price:</b> ${price}</span></p>
                        <div className="main-button d-flex ">
                          <button className="btn btn-success" onClick={()=>addToCart(curElem)} >Add</button>
                          <button className="btn btn-danger" onClick={()=> handleRemove(curElem)} >Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
