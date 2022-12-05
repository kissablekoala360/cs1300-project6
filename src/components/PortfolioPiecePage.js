import React from 'react'
import Accordian from './Accordian';
import SlideShow from './SlideShow';

import { RiAlarmWarningFill } from 'react-icons/ri';
import { HiDocumentMagnifyingGlass } from 'react-icons/hi2';
import { FaBrush } from 'react-icons/fa';
import { BsFillCheckSquareFill } from 'react-icons/bs';

function PortfolioPiecePage(props) {
    const {setPage, content} = props;
    const {imageList, title} = content;

    return (
        <div className='container'>
            <div className='portfolio-page'>
                <div className='bread-crumbs'>
                    <a onClick={() => setPage('landing')}>Home</a> / {title}
                </div>
                <div className='portfolio-content'>
                    <SlideShow imageList={imageList} />
                    <div className='portfolio-desc'>
                        <h1 style={{marginBottom: 10}}>{title}</h1>
                        <Accordian icon={<RiAlarmWarningFill />} title={"Context/Problem"} text={"Some text"}></Accordian>
                        <Accordian icon={<HiDocumentMagnifyingGlass />} title={"Research/Feedback"} text={"Some text"}></Accordian>
                        <Accordian icon={<FaBrush />} title={"Design Iterations"} text={"Some text"}></Accordian>
                        <Accordian icon={<BsFillCheckSquareFill />} title={"Conclusion"} text={"Some text"}></Accordian>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioPiecePage