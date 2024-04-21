import logo from '../images/roome (2).svg'
import React from 'react'

const Nav = ({ setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () =>{
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>

            {!authToken && (<button 
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
            >Log in</button>)}
        </nav>
    )
}
export default Nav
