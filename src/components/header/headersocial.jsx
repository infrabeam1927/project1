import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Headersocial = () => {
  return (
    <div className='header__docials'>
    <a href='https://www.linkedin.com' target='_blank' rel="noreferrer"><BsLinkedin/></a>
    <a href='https://www.github.com' target='_blank' rel="noreferrer"><FaGithub/></a>
    <a href='https://www.instagram.com' target='_blank' rel="noreferrer"><BsInstagram/></a>
    </div>

  )
}

export default Headersocial