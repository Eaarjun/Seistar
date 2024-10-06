import React from 'react'
import Flowchart from '../images/flowchart.png'
const FlowChart = () => {
  const imgStyle = {
    width: '100%', // Make image responsive
    height: 'auto', // Maintain aspect ratio
    maxWidth: '800px', // Limit max width for larger screens
    margin: '0 auto', // Center image
    display: 'block', // Center block element
};
  return (
<>
    <h2 style={{marginTop: '3rem',textAlign: 'center',fontWeight: 500,fontSize: '3rem'}}>Flowchart</h2> 
    <div className='flowChartImage' >
    <img src={Flowchart} alt="Flowchart" width='85%' height='auto' style={imgStyle} />
    </div>

</>
  )
}

export default FlowChart
