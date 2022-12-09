import React from 'react'
import Accordian from './Accordian';
import SlideShow from './SlideShow';

import { HiDocumentMagnifyingGlass, HiLink } from 'react-icons/hi2';
import { FaBrush } from 'react-icons/fa';
import { BsBookmarkCheckFill } from 'react-icons/bs';

function PortfolioPiecePage(props) {
    const {setPage, content} = props;
    const {imageList, title, url, context, research, design, conclusion} = content;

    return (
        <div className='container' id='portfolio'>
            <div className='portfolio-page'>
                <div className='bread-crumbs'>
                    <a onClick={() => setPage('landing')}>Home</a> / {title}
                </div>
                <div className='portfolio-content'>
                    <SlideShow imageList={imageList} />
                    <div className='portfolio-desc'>
                        <h1>{title} <a href={`${url}`} target={"_blank"}><HiLink className='project-link'/></a></h1>
                        <div className='project-description'>
                            <p className='description'>{context}</p>
                        </div>
                        <Accordian icon={<HiDocumentMagnifyingGlass />} title={"Research/Feedback"} text={research}></Accordian>
                        <Accordian icon={<FaBrush />} title={"Design Iterations"} text={design}></Accordian>
                        <Accordian icon={<BsBookmarkCheckFill />} title={"Conclusion"} text={conclusion}></Accordian>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPiecePage