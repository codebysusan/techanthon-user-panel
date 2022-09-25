import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
// import './Footer.css';

function Footer() {
    return (
        <section className='footer'>
            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright:{' '}
                    <span className='text-dark'>The Tech Forum</span>
                </div>
            </MDBFooter>
        </section>
    );
}

export default Footer;