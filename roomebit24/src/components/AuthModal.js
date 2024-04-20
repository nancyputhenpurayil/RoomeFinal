const AuthModal = ({ setShowModal }) => {

    const handleClick = () => {
        setShowModal(false)
    }
    return (
        <div className="auth-modal">
            <div onClick={handleClick}>x</div>
        </div>
    )
}
export default AuthModal
