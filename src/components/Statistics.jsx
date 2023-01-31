import React from 'react';

class Statistics extends React.Component {
  render() {
    const {good, neutral, bad} = this.props.statistics
    const total = good+neutral+bad;
    const positivePercentage = Math.floor((good/total)*100);
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
