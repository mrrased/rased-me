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

    // let activeStyle = {
        
    //     borderBottom: '4px solid crimson',
    //     color: 'crimson',
    //     fontWeight: 'bold'
    // };

    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
    //  const itemsList = [
    //     {
    //         text: "Home",
    //         onClick:  () => console.log(<Link to='about'>working</Link>)

    //     },
    //     {
    //         text: "About"
    //     },
    //     {
    //         text: "Resume"
    //     },
    //     {
    //         text: "Portfolio"
    //     },
    //     {
    //         text: "Blog"
    //     },
    //     {
    //         text: "Contact"
    //     }
    //  ]
  const drawer = (
    <div style={{backgroundColor: '#070d1b', color: '#fdfeff', paddingBottom: '80px'}}>
      <Toolbar />
        <Box sx={{textAlign: 'center', marginBottom: '40px'}}>
            <Box>
                <img src={img} alt="logo" style={{width: 178, height: 178 ,  borderRadius: '50%', border: '6px solid #202632'}} />
            </Box>
        </Box>
      <Divider />
      <List>
      
          <ListItem disablePadding>
            {/* <ListItemButton> */}
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              {/* <ListItemText 
              primary={text.text} 
                    sx={{
                    marginTop: '0px', 
                    marginBottom: '0px', 
                    fontSize: '15px', 
                    fontWeight: 500,
                    textTransform: 'uppercase'
                }} 
                /> */}
                {/* <Link to="/home" spy={true} smooth={true} offset={50} duration={500} style={{marginTop: '0px', 
                    marginBottom: '0px', 
                    fontSize: '15px', 
                    fontWeight: 500,
                    textTransform: 'uppercase'}}>Home</Link> */}
                    <ul style={{listStyleType: 'none'}} >
                        <li className='li-st active'><Link 
                        to="home" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={700}
                        >Home</Link></li>
                        <li className='li-st'><Link to="about" spy={true} smooth={true} offset={50} duration={700} >About</Link></li>
                        <li className='li-st'><Link to="blog" spy={true} smooth={true} offset={50} duration={700} >Blog</Link></li>
                        <li className='li-st'><Link to="contact" spy={true} smooth={true} offset={50} duration={700} >Contact</Link></li>
                    </ul>
                    
            {/* </ListItemButton> */}
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
                    {/* <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography> */}
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                    {/* <Toolbar sx={{paddingBottom: '0px'}} /> */}
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
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
export default FullPages;