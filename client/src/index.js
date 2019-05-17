import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

//Containers
import HomePage from './HomePage'
import AboutPage from './AboutPage'


ReactDOM.render(
	<div className='container'>
		<HomePage />
		<AboutPage />
	</div>
, document.getElementById('root'));


//



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
