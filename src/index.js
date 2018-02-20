import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BinaryClock from './BinaryClock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BinaryClock />, document.getElementById('root'));
registerServiceWorker();
