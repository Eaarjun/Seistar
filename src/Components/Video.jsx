import React from 'react'
import IntroVideo from '../video/Intro.mp4'
const Video = () => {
  return (
    <>
    <video src ={IntroVideo} autoPlay loop muted width={'100%'} height={'auto'}></video>
    </>
  )
}

export default Video