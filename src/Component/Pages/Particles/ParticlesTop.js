import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './Particles.css';
// import ParticlesBackground from '../../../Config/ParticlesBackground';
// import Particles  from "react-tsparticles";
// import { loadFull } from "tsparticles";

const ParticlesTop = () => {

    // const particlesInit = async (main) => {
    //     console.log(main);
    
    //     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    //     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //     // starting from v2 you can add only the features you need reducing the bundle size
    //     await loadFull(main);
    // };
    
    // const particlesLoaded = (container) => {
    // console.log(container);
    // };

    return (
        <div className='bg-img' id="home">
          
          <div className='position-banner'>
                <div style={{textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: '60px', 
                        fontWeight: 600 , 
                        marginTop: '0px',
                        marginBottom: '10px'
                        }}
                        id="style"
                        ><span 
                        style={{color: '#fdfeff'}}>Hi,</span> 
                        
                        <span style={{color: '#fdfeff'}}> I am</span> 
                        <span style={{color: '#FEC544'}}> Rashedur Rahman</span> 
                    </h1>
                    <p 
                        style={{
                            color: '#a4a8b4',
                            fontFamily: 'sans-serif', 
                            fontSize: '18px', 
                            fontWeight: 300,
                            marginBottom: '5px',
                            marginTop: '5px'
                            }}
                            >I am a frontend web developer (MERN). I can provide clean code and pixel perfect design.</p>
                    <p 
                        style={{
                            color: '#a4a8b4',
                            fontFamily: 'sans-serif', 
                            fontSize: '18px', 
                            fontWeight: 300,
                            marginTop: '5px'
                            }}
                        >I also make website more & more interactive with web animation.</p>
                    <div>
                        <p>
                            <span><GitHubIcon 
                                sx={{
                                    border: '1px solid #202632',
                                    borderRadius: '50%',
                                    padding: '7px', 
                                    fontSize: 40,
                                    margin: '10px',
                                    color: '#a4a8b4',
                                    ':hover':{border: '2px solid white', cursor: 'pointer'}
                                    }} 
                                    /></span> 
                            <span><LinkedInIcon 
                                sx={{
                                    border: '1px solid #202632',
                                    borderRadius: '50%',
                                    padding: '7px', 
                                    fontSize: 40,
                                    margin: '10px',
                                    color: '#a4a8b4',
                                    ':hover':{border: '2px solid white', cursor: 'pointer' }
                                    }} 
                                /></span> 
                            <span><FacebookRoundedIcon 
                                sx={{
                                    border: '1px solid #202632',
                                    borderRadius: '50%',
                                    padding: '7px', 
                                    fontSize: 40,
                                    margin: '10px',
                                    color: '#a4a8b4',
                                    ':hover':{border: '2px solid white', cursor: 'pointer'}
                                    }} 
                          /></span></p>
                    </div>
                </div>
          </div>
            {/* <div>
          <Particles
            
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
          />
          </div> */}
        </div>
        
    );
};

export default ParticlesTop;