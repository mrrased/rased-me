import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import img from '../../../images/logo.png';
import { Button, IconButton, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import ParticlesTop from '../Particles/ParticlesTop';
import { Link } from 'react-scroll';
import './FullPages.css';

const drawerWidth = 282;

const FullPages = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div style={{backgroundColor: '#070d1b', color: '#fdfeff', paddingBottom: '80px'}}>
        <Toolbar />
            <Box sx={{textAlign: 'center', marginBottom: '40px'}}>
                <Box>
                    <img src={img} alt="logo" className='w-[6rem] h-[6rem] border-8 border-[#202632] rounded-full mx-auto'
                    />
                </Box>
            </Box>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemIcon>
                </ListItemIcon>
                        <ul className='list-none' >
                            <li className='li-st hover:text-[#fec544]'><Link to="home" spy={true} smooth={true} offset={50} duration={700}>Home</Link></li>
                            <li className='li-st hover:text-[#fec544]'><Link to="about" spy={true} smooth={true} offset={50} duration={700} >About</Link></li>
                            <li className='li-st hover:text-[#fec544]'><Link to="blog" spy={true} smooth={true} offset={50} duration={700} >Demo</Link></li>
                            <li className='li-st hover:text-[#fec544]'><Link to="contact" spy={true} smooth={true} offset={50} duration={700} >Contact</Link></li>
                        </ul>
            </ListItem>
        </List>
        <Box sx={{textAlign: 'center'}}>
            <a style={{textDecoration: 'none'}} href="https://mail.google.com/" target="_blank" rel="noreferrer" >
        <Button 
            sx={{
                paddingLeft: '40px', 
                paddingRight: '40px', 
                paddingTop: '8px', 
                paddingBottom: '8px,', 
                border: '1px solid #fec544',
                borderRadius: '30px',
                color: '#fec544',
                fontWeight: 500,
                textTransform: 'capitalize',
                marginTop: '22px',
                ':hover':{backgroundColor: '#fec544', color: 'black'}
            }}
            >Hire Me</Button></a>
            </Box>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    boxShadow: 'none'
                    }}
                >
                    <Toolbar style={{backgroundColor: '#070d1b', position: 'static'}}>
                    <IconButton
                        
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                     </Toolbar> 
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                    </Drawer>
                    <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                    >
                    {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } , paddingTop: '50px', paddingBottom: '0px'}}
                >
                    <ParticlesTop />
                    <About />
                    <Blog />
                    <Contact />
                    <Footer />
                </Box>
            </Box>
        </div>
    );
};
FullPages.propTypes = {
    window: PropTypes.func,
  };
export default FullPages;