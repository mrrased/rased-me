import React, { useEffect, useRef }  from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './Particles.css';
import ParticlesBackground from '../../../Config/ParticlesBackground';
import Particles  from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesTop = () => {

    // const refParticles = useRef();

    // const particlesInit = async (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // await loadFull(main);
    // };
    
    // const particlesLoaded = (container) => {
    // console.log(refParticles?.current.state);
    // };
    // console.log(refParticles?.current);

    
    

    return (
        <div className='bg-img' id="home">
          
          <div className='position-banner'>
                <div className='text-center px-3 md:px-6 lg:px-10 xl:px-0'>
                    <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mt-0 mb-3' id="style">
                        <span className='text-[#fdfeff]'>Hi,</span>
                        <span className='text-[#fdfeff]'> I am</span> 
                        <span className='text-[#FEC544]'> Rashedur Rahman</span> 
                    </h1>
                    <p className='text-lg font-normal mt-1.5 mb-1.5 font-fontFamily text-[#a4a8b4]'>I am a frontend web developer (MERN). I can provide clean code and pixel perfect design.</p>
                    <p className='text-lg font-normal mt-1.5 font-fontFamily text-[#a4a8b4]'>I also make website more & more interactive with web animation.</p>
                    <div>
                       <ul className='flex items-center justify-center'>
                          <li><a href="https://github.com/mrrased/" target="_blank" rel="noreferrer"><GitHubIcon sx={{border: '1px solid #202632', borderRadius: '50%', padding: '7px', fontSize: 40, margin: '10px', color: '#a4a8b4', ':hover':{border: '2px solid white', cursor: 'pointer'}}}/></a></li>
                          <li><a href="https://www.linkedin.com/in/rashedur-rahman-rony-4b72b8217/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{border: '1px solid #202632', borderRadius: '50%', padding: '7px', fontSize: 40, margin: '10px', color: '#a4a8b4', ':hover':{border: '2px solid white', cursor: 'pointer'}}}/></a></li>
                          <li><a href="https://www.facebook.com/rased.hd/" target="_blank" rel="noreferrer"><FacebookRoundedIcon sx={{border: '1px solid #202632', borderRadius: '50%', padding: '7px', fontSize: 40, margin: '10px', color: '#a4a8b4', ':hover':{border: '2px solid white', cursor: 'pointer'}}}/></a></li>
                       </ul>
                    </div>
                </div>
          </div>
            {/* <div>
          <Particles
            ref={refParticles}
            className="canvasClassName"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
              
              //   color: {
              //     value: "#0d47a1",
              //   },
                
              },
              fpsLimit: 220,
              interactivity: {
                  element:{
                    outerHTML:{
                      position: "static !important"
                    }
                  },
                  detect_on: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "repulse",
                  },
                  onHover: {
                    enable: true,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                      distance: 400,
                      line_linked: {
                        opacity: 1
                      }
                  },
                  bubble: {
                      distance: 250,
                      size: 0,
                      duration: 2,
                      opacity: 0,
                      speed: 3
                  },
                  
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                      particles_nb: 4
                  },
                  remove: {
                      particles_nb: 2
                  }
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                collisions: {
                  enable: true,
                },
                move: {
                  enable: true,
                  speed: 0.5,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "bounce",
                  bounce: false,
                  attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 600
                  }
                },
                number: {
                  density: {
                    enable: true,
                  //   area: 800,
                      value_area: 552.4033491425909,
                  },
                  value: 139,
                },
                opacity: {
                  value: 1,
                  random: true,
                  anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0,
                      sync: false
                  }
                },
                shape: {
                  type: "circle",
                  stroke: {
                      width: 0,
                      color: "#000000"
                  },
                  polygon: {
                      nb_sides: 9
                  },
                },
                size: {
                  value: 2,
                  random: true,
                  anim: {
                      enable: true,
                      speed: 6,
                      size_min: 0.3,
                      sync: false
                  }
                },
              },
              detectRetina: true,
              }}
              style={{position: 'static !important', backgroundColor: "red !important"}}
          >
            <canvas style={{position: 'static !important', backgroundColor: "red !important"}} />
          </Particles>
          </div> */}
        </div>
        
    );
};

export default ParticlesTop;