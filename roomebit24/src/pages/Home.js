import Nav from '../components/Nav'

const Home = () => {

    const authToken = false
    const handleClick = () => {
        console.log('clicked')
    }

    return (
        <>
        <Nav authToken={authToken}/>
        <div className = "home">
            <h1>Swipe Right </h1>
            <button className = "primary-button" onClick={handleClick}>
                {authToken ? 'Signout' : 'Create Account'}

                
            </button>
        </div>
        </>
    )
}
export default Home