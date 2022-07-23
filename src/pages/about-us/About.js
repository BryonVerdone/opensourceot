import React from 'react';
import './index.css';
import { Container } from 'react-bootstrap';
import Headshot from '../../assets/headshot-small.JPG';
const About = () => {
  return (
    <section className='about-section'>
      <article className='about-content' style={{ margin: '2rem auto' }}>
        <div className='headshot-container'>
          <img className='headshot' src={Headshot} alt='' />
        </div>
        <div className='about-text'>
          <p>
            The goal with Open Source OT is to facilitate a free repository of
            occupational therapy activities created by the OT community. While
            working as a COTA (Certified OT Assistant) I would regularly be
            asked for additional activities or exercises that my clients could
            perform on their own. So I decided to create my own resource for
            others to use.
          </p>
          <p>
            The occupational therapy community is one built upon sharing ideas
            and techniques with other practitioners. My hope is that this will
            serve as a tool for OT's and the individuals they support. OT
            practitioners will be able to submit their own activities to the
            site by providing step by step instructions and visual aids.
          </p>
        </div>
      </article>
    </section>
  );
};

export default About;
