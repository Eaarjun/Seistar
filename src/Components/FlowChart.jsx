import React from 'react';
import Flowchart from '../images/flowchart.png';

const FlowChart = () => {
  const imgStyle = {
    width: '100%',
    height: 'auto',
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'block',
    objectFit: 'contain'
  };

  return (
    <>
      <h2 style={{
        marginTop: '3rem',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 'clamp(2rem, 5vw, 3rem)'
      }}>
        Flowchart
      </h2>
      <div className='flowChartImage' style={{
            width: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
      }}>
        <img
          src={Flowchart}
          alt="Flowchart"
          style={{
            ...imgStyle,
            minWidth: '600px',
            width: '80%',
            maxWidth: 'none'
          }}
        />
      </div>
    </>
  );
};

export default FlowChart;
