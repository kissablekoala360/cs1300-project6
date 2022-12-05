import React from 'react'
import ReactSwipe from 'react-swipe';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';


function SlideShow(props) {
    const {imageList} = props;
    let reactSwipeEl;

    return (
    <div className='carousel-container'>
        <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={el => (reactSwipeEl = el)}
        >
            {
                imageList.map((image, index) => {
                    return <img src={process.env.PUBLIC_URL+image} key={index} className='portfolio-image'  />;
                })
            }
        </ReactSwipe>
        <MdOutlineKeyboardArrowLeft className='carousel-back' onClick={() => reactSwipeEl.prev()}>Previous</MdOutlineKeyboardArrowLeft>
        <MdOutlineKeyboardArrowRight className='carousel-next' onClick={() => reactSwipeEl.next()}>Next</MdOutlineKeyboardArrowRight>
    </div>
    )
}

export default SlideShow