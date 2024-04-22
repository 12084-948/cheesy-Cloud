import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
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
                <div className="cart">
                <Link to='/contact'><button >Contact Us</button></Link>
                <Link to='/cart'><i class="fa-solid fa-cart-shopping"></i></Link> 
                </div>

            </nav>
        </div>
    )
}

export default Navbar