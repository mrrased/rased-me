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
        <div className='bg-[#0a101e] py-24 px-5' id="contact">

            <div className='about-bg'>
                <h2 className='text-[#151B2980] text-[5.625rem] uppercase mt-0 text-center'>Contact Me</h2>  
            </div>
            <div>
                <h4 className='about-h4 text-2xl font-medium uppercase text-[#fec544] -mt-[11.25rem] text-center'>Contact Me</h4>
            </div>
            <div className='mt-[15rem]'>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                    <Grid item xs={12} sm={12} md={6}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} data-aos="zoom-in">
                        <h3 className='text-[#FDFEFF] text-3xl font-normal -mt-2.5 mb-6'>Contact Info</h3>
                        <div>
                            <p className='text-[#a9adb8] text-lg mb-5'>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                        </div>
                        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm:12, md: 12 }}>
                            <Grid item xs={2} sm={2} md={2}>
                                <ul className='text-[#a9adb8] px-.5 text-sm font-normal space-y-6'>
                                    <li><EmailIcon 
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
                                    /></li>
                                    <li><CallIcon 
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
                                    /></li>
                                    <li><LocationOnIcon 
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
                                    /></li>
                                </ul>
                            </Grid>
                            <Grid item xs={10} sm={10} md={10}>
                                <div> 
                                    <h4 className='text-[#FDFEFF] text-xl mb-1.5 -mt-[1px]'>Email</h4>
                                    <Typography sx={{
                                        color: '#a9adb8',
                                        paddingLeft: '2px',
                                        paddingRight: '2px',
                                        fontSize: '18px',
                                        fontWeight: 400,
                                        marginBottom: '20px',
                                        transition: '.6s',
                                        marginTop: '16px',
                                        ':hover':{
                                            color: '#FEC544',
                                            cursor: 'pointer'
                                        }
                                    }} variant="h1" component="p">
                                        rashedtechdr.786@gmai.com
                                    </Typography>
                                    <h4 className='text-[#FDFEFF] text-xl mb-1.5 -mt-[1px]'>Phone</h4>
                                    <p className='text-[#a9adb8] px-0.5 text-lg font-normal mb-5'>+880-1732-920-164</p>
                                    <h4 className='text-[#FDFEFF] text-lg mb-1.5 -mt-[1px]'>Address</h4>
                                    <p className='text-[#a9adb8] px-0.5 text-lg font-normal mb-4.5'>Mohanogor Residential Area, Wapda Road, Rampura</p>
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