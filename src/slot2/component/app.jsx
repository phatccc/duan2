import React from "react";
import ReactDOM from "react-dom/client";

class MyComponent extends React.Component {
    render() {
        return (
            <section>
                <h1>Hello World</h1>
                <p>This is a paragraph.</p>
            </section>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyComponent />
)
export default MyComponent;