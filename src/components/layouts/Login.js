import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";



import Welcomemsg from './Welcomemsg';
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import useToken from './useToken';

import {
    MDBContainer,
    MDBInput
} from 'mdb-react-ui-kit';

import './Login.css';



export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const { token, setToken } = useToken()
    const his = useNavigate()
    console.log('tokent', token)
    const handleLogin = async (e) => {
        e.preventDefault()
        setError(null)
        //setLoading(true)

        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
            email: email,
            password: password
        }).then(response => {
            console.log(response.data)
            if (response.data.message === 'success') {

                setToken(response.data.token)
                his('/home')
                window.location.reload()

            } else {
                console.log(response.data.message)
                setError(response.data.message)


            }

        }).catch(error => {
            console.log(error)

        })

    }


    console.log('ddd', token)

    return (
        <div className="center">
            <Welcomemsg />
            < MDBContainer className=" p-3 my-5 d-flex flex-column" >
                <form onSubmit={handleLogin}>
                    <MDBInput type='email' wrapperClass='mb-4' placeholder='Email address' value={email} onChange={e => setEmail(e.target.value)} required />

                    <MDBInput type='password' wrapperClass='mb-4' placeholder='Password' value={password} onChange={e => { setPassword(e.target.value) }} required />

                    <div className="d-flex justify-content-between mx-3 mb-4">

                    </div>

                    <MDBInput type='submit' className='btn btn-primary' placeholder='Password' />
                    <center>
                        <span style={{ color: 'red', alignContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>{error}</span>
                    </center>
                </form>

                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                </div>

            </MDBContainer >




        </div>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}