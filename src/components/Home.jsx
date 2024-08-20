import React,{ useState } from 'react'
import { motion } from "framer-motion";


const Home = () => {
	const randompic = 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/18ad0649-f2dd-410d-8842-2ba2aa486fdb/915b499c07b086b46c4d52e937a9a44c29568f13.jpg?submitted=1684654124201&host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320'
	const slider = {
		hidden: {

		},
		visible: {

		}
	}
	let array = [];

	let string = "PIXEL ART AND GAMES!"
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

			//I have to loop through currentItems to access this or go curentItems[0,1,2].title or imgSrc												
	const [currentItems, setCurrentItems] = useState(displayArray)
	
	// const handle3partobjectmovement = (array) => {
	
	// 	let nextIndex = currentIndex + 1;
	// 	let prevIndex = currentIndex != 0 ? currentIndex - 1 : array.length - 1;
	
	// }

	// click next
	// loop through projectList
	// grab the next three currentItems
	// display them

	const handleNext = (e) => {
		let currentIndex = 0;
		// 	setCurrentItem(projectList[currentIndex + 1])
		 // setNextItem(currentIndex + 2)
		 // setPrevItem(projectList[currentIndex -1])
		
		if (currentIndex == 0) {
			console.log('here')
			setCurrentItems([{project1: projectList[1]},{project2: projectList[2]},{project3: projectList[0]}])
		} else {
			
				
		}
		// setCurrentItems()
		
	}

	// const handlePrev = (e) => {
	// 	if (currentIndex == 0) {
	// 		setPrevItem(projectList[projectList.length - 1])
	// 		setCurrentItem(projectList[currentIndex + 1]);
	// 		setNextItem(projectList[currentIndex + 2]);
	// 	}
	// }



	return (
	<div className="home">

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
          			<img src="https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/18ad0649-f2dd-410d-8842-2ba2aa486fdb/915b499c07b086b46c4d52e937a9a44c29568f13.jpg?submitted=1684654124201&host=wbd-images.prod-vod.h264.io&partner=beamcom&w=320"/>
          		</div>
          		<p>My goal is to provide a oppurtunity for everyone
          		to have the game of there dreams, or at least be able to 
          		have there favorite tv show or movie turned into a game!</p>
        	</div>
      
        		<div className="carousel-container">
        		<motion.div className="carousel">
        			{
        				projectList.map(project=>{
        			return(
        			
        			<div className="carousel-main-img">
	          			<h3>{project.title}</h3>
	          			<img src={project.imgSrc}/>
	          		</div>);
        				})
        			}
	        	{/*	<div onClick={(e)=>handleNext(e)} className="carousel-top-img">
	        			<h3>{projectList[1].title}</h3>
	          			<img src={projectList.imgSrc}/>
	          		</div>
	          		<div className="carousel-main-img">
	          			<h3>{projectList[0].title}</h3>
	          			<img src={projectList.imgSrc}/>
	          		</div>
	          		<div onClick={(e)=>handlePrev(e)} className="carousel-bottom-img">
	          			<h3>{projectList[6].title}</h3>
	          			<img src={projectList.imgSrc}/>
	          		</div>*/}
	          	</motion.div>
	          	</div>
        
      
        
         
        	
           	
        	
     		
	</div>
	)
}

export default Home