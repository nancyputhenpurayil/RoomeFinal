import logo from '../images/7081305.png'

const Nav = ({authToken}) => {

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>

            {!authToken && <button className='nav-button'>Log in</button>}
        </nav>
    )
}
export default Nav
