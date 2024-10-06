import React from 'react'
import Navbar from '../Components/Navbar'
import Velocity from '../images/velocity.jpg'
import NoiseRemoval from '../images/noiseRemoval.jpg'
import ContinousWavelet from '../images/continousWavelet.jpg'
import Wavelet from '../images/wavelet.jpg'
import Seismic from '../images/seismicDataPlot.jpg'
const Analysis = () => {
    const containerStyle = {
        width: '80%',              // Set the desired width
        margin: '0 auto',          // Center the container horizontally
        height: 'auto',           // Full viewport height
        marginTop: '2%'  
    };

    const hmargin = {marginTop: '1rem',fontWeight: 300,marginBottom: '1rem'}
  return (
    <>
        <Navbar />
        <div style={containerStyle}>
            <h1 style={{fontWeight: 300,fontSize: '4rem'}}>Analysis</h1>
            <div className='noiseRemoval'>
                <h1 style={hmargin}>Noise Removal</h1>
                <p style={hmargin}>This Python script is designed to process and improve velocity data from a time series. It reads velocity measurements from a CSV file, applies a Kalman filter to reduce noise in the data, and then saves the cleaned data to a new CSV file. The Kalman filter is a statistical method that helps estimate the true state of a system by combining measurements over time, effectively smoothing out random fluctuations or noise. After processing, the script creates a visual comparison by plotting both the original and the filtered velocity data on the same graph. This allows for easy visualization of how the noise reduction has affected the data. The end result is a cleaner, more reliable velocity dataset that can be used for further analysis or visualization, with the added benefit of being able to see the impact of the noise reduction process.</p>
                <img src={NoiseRemoval} alt="NoiseRemoval" width={800} height={550} />

            </div>
            {/*Velocity */}
            <div className='velocity'>
                <h1 style={hmargin}>Velocity</h1>
                <p style={hmargin}>The velocity signal visualization code reads velocity data from a CSV file named `filtered_velocity.csv`, which contains time and velocity columns. It uses `pandas` to load the data and `matplotlib.pyplot` to create a plot. The code visualizes the velocity signal over time, with the plot featuring a title, labeled axes, and a grid for clarity. The primary purpose is to provide a clear representation of how velocity changes over time, helping to identify trends, patterns, or anomalies for further analysis.</p>
                <img src={Velocity} alt="Velocity" width={800} height={550} />

            </div>
              {/* Continous Wavelet Analysis */}
              <div className='continousWavelet'>
                <h1 style={hmargin}>Continous Wavelet Analysis</h1>
                <p style={hmargin}>The Continuous Wavelet Transform (CWT) code section performs a time-frequency analysis of the velocity signal previously visualized. It begins by loading the same velocity data from the CSV file and defines a range of scales for wavelet decomposition. Using the Morlet wavelet, the code computes the CWT, resulting in a matrix of wavelet coefficients that capture variations in the signal's frequency content over time. A time-frequency plot is then generated to visually represent the magnitude of these coefficients, with the x-axis indicating time and the y-axis representing scale, allowing for an intuitive understanding of the signal's behavior. Additionally, the code focuses on a specific scale to visualize the corresponding wavelet coefficients and identifies the highest peak in the coefficient magnitude, which signifies the most prominent feature in the signal at that scale. This analysis is crucial for detecting transient features or events within the velocity data, making it particularly useful in fields such as seismic analysis and signal processing.</p>
                <img src={ContinousWavelet} alt="ContinousWavelet" width={800} height={550} />
               
            </div>
            {/* Wavelet Coefficients */}
            <div className='waveletAnalysis'>
                <h1 style={hmargin}>Wavelet Analysis</h1>
                <p style={hmargin}>The wavelet coefficients represent the results of applying the Continuous Wavelet Transform (CWT) to the velocity signal, revealing how the signal's frequency content varies over time. Each coefficient corresponds to a specific scale and time, indicating the magnitude of the signal's features at that particular scale. By analyzing these coefficients, one can identify significant events or trends within the signal, such as peaks or anomalies that may not be evident in the original time series. The coefficients allow for a multi-resolution analysis, enabling the detection of both high-frequency transient events and low-frequency trends. This information is essential for interpreting the underlying processes represented by the signal, making wavelet coefficients a powerful tool in fields such as seismic detection, biomedical signal analysis, and various engineering applications.</p>
                <img src={Wavelet} alt="Wavelet" width={800} height={550} />
            </div>
          
            {/* Seismic Analysis */}
            <div className='seismicAnalysis'>
                <h1 style={hmargin}>Seismic Analysis</h1>
                <p style={hmargin}>The seismic analysis code utilizes the Continuous Wavelet Transform (CWT) to extract meaningful features from a velocity signal, stored in a CSV file named `filtered_velocity.csv`. Initially, the code loads the signal data, which consists of time and velocity values. It then defines a sampling frequency and computes the CWT using the Morlet wavelet across a specified range of scales. The analysis focuses on wavelet coefficients at a particular scale, from which it identifies the highest peak, indicating a significant event in the signal. To understand the signal’s behavior around this peak, the code calculates the mean coefficient magnitude and establishes a tolerance level to determine the points where the signal returns to the mean before and after the peak. The selected region is plotted, highlighting the wavelet coefficients, the highest peak, and the mean value, providing a visual representation of the signal's dynamics. Additionally, the code saves the relevant time, velocity, and coefficient data to a new CSV file for further analysis. The results offer insights into the timing and magnitude of significant seismic events, facilitating deeper exploration of the underlying processes represented by the velocity signal.</p>
                <img src={Seismic} alt="Seismic" width={800} height={550} />
             
            </div>

        </div>
    </>
  )
}

export default Analysis