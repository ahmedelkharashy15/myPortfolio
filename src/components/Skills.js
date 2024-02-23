import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 576 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1
        }
      };
    
    return(
        <div className="skills mt-5 " id='skills'>
            <div className="skills-box">
                <div className="sec-title mb-5">
                    <h2>Skills</h2>
                    <p>You Can See My Skills Here</p>
                </div>

                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                    <div>
                            <div className="outer">
                                <div className="inner">
                                    <div className="num">95%</div>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#2e2511" />
                                        <stop offset="100%" stop-color="#e7bd59" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="100" cy="100" r="85" stroke-linecap="round" />
                                </svg>
                            </div>
                            <p className="skill-name fs-5 mt-4">FrontEnd Development</p>
                    </div>
                    <div>
                            <div className="outer">
                                <div className="inner">
                                    <div className="num">90%</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#2e2511" />
                                        <stop offset="100%" stop-color="#e7bd59" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="100" cy="100" r="85" stroke-linecap="round" />
                                </svg>
                            </div>
                            <p className="skill-name fs-5 mt-4">BackEnd Development</p>
                    </div>
                    <div>
                            <div className="outer">
                                <div className="inner">
                                    <div className="num">80%</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#2e2511" />
                                        <stop offset="100%" stop-color="#e7bd59" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="100" cy="100" r="85" stroke-linecap="round" />
                                </svg>
                            </div>
                            <p className="skill-name fs-5 mt-4">Data Science</p>
                    </div>
                    <div>
                            <div className="outer">
                                <div className="inner">
                                    <div className="num">75%</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="200px">
                                    <defs>
                                        <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#2e2511" />
                                        <stop offset="100%" stop-color="#e7bd59" />
                                        </linearGradient>
                                    </defs>
                                    <circle cx="100" cy="100" r="85" stroke-linecap="round" />
                                </svg>
                            </div>
                            <p className="skill-name fs-5 mt-4">Cyber Security</p>
                    </div>
                </Carousel>;
            </div>
        </div>
    )
}

export default Skills;