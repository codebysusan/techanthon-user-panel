import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBTextArea
} from 'mdb-react-ui-kit';

import axios from 'axios';

export default function Createpost() {

    const [centredModal, setCentredModal] = useState(false);

    const toggleShow = () => setCentredModal(!centredModal);

    const [post, setPost] = useState({
        ChallangeTitle: "", ChallangeContent: ""
    });

    const [error, setError] = useState();
    let name, value;
    const handlePostInput = (e) => {
        name = e.target.name
        value = e.target.value
        setPost({ ...post, [name]: value })
    }

    const getToken = localStorage.getItem('token')
    const parseToken = JSON.parse(getToken)
    console.log(parseToken)
    let config = {
        headers: {
            'Authorization': 'Bearer ' + parseToken
        }
    }
    const sendPost = async (e) => {

        setError(null);
        e.preventDefault();

        const { ChallangeTitle, ChallangeContent } = post
        await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/challenges`, { ChallangeTitle, ChallangeContent }, config).then(res => {

            if (res.data.message === "Success") {
                setPost(res.data);
                setPost({ ChallangeTitle: "", ChallangeContent: "" });
                alert('Your Challenge is posted. ');
                toggleShow();
            }
            else {
                setError(res.data.message);
                console.log(error);
            }
        }).catch(error => {
            console.log(error);
            setError(error);
        })
    }


    return (
        <>
            <div className='text-end mb-4'>
                <button onClick={toggleShow} className='btn bg-dark text-white text-end fw-3 mx-5 mt-3' > Create post <span className='fw-bold'> + </span>  </button>
                <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                    <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Create Challenge</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                            </MDBModalHeader>
                            <form onSubmit={sendPost}>
                                <MDBModalBody>
                                    <div>
                                        <MDBInput placeholder='Title' id='title' onChange={handlePostInput} type='text' name='ChallangeTitle' value={post.ChallangeTitle || ""} required />
                                        <br />
                                        <MDBTextArea placeholder='Description' rows={10} id='description' onChange={handlePostInput} type='textarea' name='ChallangeContent' value={post.ChallangeContent || ""} required />
                                        <br />
                                    </div>
                                </MDBModalBody>
                                <MDBModalFooter>
                                    <button className='btn bg-secondary text-white' onClick={toggleShow}>Close</button>
                                    <button type='submit' className='btn bg-primary text-white'> Post</button>
                                </MDBModalFooter>
                            </form>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </div>
        </>
    );
}