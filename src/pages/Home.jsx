import React from 'react'
import Navbar from '../Components/Navbar'
import FlowChart from '../Components/FlowChart'
import ProfileGrid from '../Components/ProfileGrid'
import Video from '../Components/Video'


const Home = () => {
    const containerStyle = {
        width: '80%',              // Set the desired width
        margin: '0 auto',          // Center the container horizontally
        height: 'auto',           // Full viewport height
        marginTop: '2%'  
    };
  return (
    <>
      <Navbar />  
      <div className='container' style={containerStyle}>
        <h1 style={{fontWeight: 300,fontSize: '3rem'}}>Seismic Exploration and Investigation of Stellar Tectonic Activity Research</h1>
    <Video />
    <FlowChart />
    <ProfileGrid />
    </div>
    </>
  )
}

export default Home