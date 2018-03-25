import "./App.scss";

import * as React from "react";

import { Person } from "./person/Person";

// tslint:disable:no-var-requires
const logo = require("./logo.svg");

class App extends React.Component {

  state = {
    persons: [
      { id: "vvsfdbvfsx", name: "Dima", age: 32 },
      { id: "^hb6rtevbd", name: "Akeem", age: 32 },
      { id: "6hbn7bxf7y", name: "Another person", age: 2 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = (personIndex: number) => {
    let persons = [...this.state.persons];

    persons = this.state.persons.filter((person, index) => {
      return index !== personIndex;
    });

    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (element: HTMLInputElement, id: string) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    let person = { ...this.state.persons[personIndex] };
    person.name = element.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    let persons = null;
    let btnClass: string = "";

    if (this.state.showPersons) {
      persons =
        (
          <div>
            {
              this.state.persons.map((person, index) => {
                return <Person key={person.id} id={person.id} name={person.name} age={person.age} />;
              })
            }
          </div>
        );

      btnClass = "red";
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
        <button className={btnClass} onClick={this.toggleNameHandler}>
          {this.state.showPersons ? "Hide names" : "Show names"}
        </button>
        {persons}
        <p className="intro">
          {this.state.otherState}
        </p>
      </div>
    );
  }
}

export default App;
