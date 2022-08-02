import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Contact.module.css';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import ContactForm from './ContactForm/ContactForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Contact = () => {

    useEffect(()=>{
        AOS.init({duration: 1000})
    },[])

    return (
        <div style={{backgroundColor: '#0a101e', paddingTop: '100px', paddingBottom: '100px', paddingLeft: '20px', paddingRight: '20px'}} id="contact">

            <div className='about-bg'>
                <h2 style={{
                    color: '#151B2980',
                    fontSize: '90px',
                    textTransform: 'uppercase',
                    marginTop: '0px',
                    textAlign: 'center',

                    }}
                >Contact Me</h2>
                
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
                }}>Contact Me</h4>
            </div>
            <div style={{marginTop: '90px'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                    
                    <Grid item xs={12} sm={12} md={6}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} data-aos="fade-left">
                        <h3 style={{
                            color: '#FDFEFF',
                            fontSize: '30px',
                            fontWeight: 400,
                            marginTop: '-6px',
                            marginBottom: '22px'
                        }}>Contact Info</h3>

                        <div>
                            <p style={{
                                color: '#a9adb8',
                                fontSize: '16px',
                                fontWeight: 400,
                                letterSpacing: '1px'
                            }}>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.

                            </p>
                        </div>


                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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
                                            <p><EmailIcon 
                                            sx={{
                                                border: '1px solid #202632',
                                                borderRadius: '50%',
                                                padding: '7px', 
                                                fontSize: 40,
                                                margin: '10px',
                                                color: '#a4a8b4',
                                                transition: '.4s',
                                                ':hover':{border: '1px solid #FEC544',  cursor: 'pointer'}
                                                }} 
                                            /></p>
                                            <p><CallIcon 
                                            sx={{
                                                border: '1px solid #202632',
                                                borderRadius: '50%',
                                                padding: '7px', 
                                                fontSize: 40,
                                                margin: '10px',
                                                color: '#a4a8b4',
                                                transition: '.4s',
                                                ':hover':{border: '1px solid #FEC544', cursor: 'pointer'}
                                                }} 
                                            /></p>
                                            <p><LocationOnIcon 
                                            sx={{
                                                border: '1px solid #202632',
                                                borderRadius: '50%',
                                                padding: '7px', 
                                                fontSize: 40,
                                                margin: '10px',
                                                color: '#a4a8b4',
                                                transition: '.4s',
                                                ':hover':{border: '1px solid #FEC544', cursor: 'pointer'}
                                                }} 
                                            /></p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={10} sm={10} md={10}>
                                        <div> 
                                            <h4 style={{
                                                color: '#FDFEFF',
                                                fontSize: '20px',
                                                marginBottom: '6px',
                                                marginTop: '-1px'

                                                }}
                                            >Email</h4>

                                            <Typography sx={{
                                            color: '#a9adb8',
                                            paddingLeft: '2px',
                                            paddingRight: '2px',
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            marginBottom: '18px',
                                            transition: '.6s',
                                            ':hover':{
                                                color: '#FEC544',
                                                cursor: 'pointer'
                                            }
                                            }} variant="h1" component="p">
                                                rashedtechdr.786@gmai.com
                                            </Typography>

                                            <h4 style={{
                                                color: '#FDFEFF',
                                                fontSize: '20px',
                                                marginBottom: '6px',
                                                marginTop: '-1px'
                                        
                                            }}>Phone</h4>

                                            <p style={{
                                            color: '#a9adb8',
                                            paddingLeft: '2px',
                                            paddingRight: '2px',
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            marginBottom: '18px',
                                        }}> +880-1732-920-164</p>

                                            <h4 style={{
                                                color: '#FDFEFF',
                                                fontSize: '20px',
                                                marginBottom: '6px',
                                                marginTop: '-1px'

                                            }}
                                            >Address</h4>
                                            <p style={{
                                            color: '#a9adb8',
                                            paddingLeft: '2px',
                                            paddingRight: '2px',
                                            fontSize: '16px',
                                            fontWeight: 400,
                                            marginBottom: '18px',
                                        }}> Mohanogor Residential Area, Wapda Road, Rampura</p>
                                            
                                        </div>
                                    </Grid>
                                </Grid>
                    </Grid>
                    
                </Grid>
            </Box>
            </div>
        </div>
    );
};

export default Contact;