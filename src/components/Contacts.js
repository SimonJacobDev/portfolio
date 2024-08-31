import React, { useState, useRef } from 'react'; 
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+91 6383648953'
    },{
      title: 'Email',
      value: 'asimonjacob@gmail.com'
    },{
      title: 'LinkedIn',
      value: 'linkedin.com/in/asimonjacob'
    }
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Get in Touch
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        I'd love to hear from you! Whether it's a project, job opportunity, or just a chat, feel free to reach out.
      </div>
      <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className='item' key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
