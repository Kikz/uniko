//Library Imports
import React, {Component, Fragment} from 'react'
//import styled from 'styled-components';
import HeroHomeSlideshow from './HeroHomeSlideshow'
import MarqueeModels from './MarqueeModels'
import FreshNewsTitle from './FreshNewsTitle'

//Styles


//Main Component
class Home extends Component {
    render(){
        return (
            <Fragment>
                <HeroHomeSlideshow />
                <MarqueeModels />
                <FreshNewsTitle />
            </Fragment>
        );
    }
}


//Export
export default Home;









