import { BiMessageDetail } from 'react-icons/bi'
import './Contact.css'
import { CgMail } from 'react-icons/cg'
import { PiPhone } from 'react-icons/pi'
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6'
import { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "dccbe50d-f5dd-410f-b1c4-d344b6b729f9");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully!!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };  
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <BiMessageDetail className='msg-icon'/> </h3>
            <p>Feel free to reach out to us with any questions, feedback, or requests for more information. Whether you need admissions details, support, or have suggestions to share, we’re here to assist you. Our team is always ready to help!</p>
            <ul>
                <li><CgMail className='contact-icons'/>   edu-vision2024@gmail.com</li>
                <li><PiPhone className='contact-icons'/> +91 915628****</li>
                <li><FaLocationDot className='contact-icons'/> 21, Bombay Ave, Mumbai <br/> MA 400001, India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text"  name='name' placeholder='Enter your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Mobile Number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <FaArrowRightLong className='arrow-icon'/></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact