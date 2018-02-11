import React, { Component } from 'react';

import styled from 'styled-components'


class Status extends Component {

	render() {
		return (
			<StatusWrapper>
				<p>Victoria Line</p>
			</StatusWrapper>
		)
	}
}
const StatusWrapper = styled.div`
	padding: 10px;
`