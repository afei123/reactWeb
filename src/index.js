import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './searchPage/searchPage';
import App from './navbarHome/navbarHome'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
