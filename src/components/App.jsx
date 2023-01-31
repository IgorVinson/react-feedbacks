import Statistics from './Statistics';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './ui element/Section';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title = "Statistics">
          {good+neutral+bad===0
            ? <p>No feedback given</p>
            : <Statistics statistics={this.state}/>}
        </Section>
      </div>
    );
  }

};

