import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {injectGlobal, keyframes} from 'styled-components'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


const animation = keyframes`
	0%{background-position:0% 50%}
	50%{background-position:100% 50%}
	100%{background-position:0% 50%}
`

injectGlobal`
	body {
		height: 100vh;
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		background: linear-gradient(-45deg, #23D5AB, #663399, #663399);
		background-size: 400% 400%;
		animation: ${animation} 15s ease infinite;
	}
`