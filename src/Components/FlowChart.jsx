import React from 'react';
import Flowchart from '../images/flowchart.png';

const FlowChart = () => {
  const imgStyle = {
    width: '100%', // Make image responsive
    height: 'auto', // Maintain aspect ratio
    maxWidth: '1400px', // Limit max width for larger screens
    margin: '0 auto', // Center image
    display: 'block', // Center block element
  };

  return (
    <>
      <h2 style={{ marginTop: '3rem', textAlign: 'center', fontWeight: 500, fontSize: '3rem' }}>
        Flowchart
      </h2>
      <div className='flowChartImage'>
        <img
          src={Flowchart}
          alt="Flowchart"
          style={{ 
            ...imgStyle, 
            width: '100%', // Override width for complete scaling
            height: '100%', // Override height for complete scaling
            objectFit: 'contain' // Ensure the aspect ratio is maintained
          }} 
        />
      </div>
    </>
  );
};

export default FlowChart;
