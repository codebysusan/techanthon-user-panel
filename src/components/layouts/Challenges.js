import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ChallengesCard from './ChallengesCard';
import Createpost from './Createpost';

export default function Challenges() {
    return (
        <>
            <Header />
            <Createpost />
            <h1 className='text-center my-2'> Your Challenges</h1>
            < ChallengesCard />
            <Footer />
        </>
    );
}