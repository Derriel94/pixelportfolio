import React,{ useState } from 'react'
import './App.css';
import Router from './router.jsx'
function App() {

  const title = ['D','E','R','R','I','E','L','-','C','O','L','L','I','N','S','-','P','O','R','T','O','L','I','O'];
  const colorList = ["red", "purple", "yellow", "green", "orange"];

   let inorderNumber = 0;

   const colorSwitch =(colorList, array)=> {
    array.map(letter=>{  
        //can choose in order or random
        let randomNumber = Math.floor(Math.random() * 4);
        if (inorderNumber > 4) {
            inorderNumber = 0;
          }
        return (<h1 id={colorList[inorderNumber++]}>{letter} </h1>)
    })
   }
  
  return (
    <div>
       <div className="header">
        <img src="./../public/dancinbanana.gif" height="80px" />

      {title.map(letter=>{  
        //can choose in order or random
        let randomNumber = Math.floor(Math.random() * 4);
        if (inorderNumber > 4) {
            inorderNumber = 0;
          }
        return (<h1 id={colorList[inorderNumber++]}>{letter} </h1>)
      }
        )}
   

      </div>
     <Router />
          <h1 style={{textAlign: "center", marginTop: "100px"}}>WELCOME TO MY WORLD!</h1>  
            <img style={{marginLeft: "auto"}} src="./../public/flamewizardfinal.gif" />

    </div>
  )
}

export default App
