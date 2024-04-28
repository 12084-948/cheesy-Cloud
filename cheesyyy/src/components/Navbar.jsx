import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import { useAuth } from './context/AuthProvider'


const Navbar = () => {
    const [authUser, setAuthUser] = useAuth()
    return (
        <div>
            <nav className="navItems">
                <Link to='/'><h1 className='navLogo'>Cheesy Cloud</h1></Link>

                <div className='navMenu'>
                    <ul id='nav'>
                        <li>
                            <Link to='/beverages'>Beverages</Link>
                        </li>
                        <li>
                            <Link to='/cheesecakes'>Cheesecakes</Link>
                        </li>
                        <li>
                            <Link to='/salads'>Salad</Link>
                        </li>
                        <li>
                            <Link to='/pudding'>Puddings</Link>
                        </li>
                        <li>
                            <Link to='/others'>Others</Link>
                        </li>
                    </ul>
                </div>
                {
                    authUser ? <Logout /> :
                        <div className="cart">
                            <button onClick={() => document.getElementById('my_modal_1').showModal()}>Login</button>
                            <Login />
                            <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link>
                        </div>

                }


            </nav>
        </div>
    )
}

export default Navbar