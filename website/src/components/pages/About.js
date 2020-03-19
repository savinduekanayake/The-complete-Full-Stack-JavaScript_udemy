import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/about.jpg'

import Timeline from '../Common/Timeline';
import Team from '../Common/Team';


class About extends Component {

    render() {
        return (
            <div>
                <Header
                    title='About Us'
                    subTitle="IT'S REALY A GREAT STORY"
                    showButton= {true}
                    image = {image}
               />

                <Timeline />
                <Team />
            </div>
            
        )
    }
}

export default About;
