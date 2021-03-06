import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { db } from '../firebase';
import {
  VictoryLine,
  VictoryScatter,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme
} from 'victory';
import VerySad from 'material-ui/svg-icons/social/mood-bad';
import Sad from 'material-ui/svg-icons/social/sentiment-dissatisfied';
import Neutral from 'material-ui/svg-icons/social/sentiment-neutral';
import Happy from 'material-ui/svg-icons/social/sentiment-satisfied';
import VeryHappy from 'material-ui/svg-icons/social/sentiment-very-satisfied';

const data = [
  { day: 1, sentiment: 0 },
  { day: 2, sentiment: 0.75 },
  { day: 3, sentiment: 0.5 },
  { day: 4, sentiment: 0.5 },
  { day: 5, sentiment: -0.5 },
  { day: 6, sentiment: 0 },
  { day: 7, sentiment: -0.5 }
];

class MoodChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <g transform={'translate(500, 0)'}>
        <VictoryChart
          //theme={VictoryTheme.material}
          domainPadding={{ x: 40, y: 40 }}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7]}
            tickFormat={['S', 'M', 'T', 'W', 'Th', 'F', 'S']}
          />
          <VictoryAxis
            dependentAxis
            tickValues={[-1, -0.5, 0, 0.5, 1]}
            tickFormat={['Negative', ' ', 'Neutral', ' ', 'Positive']}
          />
          <VictoryLine
            data={data}
            width={2100}
            colorScale={'warm'}
            x="day"
            y="sentiment"
          />
        </VictoryChart>
      </g>
    );
  }
}
export default MoodChart;
