import React from 'react'
import Navbar from '../Components/Navbar';

const Introduction = () => {
    const containerStyle = {
        width: '80%',              // Set the desired width
        margin: '0 auto',          // Center the container horizontally
        height: '100vh',           // Full viewport height
        marginTop: '2%'  
    };
    const liStyle = {
        marginBottom: '1rem ',fontSize: '1.5rem'
    }
  return (
    <>
    <Navbar />
        <div style={containerStyle}>
            <div className='Intro'>
            <h1 style={{fontWeight: 300,fontSize: '4rem',marginBottom: '1rem'}}>Introduction</h1>
            </div>
            <div className='keyPoints'>
  
            <ul >
                <li style={liStyle}>Since ancient times, the Moon has fascinated civilizations around the world, serving as a constant source of wonder and curiosity. As our nearest celestial neighbor, it harbors invaluable secrets about the formation and evolution of our solar system. The quest to uncover these mysteries has driven numerous space exploration missions, each providing intriguing insights into the Moon's geological history and internal composition.</li>
                <li style={liStyle}> Seismic activity on celestial bodies presents a powerful method for understanding their interior structures and dynamic processes. Just as seismologists study earthquakes on Earth to learn about our planet’s inner workings, analyzing seismic waves on the Moon can reveal essential information about its subsurface geology and tectonic activity.</li>
                <li style={liStyle}> The seismic data gathered during various lunar missions, especially the Apollo program, represents a unique treasure trove of information. These datasets offer an extraordinary opportunity for in-depth exploration and analysis, unlocking the secrets hidden within the seismic waves that have traveled through the lunar interior.</li>
            </ul>
        </div>    
        </div>  
       
    </> 
  )
}

export default Introduction