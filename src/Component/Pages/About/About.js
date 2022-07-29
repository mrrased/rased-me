import React from 'react';
import './About.css';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const About = () => {
    return (
        <div style={{backgroundColor: '#0a1012', paddingTop: '100px', paddingBottom: '100px', display: 'block'}}>
            <div className='about-bg'>
                <h2 style={{
                    color: '#151B2980',
                    fontSize: '90px',
                    textTransform: 'uppercase',
                    marginTop: '0px',
                    textAlign: 'center',

                    }}
                >About Me</h2>
                
            </div>
            <div>
                <h4 className='about-h4' style={{
                    fontSize: '24px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    color: '#fec544',
                    letterSpacing: '1px',
                    marginTop: '-180px',
                    textAlign: 'center'
                }}>About Me</h4>
            </div>
            <div style={{marginTop: '90px'}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        
                            <Grid item xs={12} sm={12} md={6}>
                                <Item>xs=2</Item>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6}>
                                <h2 style={{
                                    color: '#fdfeff',
                                    fontSize: '36px',
                                    fontWeight: 400,
                                    marginBottom: '18px',
                                    marginTop: '0px'

                                }}>Hi! I'am Rashedur Rahman</h2>
                                <h4 style={{
                                    color: "#fec544",
                                    fontSize: '24px',
                                    fontWeight: 300,
                                    marginBottom: '18px',
                                    marginTop: '0px'

                                }}>Junior Frontend Developer (MERN) </h4>
                                <p style={{
                                    color: '#a9adb8',
                                    paddingLeft: '2px',
                                    paddingRight: '2px',
                                    fontSize: '15px',
                                    fontWeight: 400,
                                    marginBottom: '18px',
                                    letterSpacing: '1px'
                                    }}
                                    >I'm passionate to work with new technologies. I wanna build my career with web       development. And i am optimistic about my bright developing career. I do many projects  with react, reactJs, NodeJs with Firebase. Some of my projects are shown here.
                                </p>
                                <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                                    <Grid item xs={2} sm={2} md={2}>
                                        <div style={{
                                            color: '#a9adb8',
                                            paddingLeft: '2px',
                                            paddingRight: '2px',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            marginBottom: '18px',
                                            letterSpacing: '1px'
                                        }}>
                                            <p>Birthday</p>
                                            <p>Phone</p>
                                            <p>Email</p>
                                            <p>From</p>
                                            <p>Language</p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={10} sm={10} md={10}>
                                        <div style={{
                                            color: '#a9adb8',
                                            paddingLeft: '2px',
                                            paddingRight: '2px',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            marginBottom: '18px',
                                        }}>
                                            <p>: Oct 27, 1996</p>
                                            <p>: +880=1732=920=164</p>
                                            <p>: rashedtechdr.786@gmai.com</p>
                                            <p>: Mohanogor Residential Area, Wapda Road, Rampura</p>
                                            <p>: Bangla, English, Hindi</p>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Button sx={{
                                    color: '#FEC544',
                                    fontSize: '16px',
                                    paddingTop: '12px',
                                    paddingBottom: '12px',
                                    paddingLeft: '24px',
                                    paddingRight: '24px',
                                    border: '1px solid #FEC544',
                                    fontWeight: 500,
                                    borderRadius: '50px',
                                    textTransform: 'capitalize',
                                    letterSpacing: '2px',
                                    marginTop: '30px',
                                    ':hover':{
                                        backgroundColor: '#FEC544',
                                        color: '#070D18',
                                    }
                                }}>Download CV</Button>
                            </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default About;