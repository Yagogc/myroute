import React, { Component } from 'react';
import logo from './tfl-logo.png';
import styled, {keyframes} from 'styled-components'


class Header extends Component {

	render() {
		return (
			<HeaderWrapper>
				<Logo src={logo}lt="logo" />
			</HeaderWrapper>
		)
	}
}

export default Header;

const rotate360 = keyframes`
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`
const HeaderWrapper = styled.header`
	background-color: #222;
	height: auto;
	padding: 5px;
	color: white;
`

const Logo = styled.img`
	animation: ${rotate360} infinite 20s linear;
	height: 70px;
`
