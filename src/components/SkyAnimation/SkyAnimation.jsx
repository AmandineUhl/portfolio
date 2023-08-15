import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './SkyAnimation.scss'

const SkyAnimation = () => {
  const skyRef = useRef(null);

  useEffect(() => {
    const skyContainer = skyRef.current;

    // Create the shooting icon
    const icon = document.createElement('i');
    icon.className = 'shooting-icon fa-brands fa-react';
    skyContainer.appendChild(icon);

    // Function to animate the shooting icon
    function animateShootingIcon(icon) {
      const side = Math.floor(Math.random() * 4); // Random side of the screen

      let startX, startY;
      const offset = 100; // Offset to make the icon start slightly outside the screen

      switch (side) {
        case 0:
          startX = -offset;
          startY = Math.random() * window.innerHeight;
          break;
        case 1:
          startX = Math.random() * window.innerWidth;
          startY = -offset;
          break;
        case 2:
          startX = window.innerWidth + offset;
          startY = Math.random() * window.innerHeight;
          break;
        case 3:
          startX = Math.random() * window.innerWidth;
          startY = window.innerHeight + offset;
          break;
        default:
          startX = -offset;
          startY = Math.random() * window.innerHeight;
      }

      const endX = Math.random() * window.innerWidth;
      const endY = Math.random() * window.innerHeight;
      const duration = 3 + Math.random() * 3;

      gsap.set(icon, {
        x: startX,
        y: startY,
        opacity: 0.8,
      });

      gsap.to(icon, {
        x: endX,
        y: endY,
        opacity: 0,
        ease: 'power1.inOut',
        duration: duration,
        onComplete: () => {
          setTimeout(() => {
            animateShootingIcon(icon);
          }, 3000); // 3 seconds delay
        },
      });
    }

    // Animate the shooting icon
    animateShootingIcon(icon);

    // Create flashing points
    const numberOfPoints = 18;

    for (let i = 0; i < numberOfPoints; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.floor(Math.random() * 3) + 1;

      createFlashingPoint(x, y, size);
    }

    // Function to create flashing points
    function createFlashingPoint(x, y, size) {
      const point = document.createElement('div');
      point.className = 'flashing-point';
      skyContainer.appendChild(point);

      gsap.set(point, {
        x: x,
        y: y,
        width: size,
        height: size,
        opacity: 0.8,
      });

      gsap.to(point, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5 + Math.random() * 0.5,
      });
    }
  }, []);

  const backgroundColor = "#12162e";

  return <div ref={skyRef} id="sky" style={{ backgroundColor }}></div>;
};

export default SkyAnimation;
