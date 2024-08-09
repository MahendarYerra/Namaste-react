// const heading =React.createElement
// ("h1",
//     {id: "heading"},
//     "haiiiiii");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent =React.createElement(
"div",
    {id: "parent"},
    React.createElement
    ("div",{id: "child"},[
     React.createElement("h1",{}, "haiiiiii h1 tag from parent"),
     React.createElement("h2",{}, "haiiiiii h2 tag from parent"),
    ]),
    React.createElement ("div",{id: "child2"},[
     React.createElement("h1",{}, "haiiiiii h1 tag from parent"),
     React.createElement("h2",{}, "haiiiiii h2 tag from parent"),
    ]),
);
   console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
