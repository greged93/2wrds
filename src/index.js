import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import seedrandom from 'seedrandom';

seedrandom('I love Starknet', { global: true });

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
