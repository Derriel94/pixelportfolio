import React,{ useState, useEffect } from 'react'
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

    const [windowWidth, setWindowWidth] = useState(screen.width)
    useEffect(() => {
      setWindowWidth(screen.width)

    console.log(windowWidth)
    console.log(screen.width)
    if (localStorage.getItem("seenpop")) {


    } else {
        alert("optimized for desktop or laptop. Mobile: not reccomended")
        localStorage.setItem("seenpop", true)

    }
  }, [windowWidth])

    setTimeout(()=> {
        localStorage.removeItem("seenpop", true)

    }, 150000)
    // 1000 = 1secon

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
        <div className="game-section">
            <div><img  src="./../public/flamewizardfinal.gif" /></div>
                <div className="game-window">

                </div>
            <div className={ windowWidth < 500? "hidden": "show"}><img  src="./../public/flamewizardfinal.gif" /></div>
        </div>
    </div>
  )
}

export default App
