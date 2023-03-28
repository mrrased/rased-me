
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../../images/2 lunch.png';
import doctorImg from '../../../images/doctros portal.PNG';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
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



const Blog = () => {

    useEffect(()=>{
        AOS.init({duration: 1000})
    },[])
    return (
        <div className='bg-[#0a1012] py-40 px-5' id="blog">
            <div className='blog-bg'>
                <h2 className='text-[#151B2980] text-8xl uppercase mt-0 text-center'>Demo View</h2>
            </div>
            <div>
                <h4 className='text-[#fec544] text-2xl uppercase font-medium -mt-[11.25rem] text-center about-h4'>Demo View</h4>
            </div>
            <div className='mt-[15rem]'>
                <Box sx={{ flexGrow: 1 }}>
                    
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            
                            <Grid item xs={12} sm={12} md={6}  data-aos="flip-down" sx={{marginBottom: '40px'}}>
                                <Box sx={{textAlign: 'center', paddingTop: '40px'}}>
                                    <img className='h-[12.5rem] w-[21.875rem] mx-auto' src={img} alt="" />
                                </Box>
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={6} data-aos="zoom-in">
                                <Box >
                                <Typography variant="h1" component="h2" sx={{fontSize: '30px', fontWeight: 400, color: '#fdfeff', marginBottom: '10px'}}>
                                    Red Onion Restaurant
                                </Typography>

                                <ul className='ul-design'>
                                    <li className='text-[#a9adb8] my-2'>A Restaurant Website</li>
                                </ul>

                                <Typography variant="h1" component="h2" sx={{fontSize: '17px', fontWeight: 400, color: '#fdfeff'}}>
                                    Key Features
                                </Typography>

                                <Box sx={{color: '#a9adb8'}}>
                                    <ul className='mb-2'>
                                        <li>Has admin panel add or remove another admin</li>
                                        <li>User can book Appointment & share experience</li>
                                        <li>Everyone have to go through google authentication and can pay with strip</li>
                                        
                                    </ul>
                                </Box>
                                
                                <Typography variant="h1" component="h2" sx={{fontSize: '17px', fontWeight: 400, color: '#fdfeff'}}>
                                    Tools
                                </Typography>

                                <Box sx={{color: '#a9adb8'}}>
                                    <ul>
                                        <li>HTML, CSS, Bootstrap, reactJs, NodeJs, MongoDB, ExpressJs, Firebase, Heroku</li>
                                        
                                    </ul>
                                </Box>
                                
                                    <p><span><a href="https://github.com/mrrased/red-onion" target="_blank" rel="noreferrer"><Tooltip TransitionComponent={Zoom} title="Github" arrow><GitHubIcon 
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
                                                
                                            /></Tooltip></a></span><span><a href='https://red-onion-d70eb.web.app/' target="_blank" alt="#" rel="noreferrer"><Tooltip TransitionComponent={Zoom} title="Live Site" arrow><VisibilityIcon 
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
                                                
                                    /></Tooltip></a></span></p>
                                
                                </Box>
                            </Grid>
                           
                        </Grid>
                    
                    <Box sx={{ marginTop: '80px' }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                            
                            <Grid item xs={12} sm={12} md={6}  data-aos="flip-down" sx={{marginBottom: '40px'}}>
                                <Box sx={{textAlign: 'center', paddingTop: '40px'}}>
                                    <img className='h-[12.5rem] w-[21.875rem] mx-auto' src={doctorImg} alt="" />
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={12} md={6} data-aos="zoom-in">

                                <Box sx={{marginTop: '-40px'}}>

                                    <Typography variant="h1" component="h2" sx={{fontSize: '30px', fontWeight: 400, color: '#fdfeff', marginBottom: '10px'}}>
                                        Doctors Portal
                                    </Typography>

                                    <ul className='ul-design'>
                                        <li className='text-[#a9adb8] my-2'
                                        style={{color: '#a9adb8', letterSpacing: '1px'}}>Doctors Appointment  Website</li>
                                    </ul>

                                    <Typography variant="h1" component="h2" sx={{fontSize: '17px', fontWeight: 400, color: '#fdfeff'}}>
                                        Key Features
                                    </Typography>

                                    <Box sx={{color: '#a9adb8'}}>
                                        <ul className='mb-2'>
                                            <li>Has admin panel add or remove another admin</li>
                                            <li>User can book Appointment & share experience</li>
                                            <li>Everyone have to go through google authentication and can pay with strip</li>
                                            
                                        </ul>
                                    </Box>

                                    <Typography variant="h1" component="h2" sx={{fontSize: '17px', fontWeight: 400, color: '#fdfeff'}}>
                                        Tools
                                    </Typography>

                                    <Box sx={{color: '#a9adb8'}}>
                                        <ul>
                                            <li>HTML, CSS, Bootstrap, reactJs, NodeJs, MongoDB, ExpressJs, Firebase, Heroku</li>
                                            
                                        </ul>
                                    </Box>

                                    <Box>
                                    <p><span><a href="https://github.com/mrrased/doctors-portal-client" target="_blank" rel="noreferrer"><Tooltip TransitionComponent={Zoom} title="Github" arrow><GitHubIcon 
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
                                                /></Tooltip></a></span><span><a href="https://doctors-portal-8f0a7.web.app/" target="_blank"  rel="noreferrer"><Tooltip TransitionComponent={Zoom} title="Live Site" arrow><VisibilityIcon 
                                                sx={{
                                                    border: '1px solid #202632',
                                                    borderRadius: '50%',
                                                    padding: '7px', 
                                                    fontSize: '40px',
                                                    margin: '10px',
                                                    color: '#a4a8b4',
                                                    transition: '.4s',
                                                    ':hover':{border: '1px solid #FEC544',  cursor: 'pointer'}
                                                    }} 
                                                /></Tooltip></a></span></p>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default Blog;