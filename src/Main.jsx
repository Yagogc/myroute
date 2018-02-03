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
	margin: 0 auto;
`