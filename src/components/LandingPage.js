import React from 'react'

import { TypeAnimation } from 'react-type-animation';
import PortfolioPiece from './PortfolioPiece';

import Project1 from '../assets/images/portfolio/project1-mock.png'
import Project2 from '../assets/images/portfolio/project2-mock.png'
import Project3 from '../assets/images/portfolio/project3-mock.png'
import Project4 from '../assets/images/portfolio/project4-mock.png'

function LandingPage(props) {
    const {setPage} = props;

    return (
        <div className="app">
            <div className='home-wrapper'>
                <div className='computer-banner'>
                    <div className='computer-text'>
                        <p style={{display: 'flex', flexDirection: 'row'}}><span style={{marginRight: '7px'}}>I study</span>
                            <TypeAnimation
                                // Same String at the start will only be typed once, initially
                                sequence={[
                                'website design',
                                1000,
                                'deep learning',
                                1000,
                                'UI/UX design',
                                1000,
                                'software design',
                                1000,
                                'database design',
                                1000,
                                ]}
                                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                                className="highlight"
                            />
                        </p>
                    </div>
                </div>

                <div className='home-content'>
                    <h1 >JOHN SMITH</h1>
                    <h3 >BROWN STUDENT & DEVELOPER</h3>
                    <a style={{ marginTop: '15px'}} className="button1" role="button" href='#portfolio'>Check My Work Out</a>
                </div>
            </div>
            <div className='container'>
                <div className='portfolio-wrapper' id='portfolio'>
                    <PortfolioPiece id={1} onClick={setPage} background={Project1} title={"Food Disposal"} />
                    <PortfolioPiece id={2} onClick={setPage} background={Project3} title={"Flight Booking"} />
                    <PortfolioPiece id={3} onClick={setPage} background={Project4} title={"Mental Health"}  />
                    <PortfolioPiece id={4} onClick={setPage} background={Project2}  title={"Vehicle Sales"} />
                </div>
            </div>
        </div>
    )
}

export default LandingPage