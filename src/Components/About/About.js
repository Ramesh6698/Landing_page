import React from 'react';
import './About.css';
import img from '../../images/house.png'

const About = () => {
    const aboutProjects = [
        {
            name: 'PREVIOUS PROJECTS',
            value: '34+'
        }, 
        {
            name: 'YEARS EXPERIENCE',
            value: '20y'
        },
        {
            name: 'ONGOING PROJECTS',
            value: '12'
        }
    ]
  return (
   <div className="about">
       <div className="about_section">
           <div className="about_img"> <img src={img} alt="Girl in a jacket" width="445px" height="500px" top="100px"/></div>
        <div className="about_content">
            <div className="about_para1">
                Award Winning real estate company in Dubai
            </div>
            <div className="about_para2">
                Semper arcu mauris aliquam lacus. Massa erat vitae ultrices phareta scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.
            </div>
            <div className="about_projects">
            {aboutProjects.map((item)=>(
                <div className="items">
                <div className="item_name">{item.name}</div>
                <div className="item_value">{item.value}</div>
                </div>
            ))}
            </div>
        </div>
       </div>
   </div>
  );
};

export default About;
