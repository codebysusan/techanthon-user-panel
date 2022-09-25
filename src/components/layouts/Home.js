import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./Home.css";
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import Filter from './Filter';
import ChallengesCard from './ChallengesCard';

import useToken from './useToken';


export default function Home({ props }) {

    const { token, setToken } = useToken();

    console.log('home token', token);

    const [data, getData] = useState([]);

    const getToken = localStorage.getItem('token');
    const parseToken = JSON.parse(getToken)
    console.log(parseToken)
    let config = {
        headers: {
            'Authorization': 'Bearer ' + parseToken
        }
    }

    const getData2 = async (e) => {
        const url = `${process.env.REACT_APP_API_ENDPOINT}/challenges`;

        axios.get(url, config)
            .then(res => {
                getData(res.data)
                    (res.data)

                console.log(res.data);
            })
            .catch(error => console.log(`Error: ${error}`))
    }


    useEffect(() => {
        getData2();

    }, []);


    return (
        <>
            <Header />
            <div className='d-flex flex-row-reverse '>
                <Filter />
                <Search />
            </div>

            {
                data.map((element) => {
                    console.log(element.UpVote)
                    return (
                        <ChallengesCard ChallengeTitle={element.ChallangeTitle
                        } ChallengesContent={element.ChallangeContent} upVote={element.UpVote} ChallengeId={element.ChallengeId} />
                    )
                })
            }
            <ChallengesCard />

            <Footer />
        </>
    );
}