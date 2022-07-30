import { Button } from '@mui/material';
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <div>
            <div>
            <form action=''>
                <h1 className='header-design'>Just Say Hello</h1>
                <input type="name" name=""  placeholder='Your Name' className='form-design'/><br /><br />
                <input type="email" name=""  placeholder='Your Email' className='form-design'/><br /><br />
                <input type="text" name="" placeholder='Your Subject' className='form-design'/><br /><br />
                <textarea rows="8" className='form-wrapper' placeholder='Your Message' />
                <Button 
                sx={{
                    border: '1px solid #fec544',
                    fontSize: '16px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    fontWeight: 500,
                    minWidth: '170px',
                    borderRadius: '50px',
                    marginLeft: '10px',
                    transition: 'all .6s',
                    marginTop: '20px',
                    color: '#fec544',
                    textTransform: 'capitalize',
                    letterSpacing: '1px',
                    marginBottom: '30px',
                    ':hover':{
                        backgroundColor: '#fec544',
                        color: '#070d1b'
                    }
                }}
                >Send Message</Button>
            </form>
            </div>
            
        </div>
    );
};

export default ContactForm;