import React, { useState } from 'react';
import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,

} from 'mdb-react-ui-kit';

import Filtericon from '../../img/filterinvert.png';

import './Filter.css';

export default function Filter() {

    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);

    return (
        <span className='d-inline-block text-end'>

            <button onClick={toggleShow} className='btn bg-dark text-white text-end fw-3 me-4 mt-3' >
                <img className='filter' src={Filtericon} alt="" srcset="" />
            </button>

            <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                    <MDBModalContent>
                        <MDBModalHeader>

                            <MDBModalTitle>Filter </MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div>


                            </div>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <button className='btn bg-secondary text-white' onClick={toggleShow}>Close</button>
                            <button className='btn bg-primary text-white'> Apply </button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </span>
    );
}