import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Confirm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    address: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <div className="container mt-5" style={{ width: "70%" }}>
        <h2 style={{ marginBottom: '30px' }}>Customer Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete='off'
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Contact Number</label>
              <input
                type="tel"
                className="form-control"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6"></div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={()=> navigate('/payment')}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Confirm
