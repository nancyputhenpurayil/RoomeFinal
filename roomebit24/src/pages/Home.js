import React, { useState, useEffect, useRef } from 'react';
import Nav from '../components/Nav';
import AuthModal from '../components/AuthModal';

const wordArray = ['Roommates', 'Renters', 'Friends'];

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const authToken = false;

    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        setIsSignUp(true)
    };

    const [currWord, setCurrWord] = useState(wordArray[0]);
    const [isActive, setIsActive] = useState(true);

    const index = useRef(0);
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                index.current++;
                if (index.current === wordArray.length) {
                    index.current = 0; // Reset index to 0 when end of array is reached
                }
                setCurrWord(wordArray[index.current]);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="overlay">
            <Nav 
            setShowModal={setShowModal}
            showModal={showModal}
            setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <div style={{ textAlign: "center" }}>
                    <h1>Find <u style={{ textDecorationColor: '#FE346C'}}>{currWord}</u>.</h1>
                </div>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
                {showModal && (
                <AuthModal setShowModal={setShowModal}isSignUp={isSignUp}/>
            )}
            </div>
        </div>
    );
};

export default Home;