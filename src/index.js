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
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		background: linear-gradient(270deg, #8e0fdc, #663399);
		background-size: 400% 400%;
		animation: ${animation} 30s ease infinite;
	}
`