import React  from 'react';
import './ContactUs.css';
import { Form , Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const ContactUs = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
                        process.env.REACT_APP_SERVICE_ID,
                        process.env.REACT_APP_TEMPLATE_ID,
                        e.target,
                        process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
              Swal.fire(
                'Send Message',
                'Your Mail has been send. Thank you for connecting.',
                'success'
              );
            
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    } 
    return(
        <div className='ContactUs-body'>
            <div className='ContactUs-header'>
                <label className='ContactUs-header-text'><strong>Contact Us</strong></label>
            </div>
            <div className='ContactUs-tag'>
                <div className='address-tag'>
                    <div className='address-inner-tag'>
                        <div className='header-tag'>
                            <label className='address-header'><strong>Contact Info</strong></label>
                        </div>
                        
                        <div className='address'> 
                            {/* <label>a</label> */}
                            <div className='icon-tag'>
                                <img src='./location.svg' alt='Location-Img' className='icon-css' />
                            </div>
                            <div className='adress-text-tag'>
                                <label className='text-header'><strong>Adress</strong></label>
                                <p className='text'>
                                    4671 sanala road<br />
                                    4671 Sanala road<br />
                                    4671 sanala road
                                </p>
                            </div>
                        </div>
                        <div className='address'> 
                            {/* <label>a</label> */}
                            <div className='icon-tag'>
                                <img src='./call.svg' alt='Location-Img' className='icon-css' />
                            </div>
                            <div className='adress-text-tag'>
                            <label className='text-header'><strong>Phone</strong></label>
                                <p className='text'>
                                    12345-67890
                                </p>
                            </div>
                            
                        </div>
                        <div className='address'> 
                            <div className='icon-tag'>
                                <img src='./email.svg' alt='Location-Img' className='icon-css' />
                            </div>
                            <div className='adress-text-tag'>
                            <label className='text-header'><strong>Phone</strong></label>
                                <p className='text'>
                                    aadarshgh2000@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='message-tag'>
                    <div className='message-inner-tag'>
                        {/* <label>a</label> */}
                        <div className='header-tag'>
                            <label className='message-tag-header'><strong>Message Me</strong></label>
                        </div>
                        <Form className='form-tag' onSubmit={sendEmail}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Full Name" className='decoration'  name='name'/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Email" className='decoration'  name='email'/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control as="textarea" placeholder='Your Message' className='decoration' rows={5} name='message'/>
                        </Form.Group>
                        <Button variant="primary" type='submit'>SEND</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;