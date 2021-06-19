//Library Imports
import React, {Component} from 'react'
import styled from 'styled-components';
//Image Imports
import photoHero01 from '../../assets/images/photoHero01@2x.png'
import photoHero02 from '../../assets/images/photoHero02@2x.png'
import photoHero03 from '../../assets/images/photoHero03@2x.png'
import photoHero04 from '../../assets/images/photoHero04@2x.png'
import photoHero06 from '../../assets/images/photoHero06@2x.png'


//Styles
const HeroImageStyle = styled.img`
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    cursor: pointer;
`

//Data
const slideshowImageList = [
    photoHero01,
    photoHero02,
    photoHero03,
    photoHero04,
    photoHero06,
]

//Variables
//Initialize Counters
let indexOfImages = 1
let mouseCounter = 0


//Main Component
class HeroHomeSlideshow extends Component {

    slideImage = () => {
        //Track Pixels moved by mouse
        mouseCounter ++
        console.log(mouseCounter)
        //Every X pixels change image and dimensions - When it reaches 50 initialize(for loop could work) 
        if( mouseCounter > 15 ){
            // artworkImage.className = `artworkImage ${artworkImageList[indexOfArtworkImages].ratio}`
            this.heroImageRef.src = slideshowImageList[indexOfImages]
            //Initialize when reached to 50px
            mouseCounter = 0
            //Pass to next image in array
            if ( indexOfImages < slideshowImageList.length ) {
                indexOfImages ++
            }
        }
        //If it reaches end of array restart
        if ( indexOfImages === slideshowImageList.length ){
            indexOfImages = 0
        }
    }

    render(){
        return (
            <a href="#models">
                <HeroImageStyle 
                    src={photoHero01} 
                    ref={ div => this.heroImageRef = div } 
                    onMouseMove={this.slideImage}
                />
            </a>
        );
    }
}

//Exports
export default HeroHomeSlideshow;
