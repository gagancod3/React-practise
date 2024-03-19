import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React, { useContext } from "react";
// import { Component } from "react"; // *another way

class About extends React.Component{
// class About extends Component{ //*another way
constructor(props){
   super(props); 
//    console.log("Parent constructor");
}
//*Called immediately after a component is mounted. 
//*Setting state here will trigger re-rendering.
// componentDidMount(){console.log("Parent component did mount");}
    render(){
        // console.log("Parent Render");
        return (<div>
            <h1>About Class</h1>
            <h2>This is about page</h2>
            {/* how we use Context in class based component */}
            <div>
            <UserContext.Consumer>
                {({loggedInUser}) => <h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
            </div>
            {/* <User name={"Gagan"}/> */}
            <UserClass name={"First (class)"} location={"Delhi (class)"}/>
            {/* <UserClass name={"Second (class)"} location={"Pune (class)"}/> */}

        </div>)
    }
}
//*functional component
// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is about page</h2>
//             {/* <User name={"Gagan"}/> */}

//             <UserClass name={"Gagan (class)"} location={"Delhi (class)"}/>
//         </div>
//     )
// }
export default About;