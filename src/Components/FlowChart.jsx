import React from 'react';
import Flowchart from '../images/flowchart.png';

const FlowChart = () => {
  return (
    <>
      <h2 style={{ marginTop: '3rem', textAlign: 'center', fontWeight: 500, fontSize: '3rem' }}>
        Flowchart
      </h2>
      <div className='flowChartImage' style={{ display: 'flex', justifyContent: 'center' }}>
        <img 
          src={Flowchart} 
          alt="Flowchart" 
          style={{ width: '85%', height: 'auto', maxWidth: '600px' }} // Ensure it doesn't exceed a certain width
        />
      </div>
    </>
  );
}

export default FlowChart;
