//Library Imports
import React, {Component} from 'react'
import styled from 'styled-components'
//Style Imports
import * as sharedStyles from '../shared/sharedStyles'
//Image Imports
import freshNewsTitleImg from '../../assets/images/freshNewsTitleImg@2x.png'
import freshNewsTitleHoverImg from '../../assets/images/freshNewsTitleHoverImg@2x.png'


//Styles
const FreshNewsTitleStyle = styled.div`
    position: absolute;
    width: 48px;
    height: 451px;
    bottom: ${sharedStyles.h40px};
    right: ${sharedStyles.w40px};
    background: url(${freshNewsTitleImg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        background: url(${freshNewsTitleHoverImg});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
`

//Main Component
class FreshNewsTitle extends Component {
    render(){
        return (
            <a href={"#blog"}><FreshNewsTitleStyle /></a>
        );
    }
}

//Export
export default FreshNewsTitle;