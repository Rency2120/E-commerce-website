import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useApp } from './Context';

const Registration = () => {
  // const { login, logout } = useApp();
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      phonenumber: '',
      address: '',
      pincode: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phonenumber: Yup.string().required('Phone number is required'),
      address: Yup.string().required('Address is required'),
      pincode: Yup.string().required('Pincode is required'),
      password: Yup.string().min(6).required("Please enter your password")
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:8000/abc/register", {
          method: "POST",
          headers: {
            "Content-Type": 'application/json'
          },
          body: JSON.stringify(values)
        });
        // alert(JSON.stringify(values, null, 2));

        if (!response.ok) {
          throw new Error("Failed to save data");
        }

      } catch (err) {
        console.log("Error saving form data", err);
      }

    }
  });

  return (
    <>
            <div className="container mt-5">
              <h1 className="text-center">Registration Form</h1>
              <form onSubmit={formik.handleSubmit} className="mt-4">
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    className={`form-control ${formik.touched.fullname && formik.errors.fullname ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullname}
                  />
                  {formik.touched.fullname && formik.errors.fullname ? (
                    <div className="invalid-feedback">{formik.errors.fullname}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="invalid-feedback">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="text"
                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="invalid-feedback">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="phonenumber">Phone Number</label>
                  <input
                    id="phonenumber"
                    name="phonenumber"
                    type="text"
                    className={`form-control ${formik.touched.phonenumber && formik.errors.phonenumber ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phonenumber}
                  />
                  {formik.touched.phonenumber && formik.errors.phonenumber ? (
                    <div className="invalid-feedback">{formik.errors.phonenumber}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className={`form-control ${formik.touched.address && formik.errors.address ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                  />
                  {formik.touched.address && formik.errors.address ? (
                    <div className="invalid-feedback">{formik.errors.address}</div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="pincode">Pincode</label>
                  <input
                    id="pincode"
                    name="pincode"
                    type="text"
                    className={`form-control ${formik.touched.pincode && formik.errors.pincode ? 'is-invalid' : ''}`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pincode}
                  />
                  {formik.touched.pincode && formik.errors.pincode ? (
                    <div className="invalid-feedback">{formik.errors.pincode}</div>
                  ) : null}
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
              </form>
            </div>
          
      

    </>
  );
};

export default Registration;
