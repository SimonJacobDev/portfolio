import React, { useState, useRef } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'DeepFake Circumvention Using Machine Learning',
      des: 'Developed a web application that detects deepfake audio and video using machine learning techniques. The system alerts users when deepfakes are detected, helping to mitigate misinformation and improve digital security.',
      mission: 'Full-Stack Developer, Machine Learning Engineer',
      language: 'Python, JavaScript, TensorFlow, React JS',
      images: '/deepfake-project.png'
    },
    {
      name: 'Telepresence Bot',
      des: 'Created an interface for a telepresence bot system, enabling control from all devices. The bot is designed for autonomous robotics, providing interactive and remote operation capabilities.',
      mission: 'Frontend Developer, System Integrator',
      language: 'HTML5, CSS3, JavaScript, Node.js',
      images: '/telepresence-bot.png'
    },
    {
      name: 'Road Damage Detection',
      des: 'Developed a web app for capturing images of roads and connected it to a machine learning model for real-time detection of road damage. This system aims to improve road maintenance by providing automated damage reports.',
      mission: 'Full-Stack Developer, Machine Learning Engineer',
      language: 'Python, JavaScript, React JS, TensorFlow',
      images: '/road-damage-detection.png'
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Below are some of the projects I've worked on, showcasing my skills in web development, machine learning, and system integration.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <img src={value.images} alt={value.name} />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
