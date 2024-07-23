import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6).required("Please enter your password")
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch("http://localhost:8000/abc/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(values)
                });


                if (response.ok) {
                    localStorage.setItem('email', values.email);
                    localStorage.setItem('password', values.password);
                    navigate("/");
                } else {
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
                <h1 className="text-center">Login Form</h1>
                <form onSubmit={formik.handleSubmit} className="mt-4">

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
                    <button type="submit" className="btn btn-primary mt-3" >Login</button>
                </form>
            </div>



        </>
    );
};

export default Login;
