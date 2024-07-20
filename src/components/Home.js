import React, { useState, useEffect } from 'react';
import image7 from './images/image7.jpeg'
import image8 from './images/image8.jpeg'
import image9 from './images/image9.jpeg'
import image10 from './images/image10.jpeg'
import image11 from './images/image11.jpeg'
import { FaCircleArrowRight } from "react-icons/fa6";

function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 5); // Assuming you have 5 images
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
    <div className={slideIndex === 0 ? "mySlides fade active" : "mySlides fade"}>
      <h2>Find your dream home effortlessly with our expert buying services today.</h2>
      <img src={image7} alt="Slide 1" />
      <a className='ctahome' href='https://wa.me/254727662910' target='_blank' rel='noopener noreferrer'>
        TAKE ME THERE <FaCircleArrowRight className='icon' />
      </a>
    </div>
    <div className={slideIndex === 1 ? "mySlides fade active" : "mySlides fade"}>
      <h2>List your property with us and reach potential buyers or renters.</h2>
      <img src={image8} alt="Slide 2" />
      <a className='ctahome' href='https://wa.me/254727662910' target='_blank' rel='noopener noreferrer'>
        TAKE ME THERE <FaCircleArrowRight className='icon' />
      </a>
    </div>
    <div className={slideIndex === 2 ? "mySlides fade active" : "mySlides fade"}>
      <h2>Discover your ideal rental home with our comprehensive property listings.</h2>
      <img src={image9} alt="Slide 3" />
      <a className='ctahome' href='https://wa.me/254727662910' target='_blank' rel='noopener noreferrer'>
        TAKE ME THERE<FaCircleArrowRight className='icon' />
      </a>
    </div>
    <div className={slideIndex === 3 ? "mySlides fade active" : "mySlides fade"}>
      <h2>Professional property management ensuring your investments are well taken care of.</h2>
      <img src={image10} alt="Slide 4" />
      <a className='ctahome' href='https://wa.me/254727662910' target='_blank' rel='noopener noreferrer'>
        TAKE ME THERE <FaCircleArrowRight className='icon' />
      </a>
    </div>
    <div className={slideIndex === 4 ? "mySlides fade active" : "mySlides fade"}>
      <h2>Stay informed with the latest property market trends and insights.</h2>
      <img src={image11} alt="Slide 5" />
      <a className='ctahome' href='https://wa.me/254727662910' target='_blank' rel='noopener noreferrer'>
        TAKE ME THERE <FaCircleArrowRight className='icon' />
      </a>
    </div>
  </div>
  );
}

export default Home;
