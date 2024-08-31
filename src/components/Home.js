import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>Simon Jacob A</span>
            </div>
            <div className="des">
                {/* 30 */}
                A full-stack web developer and UI/UX designer, currently in the pre-final year of Computer Science and Engineering. Focused on crafting sleek, functional digital experiences that merge technical precision with creative design.
</div>
            
            {/* <a href="/democv.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a> */}
        </div>
        {/* <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>VietNamese</div>
                    <div>03/12</div>
                    <div>Male</div>
                </div>
            </div>
        </div> */}
    </section>
    )
}

export default Home
