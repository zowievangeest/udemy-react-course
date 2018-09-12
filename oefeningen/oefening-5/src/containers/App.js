import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] inside Constructor', props);
    this.state = {
      persons: [
        { id: '123', name: 'Henk', age: 25 },
        { id: '234', name: 'Ties', age: 22 },
        { id: '345', name: 'Vis', age: 18 },
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] inside ComponentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside ComponentDidMount');
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[UPDATE App.js] Inside componentDidUpdate', prevProps, prevState);
  }

  // state = {
  //   persons: [
  //     { id: '123', name: 'Henk', age: 25 },
  //     { id: '234', name: 'Ties', age: 22 },
  //     { id: '345', name: 'Vis', age: 18 },
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    console.log('[App.js] inside Render()');
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}
                  />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonsHandler} />
            <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
