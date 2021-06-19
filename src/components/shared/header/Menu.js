//Library Imports
import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import { TimelineMax } from 'gsap/all'
//Style Imports
import * as sharedStyles from '../sharedStyles'


//Styles
const MenuStyle = styled.div`
    position: absolute;
    top: ${sharedStyles.h30px};
    right: ${sharedStyles.w40px};
    background: ${sharedStyles.unikoBlack};
    width: 45px;
    height: 43px;
    z-index: 1000;
    cursor: pointer;
`
const LineContainerStyle = styled.div`
    position: absolute;
    left: 10px;
    top: 11px;
`
const LineStyle = styled.div`
    background: ${sharedStyles.unikoWhite};
    width: 25px;
    height: 3px;
`
const Line01Style = styled(LineStyle)`
    position: absolute;
    top: 0;
    left: 0;
`
const Line02Style = styled(LineStyle)`
    position: absolute;
    top: 9px;
    left: 0;
`
const Line03Style = styled(LineStyle)`
    position: absolute;
    top: 18px;
    left: 0;
`
const MenuShadowStyle = styled.div`
    position: absolute;
    top: ${sharedStyles.h30px};
    right: ${sharedStyles.w40px};
    background: ${sharedStyles.unikoBlack};
    width: 45px;
    height: 43px;
    z-index: 900;
`
const OpenNav = styled.div`
    position: absolute;
    z-index: 950;
    background: ${sharedStyles.unikoBlack};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`
const NavList = styled.nav`
    position: absolute;
    // background: red;
    top: ${sharedStyles.h240px};
    left: 0;
    right: 0;
    text-align: center;
    list-style-type: none;
    color: ${sharedStyles.unikoWhite};
    font-size: 56px;
    line-height: 1.1;
    font-family: "GothamBlack";
    text-transform: uppercase;
    letter-spacing: 1px; 
`
const NavLink = styled.a`
    text-decoration: none;
    color: ${sharedStyles.unikoWhite};
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${sharedStyles.unikoWhite};
    transition: 0.4s;
    &:hover{
        color: ${sharedStyles.unikoBlack};
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: ${sharedStyles.unikoWhite};
    }

`



//Main Component
class Menu extends Component {

    constructor(props){
        super(props);
        // reference to the DOM node
        this.line01Ref = null
        this.line02Ref = null
        this.line03Ref = null
        this.menuShadowRef = null
        // reference to the animation
        this.menuTween = null
    }

    componentDidMount(){
        // use the node ref to create the animation
        this.menuTween = new TimelineMax({ paused: true })
            this.menuTween.to(this.line01Ref, 0.4, {y: 9})
            this.menuTween.to(this.line03Ref, 0.4, {y: -9}, "-=0.4" )
            this.menuTween.to(this.line02Ref, 0.4, {display: "none"}, "-=0.4" )
            this.menuTween.to(this.menuShadowRef, 0.4, { top: 0, right: 0, width: "100vw", height: "100vh", transformOrigin: "center" } )
            this.menuTween.to(this.line01Ref, 0.4, { rotation: 45}, "-=0.4")
            this.menuTween.to(this.line03Ref, 0.4, { rotation: "-45"}, "-=0.4")

    }

    render() {
        return (
            <Fragment>
                <MenuStyle onClick={() => this.menuTween.play()}>
                    <LineContainerStyle>
                        <Line01Style ref={div => this.line01Ref = div}  />
                        <Line02Style ref={div => this.line02Ref = div} />
                        <Line03Style ref={div => this.line03Ref = div} />
                    </LineContainerStyle>
                </MenuStyle>
                <MenuShadowStyle ref={div => this.menuShadowRef = div} />
                <OpenNav>
                    <nav>
                        <img />
                        <NavList>
                            <NavLink href={"#talent"}><li>Talent</li></NavLink>
                            <NavLink href={"#aboutus"}><li>About Us</li></NavLink>
                            <NavLink href={"#freshnews"}><li>Fresh News</li></NavLink>
                            <NavLink href={"#becomeamodel"}><li>Become A Model</li></NavLink>
                            <NavLink href={"#contact"}><li>Contact</li></NavLink>
                        </NavList>
                    </nav>
                </OpenNav>
            </Fragment>
          )
    }
}


//Exports
export default Menu
