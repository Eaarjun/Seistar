import React,{useState} from 'react'
import Navbar from '../Components/Navbar'

const Reference = () => {
    const [activeState,setActiveState] = useState('')

    const handleLinkClick = (link) => {
        setActiveState(link);
      };
    const references = [
        { id: 1, authors: "Sinha, Satish, Partha S. Routh, Phil D. Anno, and John P. Castagna", title: "Spectral decomposition of seismic data with continuous-wavelet transform.", journal: "Geophysics", year: 2005, volume: "70", issue: 6, pages: "P19-P25" },
        { id: 2, authors: "Ali, Amjad, Chen Sheng-Chang, and Munawar Shah", title: "Continuous wavelet transformation of seismic data for feature extraction.", journal: "SN Applied Sciences", year: 2020, volume: "2", pages: "1-12" },
        { id: 3, authors: "Gwal, A. K., Shaheen Rubeena, Panda Gopal, and Jain Kumar Santosh", title: "Study of seismic precursors by wavelet analysis.", journal: "Research Journal of Engineering Sciences", year: 2012, issn: "2278", pages: "9472" },
        { id: 4, authors: "Heydari, A., and E. Salajegheh", title: "Wavelet analysis for processing of earthquake records.", year: 2008, pages: "513-524" },
        { id: 5, authors: "Dey, Ayon Kumar", title: "An analysis of seismic wavelet estimation.", year: 1999 },
        { id: 6, authors: "Grubb, H. J., and A. T. Walden", title: "Characterizing seismic time series using the discrete wavelet transform.", journal: "Geophysical Prospecting", year: 1997, volume: "45", issue: 2, pages: "183-205" },
        { id: 7, authors: "Zhang, Jinhai et al.", title: "Lunar regolith and substructure at Chang’E-4 landing site in South Pole–Aitken basin.", journal: "Nature Astronomy", year: 2021, volume: "5", issue: 1, pages: "25-30" },
        { id: 8, authors: "Sollberger, David et al.", title: "The shallow elastic structure of the lunar crust: New insights from seismic wavefield gradient analysis.", journal: "Geophysical Research Letters", year: 2016, volume: "43", issue: 19, pages: "10-078" },
        { id: 9, authors: "Yamada, R.", title: "The description of Apollo seismic experiments.", year: 2013, url: "https://darts.isas.jaxa.jp/planet/seismology/apollo/The_Description_of_Apollo_Seismic_Experiments.pdf" },
        { id: 10, authors: "Yuan, Yuefeng et al.", title: "New Methods for Data Stacking and P-and S-wave Arrival Time Determination Using the Deep Moonquake Apollo Recordings.", journal: "Journal of Geophysical Research: Planets", year: 2021, volume: "126", issue: 2, pages: "e2020JE006424" },
        { id: 11, authors: "Nunn, Ceri et al.", title: "Lunar seismology: A data and instrumentation review.", journal: "Space Science Reviews", year: 2020, volume: "216", issue: 5, pages: "89" },
        { id: 12, authors: "Mahvelati, Siavash, and Joseph T. Coe", title: "Revisiting lunar seismic experiment data using the multichannel simulation with one receiver (MSOR) approach and random field modeling.", journal: "Earth, Moon, and Planets", year: 2020, volume: "124", issue: 3, pages: "73-90" },
        { id: 13, authors: "Nakamura, Yosio", title: "Catalog of lunar seismic data from Apollo passive seismic experiment on 8-mm video cassette (Exabyte) tapes.", year: 1992, publisher: "Institute for Geophysics" },
        { id: 14, authors: "Nakamura, Yosio et al.", title: "How we processed Apollo lunar seismic data.", journal: "Physics of the Earth and Planetary Interiors", year: 1980, volume: "21", issue: 2-3, pages: "218-224" },
        { id: 15, authors: "Haskin, Larry, and Paul Warren", title: "Lunar chemistry.", journal: "Lunar sourcebook", year: 1991, volume: "4", issue: 4, pages: "357-474" },
        { id: 16, authors: "Wieczorek, Mark A.", title: "The interior structure of the Moon: What does geophysics have to say?", journal: "Elements", year: 2009, volume: "5", issue: 1, pages: "35-40" },
        { id: 17, authors: "Knapmeyer‐Endrun, Brigitte, and Conny Hammer", title: "Identification of new events in Apollo 16 lunar seismic data by Hidden Markov Model‐based event detection and classification.", journal: "Journal of Geophysical Research: Planets", year: 2015, volume: "120", issue: 10, pages: "1620-1645" },
        { id: 18, authors: "Horvath, Peter", title: "Analysis of lunar seismic signals-determination of instrumental parameters and seismic velocity distributions.", year: 1979, university: "The University of Texas at Dallas" },
        { id: 19, authors: "Nakamura, Y.", title: "Shallow moonquakes-How they compare with earthquakes.", in: "Lunar and Planetary Science Conference", year: 1980, pages: "1847-1853" },
        { id: 20, authors: "Nunn, Ceri et al.", title: "A New Archive of Apollo’s Lunar Seismic Data.", journal: "The Planetary Science Journal", year: 2022, volume: "3", issue: 9, pages: "219" },
    ];
    const containerStyle = {
        width: '80%',              // Set the desired width
        margin: '0 auto',          // Center the container horizontally
        height: 'auto',           // Full viewport height
        marginTop: '2%'  
    };
  return (
    <>
        <Navbar />
        <div style={containerStyle}>
            <h1 style={{fontWeight: 300,fontSize: '4rem',marginBottom: '2rem'}}>References</h1>
            
            {/* New Section for Data Resource */}
            <h2 style={{marginBottom: '1rem'}}>Data Resource</h2>
            <ul style={{marginLeft: '2rem'}}>
                <li style={{marginBottom: '1rem'}}><a onClick={() => handleLinkClick('/')} style={{marginBottom: '1rem',color:'white'}} href="https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/seismic-detection-across-the-solar-system/" target="_blank" rel="noopener noreferrer">NASA Space Apps Challenge</a></li>
                <li style={{marginBottom: '1rem'}}>
                <a  onClick={() => handleLinkClick('/')} style={{marginBottom: '1rem',color: activeState === '/' ? 'white' : 'white'}} href="https://wufs.wustl.edu/SpaceApps/data/space_apps_2024_seismic_detection.zip" target="_blank" rel="noopener noreferrer">Seismic Detection Across the Solar System Dataset
</a></li>

            </ul>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, marginRight: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Tools Used</h2>
                <div className='techUsed' style={{ marginLeft: '2rem' }}>
                    <ul>
                        <li style={{ marginBottom: '1rem' }}>Python</li>
                        <li style={{ marginBottom: '1rem' }}>Google Collab</li>
                        <li style={{ marginBottom: '1rem' }}>Matlab</li>
                        <li style={{ marginBottom: '1rem' }}>VS Code</li>
                        <li style={{ marginBottom: '1rem' }}>ChatGPT</li>
                        <li style={{ marginBottom: '1rem' }}>Medium</li>
                        <li style={{ marginBottom: '1rem' }}>Github</li>
                    </ul>
                </div>
            </div>

            <div style={{ flex: 1, marginLeft: '1rem' }}>
                <h2 style={{ marginBottom: '1rem' }}>Machine Learning Libraries Used</h2>
                <div className='techUsed' style={{ marginLeft: '2rem' }}>
                    <ul>
                        <li style={{ marginBottom: '1rem' }}>Numpy</li>
                        <li style={{ marginBottom: '1rem' }}>Pandas</li>
                        <li style={{ marginBottom: '1rem' }}>Matplotlib</li>
                        <li style={{ marginBottom: '1rem' }}>Pykalman</li>
                        <li style={{ marginBottom: '1rem' }}>Sklearn</li>
                        <li style={{ marginBottom: '1rem' }}>Pywt</li>
                        <li style={{ marginBottom: '1rem' }}>Math</li>
                    </ul>
                </div>
            </div>
        </div>
            <h2 style={{marginBottom: '1rem'}}>Bibliography</h2>
            {/* New Section for References */}
            <ul >
                {references.map(ref => (
                    <li key={ref.id} style={{marginBottom: '1rem'}}>
                        {ref.id}. {ref.authors}. <i>{ref.title}</i> {ref.journal ? `, ${ref.journal}` : ''} {ref.year ? `(${ref.year})` : ''} {ref.volume ? `Vol. ${ref.volume}` : ''} {ref.issue ? `No. ${ref.issue}` : ''} {ref.pages ? `: ${ref.pages}` : ''} {ref.url ? <a href={ref.url} target="_blank" rel="noopener noreferrer">Link</a> : ''}
                    </li>
                ))}
            </ul>
        </div>
    </>
)
}

export default Reference