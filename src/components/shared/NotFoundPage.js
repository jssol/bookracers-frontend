import React from 'react';
import gsap, { Linear } from 'gsap';
import '../assets/styles/NotFoundPage.scss';

const t1 = gsap.timeline();
const t2 = gsap.timeline();
const t3 = gsap.timeline();

t1.to('.cog1', {
  transformOrigin: '50% 50%',
  rotation: '+=360',
  repeat: -1,
  ease: Linear.easeNone,
  duration: 8,
});

t2.to('.cog2', {
  transformOrigin: '50% 50%',
  rotation: '-=360',
  repeat: -1,
  ease: Linear.easeNone,
  duration: 8,
});

t3.fromTo(
  '.wrong-para',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
    stagger: {
      repeat: -1,
      yoyo: true,
    },
  },
);

const NotFoundPage = () => (
  <div className="container">
    <h1 className="first-four">4</h1>
    <div className="cog-wheel1">
      <div className="cog1">
        <div className="top" />
        <div className="down" />
        <div className="left-top" />
        <div className="left-down" />
        <div className="right-top" />
        <div className="right-down" />
        <div className="left" />
        <div className="right" />
      </div>
    </div>

    <div className="cog-wheel2">
      <div className="cog2">
        <div className="top" />
        <div className="down" />
        <div className="left-top" />
        <div className="left-down" />
        <div className="right-top" />
        <div className="right-down" />
        <div className="left" />
        <div className="right" />
      </div>
    </div>
    <h1 className="second-four">4</h1>
    <p className="wrong-para">Uh Oh! Page not found!</p>
  </div>
);

export default NotFoundPage;
