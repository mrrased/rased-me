import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./Particle-Config";


export default function ParticlesBackground(){
    return(
        <Particles params={ParticleConfig}></Particles>
    );
}



// {/* <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//               background: {
//               //   color: {
//               //     value: "#0d47a1",
//               //   },
//               },
//               fpsLimit: 220,
//               interactivity: {
//                   detect_on: "canvas",
//                 events: {
//                   onClick: {
//                     enable: true,
//                     mode: "repulse",
//                   },
//                   onHover: {
//                     enable: true,
//                     mode: "bubble",
//                   },
//                   resize: true,
//                 },
//                 modes: {
//                   grab: {
//                       distance: 400,
//                       line_linked: {
//                         opacity: 1
//                       }
//                   },
//                   bubble: {
//                       distance: 250,
//                       size: 0,
//                       duration: 2,
//                       opacity: 0,
//                       speed: 3
//                   },
                  
//                   repulse: {
//                     distance: 200,
//                     duration: 0.4,
//                   },
//                   push: {
//                       particles_nb: 4
//                   },
//                   remove: {
//                       particles_nb: 2
//                   }
//                 },
//               },
//               particles: {
//                 color: {
//                   value: "#ffffff",
//                 },
//                 line_linked: {
//                   enable: false,
//                   distance: 150,
//                   color: "#ffffff",
//                   opacity: 0.4,
//                   width: 1
//                 },
//                 collisions: {
//                   enable: true,
//                 },
//                 move: {
//                   enable: true,
//                   speed: 0.5,
//                   direction: "none",
//                   random: true,
//                   straight: false,
//                   out_mode: "bounce",
//                   bounce: false,
//                   attract: {
//                       enable: false,
//                       rotateX: 600,
//                       rotateY: 600
//                   }
//                 },
//                 number: {
//                   density: {
//                     enable: true,
//                   //   area: 800,
//                       value_area: 552.4033491425909,
//                   },
//                   value: 139,
//                 },
//                 opacity: {
//                   value: 1,
//                   random: true,
//                   anim: {
//                       enable: true,
//                       speed: 1,
//                       opacity_min: 0,
//                       sync: false
//                   }
//                 },
//                 shape: {
//                   type: "circle",
//                   stroke: {
//                       width: 0,
//                       color: "#000000"
//                   },
//                   polygon: {
//                       nb_sides: 9
//                   },
//                 },
//                 size: {
//                   value: 2,
//                   random: true,
//                   anim: {
//                       enable: true,
//                       speed: 6,
//                       size_min: 0.3,
//                       sync: false
//                   }
//                 },
//               },
//               detectRetina: true,
//               }}
//           /> */}