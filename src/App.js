import React from 'react'
import './App.css';

import LandingPage from './components/LandingPage';
import PortfolioPiecePage from './components/PortfolioPiecePage';
import data from './assets/pieceData.json';

function App() {
    const [page, setPage] = React.useState('landing');

    if (page === 'landing') {
        return <LandingPage setPage={setPage} />
    } else if (page === 'piece1') {
        return <PortfolioPiecePage setPage={setPage} content={data[0]} />
    } else if (page === 'piece2') {
        return <PortfolioPiecePage setPage={setPage} content={data[1]} />
    } else if (page === 'piece3') {
        return <PortfolioPiecePage setPage={setPage} content={data[2]} />
    } else if (page === 'piece4') {
        return <PortfolioPiecePage setPage={setPage} content={data[3]} />
    }
}

export default App;
