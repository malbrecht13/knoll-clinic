import styles from './contactform.module.scss';
import Inputfield from '../Inputfield/inputfield.js';
import Submitbutton from '../Submitbutton/submitbutton.js';
import Textarea from '../Textarea/textarea.js';
import { useState } from 'react';

const Contactform = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [comments,setComments] = useState('');

    const handleChange = (inputName, value) => {
        switch(inputName) {
            case 'Name':
                setName(value);
                break;
            case 'Email':
                setEmail(value);
                break;
            case 'Phone':
                setPhone(value);
                break;
            case 'Comments':
                setComments(value);
                break;
            default:
                return;
        }
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setComments('');
    };

    const handleSubmit = (e) => {
        resetForm();
        alert("Email sent!");
        e.preventDefault();

        // fetch('http://localhost:3003/send', {
        //     method: "POST",
        //     body: JSON.stringify({name, email, phone, comments}),
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        // }).then(response => response.json())
        //   .then(response => {
        //       if(response.status === 'success') {
        //           alert("Message sent");
        //           resetForm();
        //       } else if (response.status === 'fail') {
        //           alert("Message failed to send.");
        //       }
        //   }).catch(err => console.log(err));
    };

    return (
        <>
        <div id="contact_form_goto"></div>
        <div className={styles.contact_form_container}>
            <h3 className={styles.email_us_form_title}>Email Us</h3>
            <form id="contact_form" onSubmit={handleSubmit} method="POST">
                <Inputfield type="text" name="Name" placeholder="Enter name here" handleChange={handleChange}/>
                <Inputfield type="email" name="Email" placeholder="Enter your email here" handleChange={handleChange}/>
                <Inputfield type="tel" name="Phone" placeholder="Enter your phone number here" handleChange={handleChange}/>
                <Textarea name="Comments" placeholder="Enter any questions or comments here" handleChange={handleChange}/>
                <Submitbutton text="Submit"/>
            </form>
        </div>
        </>
    );
}

export default Contactform;