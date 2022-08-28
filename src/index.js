import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {PortfolioContainer} from './components/portfoliocontainer';

ReactDOM.render(<div className='background'><App/></div>, document.getElementById('root'));


// function renderPages() {
//   if (currentPage === 'Home') {
//     ReactDOM.render(  
//       <div className='background'>
//       <App/>
//       </div>, document.getElementById('root'));
//   } else {
//     ReactDOM.render(
//       <div className='blankBackground'>
//         <App/>
//       </div>, document.getElementById('root'));
//   }
// }

// renderPages();



