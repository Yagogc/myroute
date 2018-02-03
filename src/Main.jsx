import React, { Component } from 'react';

import styled from 'styled-components'


class Main extends Component {

	render() {
		return (
			<MainWrapper>
				<p>Victoria Line</p>
			</MainWrapper>
		)
	}
}

export default Main;

const MainWrapper = styled.main`
	max-width: 450px;
	margin: 10px auto;
	background-color: rgba(255,255,255,0.3);
	border-radius: 3px;
	padding: 15px;
	@media (max-width: 420px) {
		margin: 10px;
	}
`