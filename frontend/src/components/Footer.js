import React from 'react'

const Footer = () => {
  return (
    <footer id='contact'>
      <div className='footer-contact'>
        <h3>Contact me</h3>
        <p className='footer-email'>Email : aadxxxx@gmail.com</p>
        <p className='footer-ph'>Phone no : 944310xxxx</p>
      </div>
      <p className='footer-copyright'>&copy; {new Date().getFullYear()} Traffic.ai</p>
    </footer>
  )
}

export default Footer