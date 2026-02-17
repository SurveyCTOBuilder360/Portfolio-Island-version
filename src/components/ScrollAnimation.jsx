import { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

export const ScrollReveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const transforms = {
    up: { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
    down: { from: { opacity: 0, y: -50 }, to: { opacity: 1, y: 0 } },
    left: { from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 } },
    right: { from: { opacity: 0, x: 50 }, to: { opacity: 1, x: 0 } },
    fade: { from: { opacity: 0 }, to: { opacity: 1 } }
  };

  const spring = useSpring({
    ...transforms[direction].from,
    to: async (call) => {
      if (isVisible) {
        await call(transforms[direction].to);
      }
    },
    config: { tension: 280, friction: 60 },
    delay
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <animated.div ref={ref} style={spring} className={className}>
      {children}
    </animated.div>
  );
};

export const HoverCard = ({ children, className = '' }) => {
  const [spring, api] = useSpring(() => ({ scale: 1, shadow: 20, config: { tension: 300, friction: 20 } }));

  return (
    <animated.div
      style={{ scale: spring.scale, boxShadow: spring.shadow.to(s => `${s}px ${s}px ${s}px rgba(0,0,0,0.15)`) }}
      className={`transition-all ${className}`}
      onMouseEnter={() => api.start({ scale: 1.02, shadow: 30 })}
      onMouseLeave={() => api.start({ scale: 1, shadow: 20 })}
    >
      {children}
    </animated.div>
  );
};
