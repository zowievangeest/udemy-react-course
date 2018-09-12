import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] inside ComponentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] inside ComponentDidMount');
    if(this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log('[Person.js] inside Render()');
    return (
      <Aux>
        <p onClick={this.props.click}> i'm {this.props.name}! and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
