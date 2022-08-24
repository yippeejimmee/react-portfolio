import React, { useState } from 'react';
import Navtab from './navtab';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Home from './pages/home';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
            return <About />;
        };
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navtab currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage}
        </div>
    )
}