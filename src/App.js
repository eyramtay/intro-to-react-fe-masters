// import React from 'react';
import ReactDOM from 'react-dom';
// import Pet from './Pet';
import SearchParams from './SearchParams';

// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//         React.createElement(Pet, {
//             name: "Finley",
//             animal: "Dog",
//             breed: "AussieDoodle",
//         }),
//         React.createElement(Pet, {
//             name: "Koda",
//             animal: "Dog",
//             breed: "Collie-Husky",
//         }),
//         React.createElement(Pet, {
//             name: "Remy",
//             animal: "Cat",
//             breed: "Bombay",
//         }),
//     ]);
// };

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            {/* <Pet name="Finley" animal="dog" breed="AussieDoodle" />
            <Pet name="Koda" animal="dog" breed="Collie-Husky" />
            <Pet name="Remy" animal="Cat" breed="Bombay" /> */}
            <SearchParams />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
