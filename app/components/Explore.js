import React from 'react';
import "./Ex-plore.css";
import Image from 'next/image';

const Explore = () => {

  return (
//     <div className='large-container'>

//         <div className='title'> <h1>Wild Life Counting Project</h1>
//         <h2>Wild Life Counting Project</h2>
//         </div>
//     <div className='container'>
//         <div className='imageContainer'>
//         <img src='./images/bufalo-2.jpg' alt="Left Image" className='leftImage' />
          
//       </div>
//         <div className='conatiner-2'>
     
//       <p className='paragraph'>
//         The Wild Life Counting Project aims to leverage advanced computer vision technologies to automate the survey of wildlife populations. Traditionally reliant on manual surveys conducted via helicopter, this project proposes a more efficient, accurate, and less intrusive method by embedding state-of-the-art computer vision models into high-resolution drone cameras. These drones will be operated remotely via a sophisticated mobile application interface, enabling real-time wildlife tracking and counting. This document outlines a comprehensive scope of work for the project, detailing technical requirements, milestones, and deliverables over a 12-month timeline.
//       </p>
//       <h3>Key Objectives:</h3>
      
//       <ul className='list'>
//         <li>Develop and implement advanced computer vision algorithms capable of accurately detecting and identifying wildlife species.</li>
//         <li>Integrate these algorithms into high-resolution drone cameras to enable real-time data collection.</li>
//         <li>Design and deploy a user-friendly mobile application interface for remote drone operation and data visualization.</li>
//         <li>Conduct field tests to evaluate the performance and accuracy of the system in various natural environments.</li>
//         <li>Collaborate with wildlife conservation organizations and researchers to ensure the practicality and relevance of our solution.</li>
//       </ul>
//       </div>
      
//     </div>
//     <div className='overview-section'>
//       <h1>Project Overview</h1>
//         <p>
//         Our project proposes the integration of state-of-the-art computer vision models into high-resolution drone cameras. These drones will serve as our primary tools for conducting wildlife surveys, offering a non-intrusive and comprehensive means of data collection. By utilizing advanced algorithms, we can automate the process of wildlife tracking and counting, eliminating the need for manual surveys conducted via helicopter.
//         </p>

//     </div>
//     <div className='Benefit-section'>
//     <p>
//     Efficiency: By automating the survey process, we can significantly reduce the time and resources required for wildlife monitoring.
// Accuracy: Our computer vision models offer precise identification and counting of wildlife species, minimizing errors and improving data quality.
// Non-intrusiveness: Drones provide a non-invasive means of data collection, minimizing disturbance to natural habitats and wildlife.
// Real-time Monitoring: The mobile application interface allows for real-time tracking and visualization of wildlife populations, enabling timely conservation efforts.
//     </p>

//     </div>
//     </div>
<div
              className='container'
              
            >
              <div className='image-container'>
                <h2 className='custom-text'>
                Wild Life Counting Project
                </h2>

                <div className='flex-container'>
              
                  <h3 className='custom-text-medium'>Transforming Wildlife Conservation: Innovating Population Surveys with Advanced Computer Vision</h3>
                </div>
                <p>Our project proposes the integration of state-of-the-art computer vision models into high-resolution drone cameras. These drones will serve as our primary tools for conducting wildlife surveys, offering a non-intrusive and comprehensive means of data collection. By utilizing advanced algorithms, we can automate the process of wildlife tracking and counting, eliminating the need for manual surveys conducted via helicopter.
 </p>

              </div>

              <Image
                src='/images/bufalo-2.jpg'
                alt='location'
                height={500}
                width={1044}
                className='custom-full-width-container'
              />

<div className='image-container'>
                <h2 className='custom-text'>
                Project Overview
                </h2>

                <div className='flex-container'>
              
                  <h3 className='custom-text-medium'> </h3>
                </div>
 <p> Our project proposes the integration of state-of-the-art computer vision models into high-resolution drone cameras. These drones will serve as our primary tools for conducting wildlife surveys, offering a non-intrusive and comprehensive means of data collection. By utilizing advanced algorithms, we can automate the process of wildlife tracking and counting, eliminating the need for manual surveys conducted via helicopter.</p>

              </div>
              <div className='container-images'>
              <Image
                src='/images/yolo.jpg'
                alt='location'
                height={500}
                width={500}
                className='custom-full-width-container'
              />
              <Image
                src='/images/addition2.png'
                alt='location'
                height={200}
                width={200}
                className='custom-full-width-container'
              />
               
              <Image
                src='/images/drone.jpeg'
                alt='location'
                height={500}
                width={500}
                className='custom-full-width-container'
              />
              </div>
              
            </div>
  );
};

export default Explore;




