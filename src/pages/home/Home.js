import React from 'react';
import './index.css';
import heroImage from '../../assets/hero-img.png';
const Home = () => {
  return (
    <>
      <section className='hero-section'>
        <div className='hero-container'>
          <div className='hero-text'>
            <h1>Occupational Therapy Activities From The OT Community</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctu
            </p>
            <div className='hero-btn-container'>
              <button className='btn'>Activities</button>
              <button className='btn'>About</button>
            </div>
          </div>
          <div className='hero-img-container'>
            <img className='hero-img' src={heroImage} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
