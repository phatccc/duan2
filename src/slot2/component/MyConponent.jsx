import React from "react";
import ReactDOM from "react-dom/client";

class First extends React.Component {
    render() {
        return <h1>First Component</h1>;
    }
}

class Second extends React.Component {
    render() {
        return <h1>Second Component</h1>;
    }
}

class MyComponent extends React.Component {
    render() {
        return (
            <section>
                {this.props.children}
            </section>
        );
    }
}

MyComponent.First = First;
MyComponent.Second = Second;


export default MyComponent;
export { First, Second };