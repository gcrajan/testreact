import React,{useState} from 'react';



const App = () => {
    const[number1, setNumber1]= useState(1)
    const[number2, setNumber2]= useState(1)
    const[result, setResult]= useState("Scroll the button")

    const diceScroll= ()=>{
        const rand1= Math.floor(Math.random()*6)+1;
        const rand2= Math.floor(Math.random()*6)+1;
        setNumber1(rand1)
        setNumber2(rand2)
        // console.log(rand1);
        // console.log(rand2);

        if(rand1>rand2){
            return setResult('Player1= win🎉')
        }
        else if(rand1<rand2){
            return setResult('Player2= win🎉😁 ')
        }
        else{
            return setResult("Draw🤷‍♂️")
        }
    }
    

    return ( 
        <div>
  {/* <Forms/>
  <Counter/>
  <Picture/> */}

  <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection: "column"}}>
  <div className="dice_image" >
    <div className="img1" style={{margin:"10px"}}>
  <img src={`./img/dice${number1}.png`} />
  </div>
  <div className="img2" style={{margin:"10px"}}>
  <img src={`./img/dice${number2}.png`} />
  </div>

  <div className="result">
    <p>{result}</p>
  </div>
  </div>
  <div className="button" style={{textAlign: "center"}}>
  <button onClick={diceScroll}>Start</button>
  </div>
  </div>


    </div>
    );
}
 
export default App;