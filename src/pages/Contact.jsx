import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const navigate=useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_0skg4qs",
        "template_m1uxl0p",
        form.current,
        "CewSSi3qeC711XaSg"
      )
      .then((result) => {
          console.log(result.text);
          setDone(true);
          toast.success("Message sent  successfully!");
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='maincontact'>
  <section id="page-header" className="about-header">
    <h2>#let's_talk</h2>
    <p>Here you can leave your message,We love to hear you</p>
  </section>
  <section id="contact-details" className="section-p1">
    <div className="details">
      <span>Get in touch</span>
      <h2>visit one of our  locations or contact us today</h2>
      <h3>Head office</h3>
      <div>
        <li>
          <p className="fa-solid">
           Maharshi Dayanand  University ,rohtak, harayan near delhi bypass road</p>
        </li>
        <li>
          <p className="fa-solid">
           ngb4820@example.com</p>
        </li>
        <li>
          <p className="fa-solid">
           +01 2222 365/(+91) 01 2345 6789</p>
        </li>
        <li>
          <p className="fa-solid">
          Monday to saturday: 9.00am to 5.00pm </p>
        </li>
      </div>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6987.435125860597!2d76.6206771!3d28.87701775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d84ddaef54325%3A0x5c86cf8f3f0e375d!2sMaharshi%20Dayanand%20University%2C%20Rohtak%2C%20Haryana%20124001!5e0!3m2!1sen!2sin!4v1695540303174!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  </section>
  <section id="form-details">
    <form ref={form} onSubmit={sendEmail}>
      <span>LEAVE A MEASSAGE</span>
      <h2>We love to hear you</h2>
      <input type="text" placeholder="Your Good Name" name="user_name" />
      <input type="text" name="user_email" placeholder="E-mail" />
      <input type="text" placeholder="Subject " />
      <textarea name id cols={30} rows={5} placeholder="Your message" defaultValue={""} />
      <button className="normal">Submit</button>
    </form>
  </section>
</div>
  )
}

export default Contact


