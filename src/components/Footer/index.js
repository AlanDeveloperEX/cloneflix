import React from 'react'
import {FooterContainer} from './Footer.elements'
import { RiHeartsFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <FooterContainer>
      <span>Made with <RiHeartsFill/> by Alan Dev / B7Web</span> 
      <span>Image rights to Netflix</span> 
      <span>Database by Themoviedb.org</span>
    </FooterContainer>
  )
}

export default Footer
