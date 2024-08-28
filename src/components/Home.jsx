import React,{ useState } from 'react'
import { motion, useTransform, useMotionValue, useMotionValueEvent } from "framer-motion";
import tora from './../assets/32x32/tora32x32.png'
import deadpool from './../assets/32x32/deadpool32x32.png'
import ushio from './../assets/32x32/ushio32x32.png'



const Home = () => {
	const randompic = 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/18ad0649-f2dd-410d-8842-2ba2aa486fdb/915b499c07b086b46c4d52e937a9a44c29568f13.jpg?submitted=1684654124201&host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320'
	
	let array = [];

	let string = "PIXEL-ART-AND-GAMES!"
	array = [...string]
	


	const colorList = ["red", "purple", "yellow", "green", "orange"];

  	let inorderNumber = 0;


  
	const projectList = [
    { index:0, title: 'BANANAMAN', imgSrc:randompic },
    { index:1, title: 'BANANAMAN 2', imgSrc:randompic},
    { index:2, title: 'TECHNO CIRCUS', imgSrc:randompic},
    { index:3, title: 'OTHER ART', imgSrc:'./assets/react.svg'},
    { index:4, title: 'TORIKO', imgSrc:'./assets/react.svg'},
    { index:5, title: 'FLAME WIZARD', imgSrc:'./assets/react.svg'},
    { index:6, title: 'SWAMP THING', imgSrc:'./assets/react.svg'},
];
	

	
	let displayArray = [{},{},{}];

	const [currentItems, setCurrentItems] = useState(displayArray)

	const handleNext = (e) => {
		let currentIndex = 0;

		
		if (currentIndex == 0) {
			console.log('here')
			setCurrentItems([{project1: projectList[1]},{project2: projectList[2]},{project3: projectList[0]}])
		} else {
			
				
		}
		// setCurrentItems()
		
	}

	const x = useMotionValue(0);

	useMotionValueEvent(x, "change", (yo) => console.log(yo))
	const move = useTransform(x, [-window.innerWidth, 0,360], ["-360","0","20" ])








	return (
	<div className="home">
				<motion.div 
					drag="x"
				   	dragConstraints={{
				      left: -window.innerWidth,
				      right: 200,
				    }}
				    style={{x,
							move}}
        		className="carousel">
        				<h1>ACCESS THE VAULT</h1>
        			{
        				projectList.map(project=>{
        			return(
        			
        			<motion.div 
        			className="carousel-main-img">
	          			<h3>{project.title}</h3>
	          			<img src={project.imgSrc}/>
	          		</motion.div>);
        				})
        			}
	          	</motion.div>
        	<div className="top-container">

        		<div className="hometitle">
        		{array.map(letter=>{  
			        //can choose in order or random
			        let randomNumber = Math.floor(Math.random() * 4);
			        if (inorderNumber > 4) {
			            inorderNumber = 0;
			          }
			        return (<h1 id={colorList[inorderNumber++]}>{letter} </h1>)
			    })}
        		</div>
        		<div className="personal-image">
        		    <img src={tora} height="50px"/>
        			<img src={deadpool} height="50px"/>
          			<img src={ushio} height="50px"/>

          		</div>
          		<p>My goal is to provide an oppurtunity for everyone
          		to have the game of there dreams, or at least be able to 
          		have there favorite tv show or movie turned into a game!</p>
        	</div>
      



        
      
        
         
        	
           	
        	
     		
	</div>
	)
}

export default Home