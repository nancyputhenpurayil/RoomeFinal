import logo from '../images/7081305.png'


const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
      setShowModal(true);
      setIsSignUp(false);
    };
  
    return (
      <nav>
        <div className="logo-container">
          <img
            className="logo"
            src={logo}
            alt="logo"
          />
        </div>
        {!authToken && !minimal && (
          <button
            className="nav-button"
            onClick={handleClick}
            disabled={showModal}
          >
            Log in
          </button>
        )}
      </nav>
    );
  };
  export default Nav;
  