import React from "react";
import ReactDOM from "react-dom/client";

// React Element

/* createElement ==> ReactElement - Object  (when we render this to DOM) ==> HTMLElement */

// const heading = React.createElement("h1", { id: "heading" }, "Hello ji");
// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX (transpiled before it reaches the JS Engine)
/* JSX ==> React.createElement - JS Object ==> HTMLElement(render)  
this conversion of JSX to React.createElement is done by 'Babel' */

//for single line jsx 
// const jsxHeading = <h1 className="head">Hello JSX ji</h1>;

//for multiple line jsx (we use parenthesis - MANDATORY to use)
// const jsxHeading = 

// const heading =
// (
// <h1 className="head">Hello JSX ji</h1>
// );

// console.log(jsxHeading);

// root.render(heading);

// root.render(jsxHeading);
/* it replace everything inside the element with id "root" */


/* 
React component 
2 types :
class based components - OLD Way
functional components - New Way 
*/

// React Functional Component


// const headingComponent = () => {
//     return <h1>Namaste React Functional component</h1>;
// }

//similar syntax (without return keyword)
/* for single line return we can write like -
const headingComponent = () => <h1 id="heading">Namaste React Functional component</h1>;
*/

const Title = () => (
    <h1 className="head">Namaste React using JSX</h1>
);
const test_reactComp = (<span>*React Element*</span>)
const title_reactComp = (
    <h1>{test_reactComp} Namaste React using JSX React Component</h1>
);

const number = 1000;
// Component composition
const HeadingComponent = () => (
   <div id="container">
     {number}
     {title_reactComp}
        
     <Title />
     <Title></Title>
     {Title()}

     <h1 id="heading">Namaste React Functional component</h1>
    </div>
);
//this how we render react functional components 
root.render(<HeadingComponent />);

