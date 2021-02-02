import React, { PureComponent} from 'react';
import Person from "./Person/Person";
import AuthContext from '../../context/auth-context'

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state){
    //     console.log('[Perons.js] getDerivedStateFromProps')
    // }

    //OUT DATED NO LONGER USED
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log('[Persons.js] componentWIllReceiveProps', props)
    // }

    //OUT DATED NO LONGER USED
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log('[Persons.js] componentWIllReceiveProps', props)
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) {
    //         return true
    //     } else {
    //         return false;
    //     }
    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render() {
        console.log('[Person.js] rendering...')
        return <AuthContext.Consumer>
            {this.props.persons.map((person, index) => {

                return (
                    <Person
                        click={() => this.props.clicked(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}
                        isAuthenticated={this.props.isAuthenticated}
                    />
            );
            })}
        </AuthContext.Consumer>
    }
}

export default Persons;