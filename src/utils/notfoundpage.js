import gsap, { Linear } from 'gsap';

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
