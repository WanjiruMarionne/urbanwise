import React from 'react';
import image5 from './images/image5.jpg'
import { FaCircleArrowRight } from "react-icons/fa6";

function AboutUs() {
  return (
    <div>
      <div className='headlinecontainer'>
        <img className='image5' src={image5} alt='image5'></img>
        <h1 className='listpropertyheadline'>About Us</h1>
        <a className='ctalisting' href='https://wa.me/254727662910' target='_blank' rel='noopener noreferrer'>
          Contact Us <FaCircleArrowRight className='icon' />
        </a>
      </div>
      <div className='aboutus'>
        <div class="section">
            <h2>Who We Are</h2>
            <p>Urban Wise Realtors is an established real estate firm specializing in buying, selling, and managing properties. Our team comprises of experienced professionals with a deep understanding of the real estate market, dedicated to delivering exceptional service and personalized solutions to meet your unique needs.</p>
        </div>
        <div class="section">
            <h2>Our Vision</h2>
            <p>Our vision is to become the trusted name in real estate, known for our integrity, excellence, and commitment to client success. We aim to simplify the real estate process and make property transactions as seamless and rewarding as possible.</p>
        </div>
        <div class="section">
            <h2>Our Mission</h2>
            <p>Our mission is to provide a seamless and rewarding real estate experience for our clients. We strive to build lasting relationships based on trust, integrity, and excellence, ensuring that every transaction is smooth and successful.</p>
        </div>
        <div class="section">
            <h2>What We Offer</h2>
            <h3>Buying and Selling Property</h3>
            <p>Whether you're a first-time homebuyer, an investor, or looking to sell, we offer expert guidance and support throughout the entire process. Our team is dedicated to finding the perfect match for your needs and ensuring you get the best value.</p>
            <h3>Property Management</h3>
            <p>We provide comprehensive property management services, taking care of everything from tenant acquisition and rent collection to property maintenance and legal compliance. Our goal is to maximize your property's potential while minimizing your stress.</p>
            <h3>Letting Services</h3>
            <p>Our letting services are designed to connect landlords with reliable tenants. We handle everything from marketing your property and conducting thorough tenant screenings to managing leases and maintaining open communication with tenants. Our aim is to ensure a smooth and efficient letting process for both landlords and tenants.</p>
        </div>
        <div class="section">
            <h2>Our Approach</h2>
            <p><strong>Client-Centered:</strong> At Urban Wise Realtors, our clients are at the heart of everything we do. We take the time to understand your needs and tailor our services to meet your specific goals.</p>
            <p><strong>Innovative Solutions:</strong> We leverage the latest technology and market insights to provide you with up-to-date information and innovative solutions that set us apart from the competition.</p>
            <p><strong>Integrity and Transparency:</strong> We believe in building trust through honesty and open communication. Our transparent processes ensure that you are always informed and confident in your decisions.</p>
            <p><strong>Community Focused:</strong> We are committed to not just serving our clients but also contributing positively to the communities we operate in. We believe in sustainable growth and responsible development.</p>
        </div>
        <div class="section">
            <h2>Why Urban Wise Realtors?</h2>
            <p>Choosing Urban Wise Realtors means partnering with a team that is dedicated to your success. Our comprehensive services, personalized approach, and unwavering commitment to excellence make us the ideal choice for all your real estate needs.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;