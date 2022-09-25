import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput
} from 'mdb-react-ui-kit';

import './Register.css';
import { Link } from 'react-router-dom';


export default function Register() {

    const [user, setUser] = useState({
        email: "", password: "", confirmPassword: "", UserFirstName: "", UserLastName: "",
    })

    const his = useNavigate()
    const [error, setError] = useState()

    let name, value;
    const handleInput = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        setError(null);
        e.preventDefault();

        const { email, password, confirmPassword, UserFirstName, UserLastName } = user
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/user`, {
            email, password, confirmPassword, UserFirstName, UserLastName
        }).then(res => {
            if (res.data.message === 'Success') {
                setUser(res.data)
                setUser({ email: "", password: "", confirmPassword: "", UserFirstName: "", UserLastName: "", })
                alert('Registration Successfull')
                his('/login')
            } else {
                setError(res.data.message)
                console.log('ddd', error)
            }
        }).catch(error => {
            console.log(error)
            setError(error)
        })
    }


    return (
        <div className='center w-100' style={{ marginTop: '5%' }}>
            <h1 className='text-center'> Welcome to Tech Form </h1>
            <MDBContainer >
                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <div>
                                    <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</h3>
                                </div>
                                <form onSubmit={PostData}>
                                    <div className="d-flex flex-row align-items-center mb-4 mt-6">
                                        <MDBInput placeholder='Your First Name' id='form1' type='text' name='UserFirstName' className='w-100' onChange={handleInput} value={user.UserFirstName || ''} required />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4 mt-3">

                                        <MDBInput placeholder='Your Last Name' id='form1' type='text' name='UserLastName' className='w-100' onChange={handleInput} value={user.UserLastName || ''} required />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">

                                        <MDBInput placeholder='Your Email' id='form2' type='email' name='email' onChange={handleInput} value={user.email || ''} required />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">

                                        <MDBInput placeholder='Password' id='form3' type='password' name="password" onChange={handleInput} value={user.password || ''} required />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBInput placeholder='Repeat your password' id='form4' type='password' name="confirmPassword" onChange={handleInput} value={user.confirmPassword || ''} required />
                                    </div>

                                    <span style={{ color: 'red', alignContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>{error}</span>

                                    <MDBInput type="submit" className='btn btn-primary' style={{ width: '70%' }} size='md' value="Register"></MDBInput>

                                    <div className="text-center">
                                        <p>Already have a account? <Link to='/login'>Login</Link></p>
                                    </div>

                                </form>
                            </MDBCol>
                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

