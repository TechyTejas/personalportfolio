import React from 'react'
import './Services.css';

const Services_Data = [
    {
      s_no: '01',
      s_name: "Web Development",
      s_desc: "Web development involves creating and maintaining websites, ensuring they are functional, user-friendly, and visually appealing. It includes both frontend and backend development."
    },
    {
      s_no: '02',
      s_name: "Frontend Development",
      s_desc: "Frontend development focuses on building the user interface and user experience of websites or applications, using technologies like HTML, CSS, and JavaScript to create responsive and interactive designs."
    },
    {
      s_no: '03',
      s_name: "MERN Stack Development",
      s_desc: "MERN stack development is a full-stack JavaScript framework consisting of MongoDB, Express, React, and Node.js, allowing developers to build dynamic web applications from frontend to backend."
    }
  ];
  
const Services = () => {
  return (
    <div className='Services'>
        <div className="service-title">
            <h1>My Services</h1>
            {/* image add here */}
            <img src="" alt="" />
        </div>
        <div className="services-container">
         {Services_Data.map((service,index)=>{
           return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
                <p>Read More</p>
                {/* Add arrow icon */}
                <img src="" alt="" />
            </div>
           </div>
         })}
        </div>
    </div>
  )
}

export default Services