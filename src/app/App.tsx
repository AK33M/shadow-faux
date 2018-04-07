import * as React from "react";

import { Button, Panel, Well } from "react-bootstrap";

import { Person } from "../person/Person";

// tslint:disable:no-var-requires
const logo = require("../logo.svg");

class App extends React.Component<{}, {}> {

  state = {
    persons: [
      { id: "vvsfdbvfsx", name: "Dima", age: 32 },
      { id: "^hb6rtevbd", name: "Akeem", age: 32 },
      { id: "6hbn7bxf7y", name: "Another person", age: 2 }
    ],
    showPersons: false
  };

  deletePersonHandler = (id: string) => {
    let persons = [...this.state.persons];

    persons = this.state.persons.filter((person) => {
      return id !== person.id;
    });

    this.setState({
      persons: persons
    });
  }

  nameChangedHandler = (id: string, event: React.FormEvent<HTMLInputElement>) => {
    let temp = [...this.state.persons];
    if (!!id) {
      temp.map((x) => {
        if (x.id === id) {
          x.name = event.currentTarget.value;
        }
      });
    } else {
      temp.map((x) => {
        x.name = "Damien";
      });
    }

    this.setState({
      persons: temp
    });
  }

  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  public render(): React.ReactElement<{}> {
    let persons = null;
    // let btnClass: string = "";

    if (this.state.showPersons) {
      persons =
        (
          <div>
            {
              this.state.persons
                .map((person, index) => {
                  return <Person
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    age={person.age}
                    click={this.deletePersonHandler.bind(this, person.id)}
                    changed={this.nameChangedHandler.bind(this, person.id)}
                  />;
                })}
          </div>
        );

      //   btnClass = "red";
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
          <h1 className="title">Welcome to ShadowFaux</h1>
        </header>
        <Panel>
          <Panel.Heading>
            <Button block={true} bsStyle={!this.state.showPersons ? "primary" : "danger"} bsSize="small" onClick={this.toggleNameHandler}>{this.state.showPersons ? "Hide names" : "Show names"}</Button>
          </Panel.Heading>
          <Panel.Body>
            <Well>
              {persons}
            </Well>
          </Panel.Body>
          <Panel.Footer>
            <Button bsStyle="success" bsSize="small" onClick={this.nameChangedHandler.bind(this, null)}>Change Name to Damien</Button>
          </Panel.Footer>
        </Panel>
      </div>
    );
  }
}

export default App;
