import * as React from "react";

interface IPersonProps {
    id: string;
    name: string;
    age: number;
    click?: () => void;
    changed?: () => void;
}

export const Person: React.StatelessComponent<IPersonProps> = (props) => {
    return (
        <div className="person">
            <p className="display" onClick={props.click}>
                My name is {props.name}, and I am {props.age} years old.
                </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};