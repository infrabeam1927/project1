import React from 'react'
import CV from '../../assets/CV.pdf'
const CTA = () => {
  return (
    <div className='CTA'>
      <a href={CV} download className='btn'>check out resume</a>
      <a href="#contact" className='btn primary'>lets talk</a>
    </div>
  )
}

export default CTA