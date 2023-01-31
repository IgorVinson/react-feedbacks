import { Component } from 'react';
import Button from './ui element/Button';

export class FeedbackOptions extends Component{
  render() {
    return (
      <>
        <Button onLeaveFeedback={this.props.onLeaveFeedback} name='Good' />
        <Button onLeaveFeedback={this.props.onLeaveFeedback} name='Neutral' />
        <Button onLeaveFeedback={this.props.onLeaveFeedback} name='Bad' />
      </>
    )
  }
}
