import React from 'react';
import classes from "./Cockpit.module.css";

const Cockpit = (props) => {

    let assignedClasses = []
    let btnClass = "";

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); //CLASSES WILL BE RED
    }
    if (props.persons.length <= 1){
        assignedClasses.push(classes.bold); //CLASSES WILL BE BOLD
    }

    return (
        <div className={classes.Cockpit} >
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is Workign!</p>
            <button className={btnClass} onClick={props.clicked}>Switch Name</button>
        </div>
    );
}

export default Cockpit;