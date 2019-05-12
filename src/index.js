import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCloud,faCloudShowersHeavy,faCloudSunRain,faCloudMoonRain,faCloudSun } from '@fortawesome/free-solid-svg-icons';






library.add(faCloud,faCloudShowersHeavy,faCloudSunRain,faCloudMoonRain,faCloudSun);

render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
