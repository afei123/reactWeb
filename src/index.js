import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarHome from './navbarHome/navbarHome'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavbarHome />, document.getElementById('root'));
registerServiceWorker();
