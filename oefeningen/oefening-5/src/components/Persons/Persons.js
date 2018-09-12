import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Persons.js] inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] inside ComponentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] inside ComponentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate', prevProps, prevState);
  }

  render() {
    console.log('[Persons.js] inside Render()');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        position={index}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    } );
  }
}

export default Persons;