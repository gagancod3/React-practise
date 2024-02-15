import {useEffect, useState} from "react";

const User = (props) =>{
    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(1);

    useEffect(()=>{
        // *API calls
        /* once component is rendered/loaded, then we make API calls 
        and then fill the data inside the component */
    },[])
    
    return(
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>Name: {props.name}</h2>
            <h3>Delhi</h3>
            <h3>Contact: @qwerty</h3>
        </div>
    )
}
export default User;