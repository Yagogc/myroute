import React, { Component } from 'react';

import styled from 'styled-components'


class Main extends Component {
	state = {
		line: '',
		status: ''
	}

	componentDidMount() {
		this.tflData();
	}
	
	async tflData() {
		try {
			const res = await fetch('https://api.tfl.gov.uk/Line/victoria/Status?detail=false&app_id=1bd9556d&app_key=989d81017ed92ae5170da0cf899eb7e7');
			let victoria = await res.json();
			victoria = victoria[0]
			console.log(victoria)
			console.log(victoria.lineStatuses[0])

			this.setState({
				line: victoria.name,
				status: victoria.lineStatuses[0].statusSeverityDescription
			})
		} catch(e) {
			console.log(e)
		}
	}
	render() {
		return (
			<MainWrapper>
				<h2>{this.state.line}</h2>
				<p>{this.state.status}</p>
				
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
	box-shadow: 0px 2px 0 rgba(0,0,0,0.3);
	@media (max-width: 420px) {
		margin: 10px;
	}
`