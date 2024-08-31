import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faJava, faPython, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faC } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'Proficient in creating well-structured, semantic HTML5 documents that ensure accessibility and SEO-friendliness. Skilled in using modern HTML5 features to build responsive and interactive web applications.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'Experienced in crafting visually appealing and responsive designs using CSS3. Expertise in CSS Grid, Flexbox, and animations to create dynamic layouts that adapt seamlessly across devices.',
      icon: faCss3
    },
    {
      name: 'JavaScript',
      des: 'Strong command of JavaScript ES6+ features for building interactive and dynamic web applications. Proficient in asynchronous programming, DOM manipulation, and modern JavaScript frameworks.',
      icon: faJs
    },
    {
      name: 'ReactJS',
      des: 'Advanced knowledge of ReactJS for building single-page applications with reusable components and state management. Experienced in using React Hooks, Context API, and integrating with RESTful APIs.',
      icon: faReact
    },
    {
      name: 'Node.js',
      des: 'Skilled in developing scalable backend applications using Node.js. Proficient in building RESTful APIs, handling asynchronous operations, and integrating with databases like MongoDB.',
      icon: faNodeJs
    },
    {
      name: 'ExpressJS',
      des: 'Experienced in using Express.js for developing RESTful APIs and server-side applications. Familiar with middleware, routing, and creating robust backend systems.',
      icon: faNodeJs
    },
    {
      name: 'MongoDB',
      des: 'Experienced in designing and managing NoSQL databases using MongoDB. Capable of optimizing queries and utilizing MongoDB Atlas for cloud-based database management.',
      icon: faDatabase
    },
    {
      name: 'Java',
      des: 'Proficient in Java programming for building object-oriented applications. Familiar with Java SE libraries, data structures, and algorithms, and experienced in developing Java-based backend services.',
      icon: faJava
    },
    {
      name: 'Python',
      des: 'Strong expertise in Python programming for scripting, automation, and data analysis. Experienced in using Python libraries like NumPy, Pandas, and TensorFlow for machine learning and data processing.',
      icon: faPython
    },
    {
      name: 'C',
      des: 'Solid foundation in C programming, with experience in system-level programming and memory management. Knowledgeable in using C for developing efficient and optimized algorithms.',
      icon: faC
    }
  ]);

  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        Below are some of the technical skills I have honed over my experience as a full-stack developer and software engineer.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;
