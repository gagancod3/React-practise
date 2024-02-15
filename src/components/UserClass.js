// class-based component
import React from "react";
import UserClassChild from "./UserClassChild";
class UserClass extends React.Component{
    constructor(props){  //*syntax for passing props in a class-based components
        super(props);
        // console.log(props);
        this.state = { //*legacy method to CREATE state variable
            // count: 0,
            // count2: 1,
            userInfo: {login:"dummy data",avatar_url:"dummy img"},
             // *we can declare all the state variable inside 'this.state' object 
        }
        console.log("constructor");
    }
    //*Called immediately after a component is mounted.
    async componentDidMount(){
        console.log("mounted");
        //* API Call is made here for class-based component
        const data = await fetch("https://api.github.com/users/gagancod3");
        const json = await data.json();
        this.setState({userInfo: json});
        console.log("setState");
    }
    //*Called immediately after updating occurs. Not called for the initial render.
    componentDidUpdate(){console.log("component Did update");}
    //*Called immediately before a component is destroyed.
    /* Perform any necessary cleanup in this method, such as cancelled network requests,
       or cleaning up any DOM elements created in componentDidMount */
    componentWillUnmount(){ console.log("component will unmount");}
    render(){
        console.log("rendered");
        // const {name, location} = this.props;
        // console.log(this.props.name+' Child render called'); 
        // const {count,count2} = this.state; //*legacy method to use state variabele
        const {login, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h1>count: {count}</h1>
                <h1>count2: {count2}</h1> */}
                {/* <button onClick={() => {
                    //*NEVER UPDATE STATE VARIABLE DIRECTLY
                    //*how we update state variable in class-based components
                    //* we can even update multiple state variables
                     this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                     });    }}>Count increase</button> */}
                {/* <h2>Name: {this.props.name}</h2> */}
                {/* if we destructure the props line:11 we can write directly the property name as written below*/}
                <h2>Name: {login}</h2>
                <img src={avatar_url} className="userclass-image"/>
                {/* <UserClassChild name={"First Grand (class)"} location={"Delhi NCR (class)"} /> */}
            </div>
        )}} 
export default UserClass;