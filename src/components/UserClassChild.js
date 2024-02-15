// class-based component
import React from "react";
class UserClassChild extends React.Component{
    constructor(props){  //*syntax for passing props in a class-based components
        super(props);
        // console.log(props);
        this.state = { //*legacy method to CREATE state variable
            count: 0,
            count2: 1, // *we can declare all the state variable inside 'this.state' object 
        }
        console.log(this.props.name+' Child constructor called'); 
    }
    //*Called immediately after a component is mounted.
    componentDidMount(){
        console.log(this.props.name+" Child component did mount");
        //* API Call is made here for class-based component
    }
    render(){
        const {name, location} = this.props;
        console.log(this.props.name+' Child render called'); 
        // console.log(this);
        const {count,count2} = this.state; //*legacy method to use state variabele
        return (
            <div className="user-card">
                <h1>count: {count}</h1>
                <h1>count2: {count2}</h1>
                <button onClick={() => {
                    //*NEVER UPDATE STATE VARIABLE DIRECTLY
                    //*how we update state variable in class-based components
                    //* we can even update multiple state variables
                     this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                     });    }}>Count increase</button>
                <h2>Name: {name}</h2>
                <h3>{location}</h3>
            </div>
        )}} 
export default UserClassChild;