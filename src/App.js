const Pet = (props) => { 
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
            React.createElement(Pet, { name: "Finley", animal: "Dog", breed: "AussieDoodle" }),
            React.createElement(Pet, { name: "Koda", animal: "Dog", breed: "Collie-Husky" }),
            React.createElement(Pet, { name: "Remy", animal: "Cat", breed: "Bombay" }),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));