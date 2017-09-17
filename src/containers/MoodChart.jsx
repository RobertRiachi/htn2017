import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { db } from '../firebase';
import { VictoryLine, VictoryScatter, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import VerySad from 'material-ui/svg-icons/social/mood-bad';
import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Neutral from 'material-ui/svg-icons/social/sentiment-neutral';
import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';
import VeryHappy from 'material-ui/svg-icons/social/sentiment-very-satisfied';

const data = [
	{day: 1, mood: 1},
	{day: 2, mood: 3},
	{day: 3, mood: 2},
	{day: 4, mood: 1},
	{day: 5, mood: 1},
	{day: 6, mood: 4},
	{day: 7, mood: 4}
]

const fakeData = {
	Sunday: {
		mood: 0,
		score: 0.5,
		weather: 'rain',
	},
	Monday: {
		mood: 1,
		score: 0.7,
		weather: 'sun',
	}
}

class MoodChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentWillMount = () => {
		return db
    .ref()
    .child('Total')
    .once('value')
    .then(res => {
			console.log('snadsfasd', res)
      this.setState({ data: res });
    });
	}

  render() {
		return (
			<div>
		    <g transform={"translate(500, 0)"}>
			    <VictoryChart
		         //theme={VictoryTheme.material}
						 domainPadding={{ x: 40, y: 40 }}
		       >
		         <VictoryAxis
		           tickValues={["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}
		           tickFormat={["S", "M","T", "W", "Th", "F", "S"]}
		         />
		         <VictoryAxis
		           dependentAxis
				   		 tickValues={[0, 1, 2, 3, 4]}
		           tickFormat={["Very Sad","Sad","Neutral","Happy","Very Happy"]}
		         />
		         <VictoryLine
		           data={data}
				       width={2100}
		           colorScale={"warm"}
		           x="day"
		           y="mood"
		         />
			     </VictoryChart>
				 </g>
			</div>
    )
  }
}
export default MoodChart;
