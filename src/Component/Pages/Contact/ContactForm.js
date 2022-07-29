import { Button } from '@mui/material';
import React from 'react';
import './message.css';

const ContactForm = () => {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div>
            <div><h3 style={{
                fontSize: '30px',
                fontWeight: 400,
                marginTop: '-6px',
                marginBottom: '22px',
                color: '#fdfeff',
                marginLeft: '10px'
            }}>Just Sey Hello</h3></div>
            
            <form action='' style={{marginLeft: '10px'}}>
                
                <input  className="input-style" type="text" placeholder="Your Name" /><br /><br />
                
                <input className="input-style" type="email" placeholder="Your Email" name="email" /><br /><br />

                <input  className="input-style" type="text" placeholder="Your Subject" name="subject" /><br /><br />

                <textarea rows="8" placeholder="Your Message" /><br /><br />
                
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
                        marginTop: '20px',
                        ':hover':{
                            backgroundColor: '#FEC544',
                            color: '#070D18',
                        }
                }} type="submit">Send Message</Button>
            </form>
        </div>
    );
};

export default ContactForm;