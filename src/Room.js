import React,{useState} from 'react'
import './room.css'
export default function Room() {
    let [isLit ,setLit] = useState(false);
    let [temp,setTemp] = useState(22)

    return (
        <div className={`room  ${isLit? "lit":"dark"}`}>
            <h1>Room Condition</h1>
            <h2> The Room Light Is : {isLit? "On (lit) ": "OFF (dark)"}</h2>
            <br/>
            <h2>Room Temperature: <button onClick={()=>{
                setTemp(++temp)
            }}>+</button> {temp} <sup>o</sup>C  <button onClick={()=>{
                setTemp(--temp)
            }}>-</button> </h2>
            
            <br/>
            <div className="button-cont">
            <button onClick={()=>setLit(true)}>ON</button>
             <button onClick={()=>setLit(false)}>OFF</button>
            <br/>
            </div>
            
        </div>
    )
}
