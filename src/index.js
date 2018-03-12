import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import URL from './base'
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<URL/>, document.getElementById('root'));
registerServiceWorker();
