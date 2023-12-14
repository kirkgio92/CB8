import Button from '../button/Button'
import './index.css'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <img src="https://img.logoipsum.com/249.svg" alt="logo" />
            <div className='buttons__wrapper'>
                <Button textContent="LogIn" color='green' />
                <Button textContent="LogOut" color='red' />
            </div>
        </div>
    )
}

export default NavBar