import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
// import Photo from "../../assets/images/photo.jpg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                I am an Artificial Intelligence and Data Science engineering graduate with a strong foundation in AI research and development. My experience includes projects like an object detection and freshness detection system, a student-centric AI assistant website, and an ML-powered grocery analyzer leveraging YOLO and Tesseract. As a Professional Assistant Officer for the Rotaract Club, I co-led events like a Resume Building Workshop and Rotatank 2.0, showcasing my organizational and leadership skills. I’m passionate about applying my expertise to roles in machine learning and data management to drive innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
