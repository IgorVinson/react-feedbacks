import { Component } from 'react';
import './butoon.module.css';

class Button extends Component {

  render() {
    const { name, onLeaveFeedback } = this.props;
    return (
      <button onClick={()=>onLeaveFeedback(name.toLowerCase())}>
        {name}
      </button>
    );
  }
}

export default Button;


