import React from 'react';
import './About.css';
import 'aos/dist/aos.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AOS from 'aos';
import { useEffect } from 'react';
import img from '../../../images/49175748_1981162115511152_3338332277926002688_n.jpg'



const About = () => {

    useEffect(()=>{
        AOS.init({duration: 1000})
    },[])

    return (
        <div className='bg-[#0a1012] py-24 px-5' id="about" >
            <div className='about-bg'>
                <h2 className='text-[#151B2980] text-[5.625rem] uppercase mt-0 text-center font-fontFamily'>About Me</h2>   
            </div>
            <div>
                <h4 className='text-[#fec544] text-2xl uppercase font-base text-center -mt-[180px] font-fontFamily tracking-widest about-h4'>About Me</h4>
            </div>
            <div className='mt-[13rem]'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        
                            <Grid item xs={12} sm={12} md={5}data-aos="fade-down" >
                                <div className='p-4 bg-gray-600 rounded-md'>
                                    <img className='w-full h-full rounded-md' src={img} alt="" />
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={12} md={7} data-aos="fade-down" >
                                <h2 className='text-[#fdfeff] text-4xl font-normal mb-4 mt-0 font-fontFamily'>Hi! I'am Rashedur Rahman</h2>
                                <h4 className='text-[#fec544] text-2xl font-normal mb-4 mt-0 font-fontFamily'>Junior Frontend Developer (MERN) </h4>
                                <p className='text-[#a9adb8] text-base font-normal mb-4 mt-0 font-fontFamily px-0.5'>I'm passionate to work with new technologies. I wanna build my career with web development. And i am optimistic about my bright developing career. I do many projects  with reactJs, NodeJs with Firebase. Some of my projects are shown here.</p>
                                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                    <Grid item xs={2} sm={2} md={2}>
                                        <div className='text-[#a9adb8] text-base font-normal mb-4 mt-0 font-fontFamily px-0.5'>
                                            <p>Birthday</p>
                                            <p>Phone</p>
                                            <p>Email</p>
                                            <p>From</p>
                                            <p>Language</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={10} sm={10} md={10}>
                                        <div className='text-[#a9adb8] text-base font-normal mb-12 mt-0 font-fontFamily px-0.5 ml-6'>
                                            <p>: Oct 27, 1996</p>
                                            <p>: +880-1732-920-164</p>
                                            <p>: rashedtechdr.786@gmai.com</p>
                                            <p>: Mohanogor Residential Area, Wapda Road, Rampura</p>
                                            <p>: Bangla, English, Hindi</p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div className='flex justify-center lg:justify-start'>
                                    <a className='no-underline text-[#FEC544] capitalize py-3 px-6 border border-[#FEC544] font-medium rounded-full hover:bg-[#FEC544] hover:text-[#070D18] text-base transition duration-700' href="https://docs.google.com/document/d/19hgLgPYYYKBmQSbtWG9V4-Hfgtv51zdbut_4SO0o2A8/edit?usp=sharing" target="_blank" rel="noreferrer">Download CV</a>
                                </div>
                            </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default About;