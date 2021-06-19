//Library Imports
import React from 'react'
import styled from 'styled-components'
//Image Imports
import logoImage from '../../../assets/images/logoUniko.svg'


//Styles
const w40px = "3.125vw"
const h30px = "4.28571429vh"

const LogoStyle = styled.img`
    position: absolute;
    left: ${w40px};
    top: ${h30px};
    z-index: 1600;
`


//Main Component
function Logo() {
  return (
    <LogoStyle src={logoImage} />
  );
}


//Exports
export default Logo;
