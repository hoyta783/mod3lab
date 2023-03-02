import './App.css';
import { useState } from 'react';


const Greeting = () => {
  const [n, setn] = useState("");
  const [u, setu] = useState("");
  const [uname, setUname] = useState("");
  const [dis, setDis] = useState({display: "none"});
  const [font, setFont] = useState({fontFamily: "sans-serif"});
  const [color, setColor] = useState("");

  const handleClick = () => {
    setUname(n);
    if(n.length > 0){
      setDis({display: "block"});
    }
    else{
      setDis({display: "none"});
    }
    if(n == "JSmith23"){
      setColor({background: "green"});
    }
    else{
      setUname (<h2> User not found</h2>);
      setColor({background: "red"});      
    }
    
   
    
  }

  console.log(n);

  return (
    <div>
      <input type='text' name='username' value ={n} onInput = {(event) => setn(event.target.value)}/>
      <button onClick = {handleClick}>Submit</button>
      <h2 style={{...dis, ...font, ...color}}>Welcome {uname}</h2> 
    </div>
  )


}

function App() {
  return (
    <div className="App">
      <h1>Enter your username!</h1>
      <Greeting />
    </div>
  );

  
}

export default App;