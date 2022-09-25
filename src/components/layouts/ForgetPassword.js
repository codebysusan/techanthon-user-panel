import React from 'react';
import {
    MDBContainer,
    MDBInput
} from 'mdb-react-ui-kit';
import './ForgetPassword.css';
import { Link } from 'react-router-dom';

export default function ForgetPassword() {
    return (
        < MDBContainer className="p-3 my-5 d-flex flex-column w-40 center" >

            <h3 className='mb-5'>Forget Password ?</h3>

            <MDBInput wrapperClass='mb-4' placeholder='Email address' id='form1' type='email' />

            <h3 className='mb-5'>Forget Password ?</h3>

            <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password' />

            <MDBInput wrapperClass='mb-4' placeholder='Re-enter Password' id='form3' type='password' />

            <button type="button" class="btn btn-primary btn-sm mb-4">Change Password</button>

            <div className="text-center">
                <p> <Link to='/login'>Back to Login</Link></p>
            </div>
        </MDBContainer >
    );
}