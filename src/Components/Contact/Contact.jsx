import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", " ");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div>
      <div className="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora deserunt laboriosam iure non itaque ad asperiores nobis nulla reprehenderit magni voluptatem provident minus aliquid perferendis velit maiores, illum labore?</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@13Gamil.com</li>
                <li> <img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li> <img src={location_icon} alt="" />77 massachusetts Ave, Cambridge <br />MA 02139, united states</li>

            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" name='name ' placeholder='Enter your name' required />
            <label htmlFor="">
              phone number
            </label>
            <input type="tel" name='phonw' placeholder='Enter you mobile number' required />
            <label htmlFor="">Write your message here</label>
            <textarea name="nmessage"  rows="6" placeholder='Enter your message here'></textarea>
             <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
      
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
