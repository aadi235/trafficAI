import React from 'react';
import functionImage from '../assets/app-function.png';

const About = () => {
  return (
    <div id='about'>
        
        <h3>About Traffic.ai</h3>
        <div className='about-content'>
          <p>Traffic.ai is a web app which can detect the number of vehciles in an image. The app uses a trained Yolov4 model for detecting vehicles. Upload an image below to see the results for yourself.</p>
          <img src={ functionImage } alt='error'
          style={{maxHeight: '150px', padding: '5px'}}
          />
        </div>
    </div>
  )
}

export default About