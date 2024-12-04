const enable = false;
const text = "My button";
const size = 50;
const playholder = "Please enter your name";

const App = () => {
    return (
        <section>
            <button disabled={!enable}>{text}</button>
            <input type="text" placeholder={playholder} size={size} />
        </section>
    )
}

export default App;
