import { Link } from 'react-router-dom';
import "./Footertwo.css";
// import axios from "axios";
// import { useState } from 'react';

 function Footer() {

  // const [email, setEmail] = useState("")
  // const subscribeHandler = async(e) =>{
  //   e.preventDefault()
  //   try {
  //     await axios.post("http://localhost:5000/Subscribe",{email:email} )
  //     setEmail("")
  //     alert("Subscribe")
  //   } catch (error) {
  //     console.log("Not subscribed!!");
  //   }
  // }

  return (
    <footer className="footer-container" >
      <section className='footer-subscription' >
        <p className='footer-subscription-heading' > Enter your email for the latest courses </p>
        <p className='footer-subscription-text' > You can unsubscribe at any time. </p>
        <div className='input-areas' >
          <form > 
            {/* <input onChange={(e)=>{
                  setEmail(e.target.value)
            }} className='footer-input' value={email} name='email' required type='email' placeholder='Your Email' /> */}
            <button type='submit' className='btn-footer'>Subscribe</button>
          </form>
        </div>
      </section>
      <div className='footer-links' >
        <div className='footer-link-wrapper' >
          <div className='footer-link-items' >
            <h2>About Us</h2>
            <Link to='/' >Shipping Method </Link>
            <Link to='/' >Privacy Policy</Link>
            <Link to='/' >Size Guide</Link>
            <Link to='/' >Terms of Service</Link>
          </div> <div className='footer-link-items' >
            <h2>Contact Us</h2>
            <Link to='/' >Contact</Link>
            <Link to='/' >Support</Link>
            <Link to='/' >About us</Link>
          </div>
        </div>
        <div className='footer-link-wrapper' >
          <div className='footer-link-items' >
            <h2></h2>
            <Link to='/' ></Link>
            <Link to='/' ></Link>
            <Link to='/' ></Link>
          </div>
          <div className='footer-link-items' >
            <h2>Social Media</h2>
            <Link to='/' >Instagram</Link>
            <Link to='/' >Facebook</Link>
            <Link to='/' >Youtube</Link>
            <Link to='/' >Twitter</Link>
          </div>
          
        </div>
      </div>
      <section className='social-media' >
        <div className='social-media-wrap' >
          <div className='footer-logo' >
            <Link to='/' className='social-logo' > <i className="fas fa-dumbbell" ></i>Sneak Squad Online Sneaker Store</Link>
          </div>
          <small className='website-rights' >Sneak Squad © 2023</small>
          <div className='social-icons' >
            <Link className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            > <i className='fab fa-facebook-f' />
            </Link>
            <Link className='social-icon-link instagram'
              to='https://www.facebook.com/Solidgymabbottabad'
              target='_blank'
              aria-label='Instagram'> <i className='fab fa-instagram' />
            </Link>
            <Link className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'> <i className='fab fa-youtube' /> </Link>
            <Link className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter' > <i className='fab fa-twitter' /> </Link>
            <Link className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'> <i className='fab fa-linkedin' /> </Link>
          </div>
        </div>
      </section>
    </footer>)
}

export default Footer;