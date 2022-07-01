import React,{useState} from 'react';
import "./App.css"
const Counter = () => {
    const [count, setCount] = useState(1);
    const increase= ()=> {
        setCount(count+1)
    }
    const decrease= ()=> {
        setCount(count-1)
    }
    return ( 
        <div>
            <div>{count}</div>
            <button onClick={increase}>increse</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={()=> setCount(1)}>reset</button>
        </div>
     );
}
 
export default Counter;