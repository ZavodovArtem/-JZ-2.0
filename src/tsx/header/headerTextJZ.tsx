// import React, { useState, useEffect } from 'react';
// import '../../scss/header/headerTextJZ.css';

// interface TextAnimationProps {
//   text: string;
//   duration?: number; // Время анимации в миллисекундах
// }

// const TextAnimationJZ: React.FC<TextAnimationProps> = ({ text, duration = 1000 }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsVisible(true), 600);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div
//       className={`textJZ text-animationJZ ${isVisible ? 'visible' : ''}`}
//       style={{ transitionDuration: `${duration}ms` }}
//     >
//       {text}
//     </div>
//   );
// };

// export default TextAnimationJZ;



import React, { useState, useEffect } from 'react';
import '../../scss/header/headerTextJZ.css';

interface TextAnimationProps {
  text: string;
  duration?: number; // Время анимации в миллисекундах
}

const TextAnimationJZ: React.FC<TextAnimationProps> = ({ text, duration = 1000 }) => {
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
      className={`textJZ text-animationJZ ${isVisibleIP? 'visible' : ''}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {text}
    </div>
  );
};

export default TextAnimationJZ;