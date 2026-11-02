import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';

import WeatherIndex from './App';

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <WeatherIndex />
);