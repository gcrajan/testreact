import React,{useState} from 'react';
const Interest = () => {
    const [Principle, setPrinciple] = useState(100);
    const [Time, setTime] = useState(1);
    const [Rate, setRate] = useState(2);
    // const Principle = 100;
    // const Time = 1;
    // const Rate = 2;
    const [Interest, setInterest] = useState(0);
    
    return ( 
        <div>
            <div>Principle:{Principle} ,Time:{Time} ,Rate:{Rate}</div>
            <div>Interest={Interest}</div>
            <button onClick={()=>{setInterest(Principle*Time*Rate/100)}}>Click</button>
        </div>
     );
}
 
export default Interest;

