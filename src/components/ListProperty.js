import React from 'react';
import image5 from './images/image5.jpg'
import { FiGlobe } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { RiNumbersFill } from "react-icons/ri";
import { RiCheckDoubleLine } from "react-icons/ri";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function ListProperty() {
  return (
    <div>
      <div className='headlinecontainer'>
        <img className='image5' src={image5} alt='image5'></img>
        <h1 className='listpropertyheadline'>List Your Property With UrbanWise Realtors</h1>
        <a className='ctalisting' href='https://wa.me/254727662910' target='_blank' rel='noopener noreferrer'>
          Contact Us <FaCircleArrowRight className='icon' />
        </a>
      </div>
      <div className='listingheadline1'>
        <h2>WHY LIST WITH US?</h2>
        <div class="howweroll">
          <div class="backgroundtext1">
            <div class="backgroundline">HOW</div>
            <div class="backgroundline">WE</div>
            <div class="backgroundline">ROLL</div>
          </div>
          <div class="listsection1">
            <h2><FiGlobe className='icon'/> WIDE REACH</h2>
            <p>We use a targeted approach to reach the right buyers or renters for your property.</p>
          </div>
          <div class="listsection2">
            <h2><VscAccount className='icon'/> EXPERT SUPPORT</h2>
            <p>Our experts have the experience and knowledge to handle any situation and ensure smooth transactions and processes.</p>
          </div>
          <div class="listsection3">
            <h2><RiCheckDoubleLine className='icon'/> HASSLE FREE PROCESS</h2>
            <p>We handle the paperwork, negotiations, and marketing so you can relax and enjoy the peace of mind.</p>
          </div>
          <div class="listsection4">
            <h2><RiNumbersFill className='icon'/> TOP DOLLAR VALUE</h2>
            <p>We leverage our expertise to generate and build value for your property.</p>
          </div>
        </div>
      </div>
      <div className='listingheadline2'>
        <h2>HOW IT WORKS</h2>
        <div class="howitworks">
          <div class="backgroundtext2">
            <div class="backgroundline2">A</div>
            <div class="backgroundline2">STEP</div>
            <div class="backgroundline2">BY</div>
            <div class="backgroundline2">STEP</div>
            <div class="backgroundline2">GUIDE</div>
          </div>
          <div class="listsection">
            <h2> CONTACT US</h2>
            <p>Reach out to our team to get started.</p>
          </div>
          <div class="listsection">
            <h2> PROPERTY EVALUATION</h2>
            <p>We assess your property to determine its value  gather all the necessary details, including taking high-quality pictures.</p>
          </div>
          <div class="listsection">
            <h2>LISTING & MARKETING</h2>
            <p>Your property gets listed and marketed to attract buyers/renters.</p>
          </div>
          <div class="listsection">
            <h2> FINDING SUITABLE CLIENTS</h2>
            <p>We connect with potential buyers/renters.</p>
          </div>
          <div class="listsection">
            <h2> CLOSING THE DEAL</h2>
            <p>We handle the negotiations and finalize the sale or rental agreement.</p>
          </div>
          <div class="listsection">
            <h2> GET PAID AND CELEBRATE</h2>
            <p>Receive your payment and enjoy the rewards of your successful listing with UrbanWise Realtors.</p>
          </div>
          <div class="lines">
            <div class="line line-1"><span class="line-number">1</span></div>
            <div class="line line-2"><span class="line-number">2</span></div>
            <div class="line line-3"><span class="line-number">3</span></div>
            <div class="line line-4"><span class="line-number">4</span></div>
            <div class="line line-5"><span class="line-number">5</span></div>
            <div class="line line-6"><span class="line-number">6</span></div>
          </div>
        </div>
      </div>
      <div className='separator'></div>
      <div className='contactus'>
        <h2>READY TO LIST?</h2>
        <div className='contactoptions'>
          <div className='contactcard'>
            <FaWhatsapp className='contacticon' />
            <h3>Chat to Sales</h3>
            <p>Speak to our friendly team</p>
            <a href='https://wa.me/254705690135' target='_blank' rel='noopener noreferrer'>+254705690135</a>
          </div>
          <div className='contactcard'>
            <FaWhatsapp className='contacticon' />
            <h3>Chat to Support</h3>
            <p>We’re here to help</p>
            <a href='https://wa.me/254727662910'>+254727662910</a>
          </div>
          <div className='contactcard'>
            <FaPhone className='contacticon' />
            <h3>Call Us</h3>
            <p>Mon-Fri from 8am to 5pm</p>
            <p>Sat from 8am to 12noon</p>
            <a href='tel:+254705690135'>+254705690135</a>
          </div>
          <div className='contactcard'>
            <FaMapMarkerAlt className='contacticon' />
            <h3>Visit Us</h3>
            <p>Visit our office HQ</p>
            <p>Nyaatha Plaza</p>
            <p>Ground Floor</p>
            <p>Suite 5A</p>
            <a href='https://maps.app.goo.gl/59v6EDC1jRWqNqC7A' target='_blank' rel='noopener noreferrer'>View on Google Maps</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProperty;