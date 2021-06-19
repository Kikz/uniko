//Library Imports
import React, {Component} from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../sharedStyles'
//Image Imports
import arrowFooter from '../../../assets/images/arrowFooter.svg'


//Styles
const ArrowFooterStyle = styled.img`
    position: absolute;
    bottom: ${sharedStyles.h40px};
    left: ${sharedStyles.w40px};
`

//Main Component
class Footer extends Component {
    render(){
        return (
            <ArrowFooterStyle src={arrowFooter}/>
        );
    }
}

//Export
export default Footer;