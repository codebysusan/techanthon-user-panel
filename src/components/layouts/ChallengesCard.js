import React, { useState, useEffect, useRef } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBTextArea,
    MDBBtn
} from 'mdb-react-ui-kit';

// import axios from 'axios';

import up from "../../img/up-arrow.png";
import down from "../../img/down-arrow.png";
import axios from 'axios';

export default function ChallengesCard(props) {

    let { ChallengeTitle, ChallengesContent, upVote, ChallengeId, handler } = props;

    const [centeredComment, setCenteredComment] = useState(false);

    const toggleComment = () => setCenteredComment(!centeredComment);

    const [upcount, setUpcount] = useState(upVote);
    let upVoteRef = useRef()
    const [downcount, setDowncount] = useState(0);
    const [fresh, setFresh] = useState(0)
    const getToken = localStorage.getItem('token');
    const parseToken = JSON.parse(getToken)
    console.log(parseToken)
    let config = {
        headers: {
            'Authorization': 'Bearer ' + parseToken
        }
    }
    const countUpvote = () => {
        console.log('id=', ChallengeId)

        console.log('ss', upcount)
        setUpcount(upcount + 1)
        axios.put(`${process.env.REACT_APP_API_ENDPOINT}/challenge/upVote/${ChallengeId}`, { upVote: upcount }, config).then((response) => {
            upVoteRef = upcount
            upVote = upVoteRef.current
            console.log(response.data)
            console.log('uocount', upVote)

        }).catch((error) => {
            console.log(error)
        })
    }

    const countDownvote = () => {
        setDowncount(downcount + 1);
    }



    // let config = {
    //     headers: {
    //         'Authorization': 'Bearer ' + parseToken
    //     }
    // };

    // const getUp = async (e) => {
    //     const url = "http://localhost:5000/challenge/upVote";
    //     axios.get(url, config)
    //         .then(res => {
    //             getUpvote(res.data)
    //                 (res.data)
    //             console.log(res.data);
    //         })
    //         .catch(error => console.log(`Error: ${error}`))
    // }

    // const getDown = async (e) => {
    //     const url = "http://localhost:5000/challenge/downVote";
    //     axios.get(url, config)
    //         .then(res => {
    //             getDownvote(res.data)
    //                 (res.data)
    //             console.log(res.data);
    //         })
    //         .catch(error => console.log(`Error: ${error}`))
    // }


    // const setUp = async (e) => {
    //     const url = ""
    // }



    useEffect(() => {
        countUpvote()

    }, []);

    return (
        <>

            <div className='text-end '>

                <MDBModal tabIndex='-1' show={centeredComment} setShow={setCenteredComment}>
                    <MDBModalDialog centered>
                        <MDBModalContent>
                            <MDBModalHeader>
                                <MDBModalTitle>Comments </MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleComment}></MDBBtn>
                            </MDBModalHeader>
                            <br />

                            <div className='overflow'>
                                <section className='text-start'>
                                    <MDBRow className="justify-content-center align-items-center h-100">
                                        <MDBCol xl="10">
                                            <MDBCard className="mb-1" style={{ borderRadius: '15px' }}>
                                                <MDBCardBody className="p-4">
                                                    <div className="d-flex justify-content-start align-items-center">
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure cumque ea, magni alias veniam vero?
                                                    </div>
                                                    <hr className="my-1" />
                                                    <MDBCardText className="small">
                                                        By <strong>User12</strong>
                                                    </MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </section>
                            </div>
                            <MDBModalBody>
                                <div>
                                    <MDBTextArea placeholder='Enter your comment...' rows={1} id='comment' type='text' />
                                </div>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <button className='btn bg-secondary text-white' onClick={toggleComment}>Close</button>
                                <button className='btn bg-primary text-white'> Comment</button>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </div>

            <section className="mt-3 mb-5" >
                <MDBContainer className="py-2 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol xl="10">
                            <MDBCard className="mb-2" style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="p-4">

                                    <h3 className='text-left'> {ChallengeTitle} </h3>
                                    <hr className="my-2" />

                                    <div className="d-flex justify-content-start align-items-center">
                                        {ChallengesContent}
                                    </div>
                                    <hr className="my-2" />
                                    <MDBCardText className="small">
                                        By <strong>Susan</strong>
                                        <span className=''>
                                            <img onClick={countUpvote} className='icon mx-3' src={up} alt="uparrow" />
                                            <span> {upVote} upvotes</span>
                                            <img onClick={countDownvote} className='icon mx-3' src={down} alt="" />
                                            <span>{downcount} downvotes</span>
                                        </span>

                                        <span className='mx-3'>
                                            <button className='btn' onClick={toggleComment} >Comment</button>
                                        </span>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
}