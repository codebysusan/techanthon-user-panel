import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody
} from 'mdb-react-ui-kit';

import Header from './Header';
import Footer from './Footer';

export default function Profile() {
    return (
        <section >
            <Header />
            <MDBContainer className="py-5">
                <MDBCard className="mb-5 mt-5">
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Full Name</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">

                                <input style={{ border: 0 }} type="text" value="Johnatan Smith" name="fullname" id="fullname" />
                                <button>Update</button>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Email</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <input style={{ border: 0 }} type="text" value="susan@gmail.com" name="email" id="email" />
                                <button className='btn btn-primary'>Update</button>

                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Phone</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <input style={{ border: 0 }} type="password" value="pass..." name="password" id="password" />
                                <button className='btn btn-primary'>Update</button>
                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                            <MDBCol sm="3">
                                <MDBCardText>Mobile</MDBCardText>
                            </MDBCol>
                            <MDBCol sm="9">
                                <input style={{ border: 0 }} type="phone" value="0987654321" name="password" id="password" />
                                <button className='btn btn-primary'>Update</button>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer >

            <Footer />
        </section >
    );
}