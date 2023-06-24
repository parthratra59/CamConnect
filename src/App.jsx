// import logo from './logo.svg';
import React from "react";
import { Link, Routes,Route } from "react-router-dom";
import Home from './Home'
import Room from "./Room";
import './App.css'
function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        {/* kuki piche aisa tha  navigation(`/room/${roomid}` */}

        {/* useparams yh hota ki /room/:roomid hai agr meri website ke view section mai bhaut sare chije bni 
        aur mai chata unme se ek chij pr jau toh like view ke elephant ki photo mai 
        toh isliye use hota and hmne isme Room.jsx mai use params (react-router-dom se ata hai) paas kiya hai 
          */}
        <Route path="/room/:roomID" element={<Room/>}/>
    </Routes>
    </>
  );
}


// format aisa hota

// browserouter  yh mai index.js mai krke agya 
  // Routes yh mai app.jsx  mai kr rha 
    // route


    // in index file mai
      // browserrouter
      // app

      // ab app mai akr app ko khula 
      // Routes 
      // Route 

export default App;
