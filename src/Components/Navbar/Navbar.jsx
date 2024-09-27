import './Navbar.css'
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false)
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="Logo" className='logo'/>
        <ul className= {mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={800}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-300} duration={800}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-170} duration={800}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-300} duration={800}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-300} duration={800}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-300} duration={800} className='btn'>Contact Us</Link></li>
        </ul>
        <IoMenu className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar;