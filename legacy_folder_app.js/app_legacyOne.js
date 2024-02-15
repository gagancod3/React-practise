console.log(React); // an object
/*
<div id="parent">
    <div id="child"> 
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
    <div id="child2"> 
        <h1>I'm a h1 tag</h1>
        <h2>I'm a h2 tag</h2>
    </div>
</div>
we created this structure using react
*/

// ReactElement(Object) which is converted to HTML(Browser Understands) 

//createElement(type, props, ...children)
const parent_1 = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I'm a h1 tag"),
     React.createElement("h2",{},"I'm a h2 tag")]),
     React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"I'm a h1 tag"),
     React.createElement("h2",{},"I'm a h2 tag")])]
);

//JSX 

console.log(parent_1);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React !"
// );
// console.log(heading); // returns an object 

// using ReactDOM for rendering elements
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent_1);
/* On render function, it'll 'replace' the content of html element with id 'root' with the
content which we've created using React (JavaScript) */
