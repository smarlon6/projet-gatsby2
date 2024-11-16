import React from 'react'
import { Link } from 'gatsby'
import { FaAlignJustify } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'></div>
            <Link to="/">
            <h1 className="title">GATSBY</h1>
                <button className='nav-btn'>
                    <FaAlignJustify/>
                </button>
            </Link>
            <div className='nav-links show-links'>
                <Link to="/" className='nav-link' activeClassName='active-link'>home
                </Link>
                <Link to="/blog" className='nav-link' activeClassName='active-link'>Destaques
                </Link>
                <Link to="/posts" className='nav-link' activeClassName='active-link'>postagens
                </Link>
                <Link to="/post-index" className='nav-link' activeClassName='active-link'>CRUD
                </Link>
                <Link to="/about" className='nav-link' activeClassName='active-link'>about
                </Link>
                <div className='nav-link contact-link'>
                    <Link to="/contact" className='btn'>contact</Link>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar
