import React,{useState} from 'react';
import "./style.css"

const  Forms = () => {
    const [Principle, setPrinciple] = useState(0);
    const [Time, setTime] = useState(0);
    const [Rate, setRate] = useState(0);
    const [Interest, setInterest] = useState(0);
    return ( 
        <div>
            <form>
                <label htmlFor="principle">Principle:</label><br/>
                <input type="text" onChange={(e)=> setPrinciple(e.target.value)}/><br/>
                <label htmlFor="time">Time:</label><br/>
                <input type="text"  onChange={(e)=> setTime(e.target.value)}/><br/><br/>
                <label htmlFor="rate">Rate:</label><br/>
                <input type="text"  onChange={(e)=> setRate(e.target.value)}/><br/><br/>
                <input type="button" value='Calculate'onClick={()=> setInterest(Principle*Time*Rate/100)} />
                
                <div>SI: {Interest}</div>
            </form> 
        </div>
     );
}
 
export default Forms;