import Nav from '../components/Nav'
import { useState } from 'react'

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    
    const authToken = false
    
    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <div className = "overlay">
        <Nav authToken={authToken}/>
        <div className = "home">
            <h1>Swipe Right </h1>
            <button className = "primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}

                
            </button>
        </div>
        </div>
    )
}
export default Home