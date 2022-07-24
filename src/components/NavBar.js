import React from 'react'
import ListNav from './ListNav'
import Logo from './Logo'
import '../style/navBar.css'
import SearchBar from './SearchBar'
import LogIn from './LogIn'

const NavBar = () => {
  return (
    <div className='nav'>
    <div div className='navBarAlign'>
        <Logo/>
        <ListNav/>
        <SearchBar/>
        <LogIn/>
        
        </div>
    </div>
  )
}

export default NavBar