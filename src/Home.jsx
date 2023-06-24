// import App from "./App";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const[roomID,setroomid]=useState("")

   
    const navigation = useNavigate()
    const handlejoin=()=>{
    //    setroom id se roomid cahnge hua
            if(roomID==="")
            {
                return alert('Enter your name')
            }
            else{
        navigation(`/room/${roomID}`)
            }
    }
    const handlekey = (event) => {
        if (event.key === 'Enter') {
          if (roomID === '') {
            return alert('Enter your name');
          } else {
            navigation(`/room/${roomID}`);
          }
        }
      };
    

    
  return (
   <>
   
    <div className='homing' style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh',background:'lightpink'}}>
    <div className="title">
  CAM CONNECT
</div>
        <input className='field' style={{outline:'none'}} placeholder="Enter the chat" type='text' value={roomID} onChange={(e)=>setroomid(e.target.value)} onKeyDown={handlekey} required></input>
        <button className='buttonn' onClick={handlejoin} >JOIN</button>
    </div>
   </>
  )
}

export default Home