// import React, { useState, useEffect } from 'react';
// import '../../scss/header/headerTextIP.css';

// interface TextAnimationProps {
//   text: string;
//   duration?: number; // Время анимации в миллисекундах
// }

// const TextAnimationIP: React.FC<TextAnimationProps> = ({ text, duration = 1000 }) => {
//   const [isVisibleIP, setIsVisibleIP] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsVisibleIP(true), 300);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div
//       className={`textIP text-animationIP ${isVisibleIP ? 'visible' : ''}`}
//       style={{ transitionDuration: `${duration}ms` }}
//     >
//       {text}
//     </div>
//   );
// };

// export default TextAnimationIP;


import React, { useState, useEffect } from 'react';
import '../../scss/header/headerTextIP.css';

interface TextAnimationProps {
  text: string;
  duration?: number; // Время анимации в миллисекундах
}

const TextAnimationIP: React.FC<TextAnimationProps> = ({ text, duration = 1000 }) => {
  const [isVisibleIP, setIsVisibleIP] = useState(false);
  const textRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisibleIP(true);
      } else {
        setIsVisibleIP(false);
      }
    }, {
      threshold: 0.5, // Анимация сработает, когда элемент будет виден на 50%
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`textIP text-animationIP ${isVisibleIP? 'visible' : ''}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {text}
    </div>
  );
};

export default TextAnimationIP;