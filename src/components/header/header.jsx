import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/image1.jpg'
import Headersocial from './headersocial'
const Header = () => {
  return (
    <header>
     <div className='container header__container'>
      <h5>Hello I am</h5>
      <h1>Aaditya Roshan Senthilkumar</h1>
      <h5 className='text-light'>Developer</h5>
      <CTA/>
      <Headersocial/>
      <div className='me'>
      <img src={ME} alt='ME' />
      <a href='contact' className='scroll__down'>scrolldown</a>

      </div>
     </div> 

    </header>
  )
}

export default Header