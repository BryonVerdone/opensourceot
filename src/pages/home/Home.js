import React from 'react';
import './index.css';
import heroImage from '../../assets/hero-img.png';
import goalImage from '../../assets/goal-img.png';
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
            <img
              className='hero-img'
              src={heroImage}
              alt='child reading book'
            />
          </div>
        </div>
      </section>
      <section className='goal-section'>
        <div className='goal-container'>
          <div className='goal-text'>
            <h2>Our Goal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
              etiam dignissim diam quis purus sit amet luctus venenatis, lectus
              magna fringilla urna.
            </p>
          </div>
          <div className='goal-img-container'>
            <img style={{ width: '100%' }} src={goalImage} alt='kids writing' />
          </div>
        </div>
      </section>
      <section className='provide-section'>
        <h2>The Content We Provide</h2>
        {/* add icons to cards */}
        <div className='card-container'>
          <article className='card'>
            <h4>Activities created by OT pros</h4>
          </article>
          <article className='card'>
            <h4>Picture examples with instructions</h4>
          </article>
          <article className='card'>
            <h4>Limited to no equipment required</h4>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
