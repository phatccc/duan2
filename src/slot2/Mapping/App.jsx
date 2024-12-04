const Array = ["Apple", "Banana", "Cherry" , "Durian" , "Elderberry" , "Fruit"];

const object = {
    "Apple": "Red",
    "Banana": "Yellow",
    "Cherry": "Red",
    "Durian": "Green",
    "Elderberry": "Purple",
    "Fruit": "Red",
}

const App = () => {
    return (
            <section>
                <h2>Array</h2>
            <ul>
                {Array.map((i) => (<li key={i}>{i}</li>))}
            </ul>
            <h2>Object</h2>
            <ul>
                {Object.keys(object).map((i) => (<li key={i}>{i} : <strong>{object[i]}</strong></li>))}
            </ul>
        </section>

    )
}

export default App;
