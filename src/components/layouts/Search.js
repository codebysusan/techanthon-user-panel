import React from 'react';
import { MDBInputGroup, MDBInput, } from 'mdb-react-ui-kit';
import Searchicon from '../../img/searchinvert.png'

export default function Search() {
    return (
        <span className='d-inline-block'>
            <MDBInputGroup className='d-flex justify-content-end mt-3'>
                <MDBInput placeholder='Search' />
                <button className='btn btn-primary me-3'>
                    <img class="icon search" src={Searchicon} alt="" srcset="" />
                </button>
            </MDBInputGroup>
        </span>
    );
}