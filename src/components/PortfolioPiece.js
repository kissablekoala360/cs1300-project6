import React from 'react'
import { TypeAnimation } from 'react-type-animation';


function PortfolioPiece(props) {
    const {id, onClick, background, title} = props
    return (
        <section className='portfolio-piece'>
            <div className="content">
                <a onClick={() => onClick('piece'+id.toString())}>
                    <div className="content-overlay"></div>
                    <img className="content-image" src={background} />
                    <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">
                        <TypeAnimation
                                // Same String at the start will only be typed once, initially
                                sequence={[
                                    title,
                                    2000,
                                    title,
                                    2000,
                                ]}
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                wrapper="span" // Animation will be rendered as a <span>
                            />
                        </h3>
                    </div>
                </a>
            </div>
            {/* <div className='piece-preview' style={{backgroundImage: `url(${background})`, content: title}}></div> */}
        </section>
    )
}

export default PortfolioPiece