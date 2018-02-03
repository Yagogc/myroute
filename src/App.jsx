import React, { Component } from 'react';
import './App.css';
import Header from './Header';

import styled from 'styled-components';

class App extends Component {

	componentDidMount() {
		this.tflData();
	}
	
	tflData() {
		fetch('https://api.tfl.gov.uk/StopPoint/Meta/Categories?app_id=1bd9556d&app_key=989d81017ed92ae5170da0cf899eb7e7')
		.then(({ results }) => console.log(results));

		fetch('https://api.tfl.gov.uk/Line/victoria/Status?detail=false&app_id=1bd9556d&app_key=989d81017ed92ae5170da0cf899eb7e7').then(function(response) {
			response.json().then(function(data) {
				console.log(data);
			});
		})
	}
	

  render() {
    return (
      <AppWrapper>
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
	text-align: center;
`