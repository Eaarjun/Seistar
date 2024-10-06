import React from 'react'
import Flowchart from '../images/flowchart.png'
const FlowChart = () => {
  return (
<>
    <h2 style={{marginTop: '3rem',textAlign: 'center',fontWeight: 500,fontSize: '3rem'}}>Flowchart</h2> 
    <div className='flowChartImage' >
    <img src={Flowchart} alt="Flowchart" width='85%' height='auto' />
    </div>

</>
  )
}

export default FlowChart