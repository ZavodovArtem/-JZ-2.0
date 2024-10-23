import '../../../scss/body/bodyStep.scss'

import React, { useEffect, useRef, useState } from "react";

// interface Props {}

// const TypingText: React.FC<Props> = () => {
//     const [displayedText, setDisplayedText] = useState('');
//     const [isVisible, setIsVisible] = useState(false);
//     const fullText = 'Пошив одежды состоит из нескольких этапов:' ;
//     const elementRef = useRef<HTMLDivElement | null> (null);
    
//     useEffect(() => {
//         const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//             const [entry] = entries;
//             if (entry.isIntersecting){
//                 let    currentIndex = 0;
//                 const interval = setInterval(() => {
//                     setDisplayedText((prev) => fullText.substring(0, currentIndex + 1));
//                     currentIndex += 1;
//                     if (currentIndex === fullText.length) {
//                         clearInterval(interval);
//                         setIsVisible(true);
//                     }
//                 },50);
//             }
//         };
//         const observer = new IntersectionObserver (handleIntersection, {
//             root: null,
//             rootMargin: '0px',
//             threshold: 1.0,
//         });
//         if (elementRef.current){
//             observer.observe(elementRef.current);
//         }

//         return () => {
//             if(elementRef.current) {
//                 observer.unobserve(elementRef.current);
//             }
//         }
//     }, [fullText]);

//     return(
//         <div className="BodyStepHDiv" ref={elementRef}>
//             {/* <h1 className="BodyStepH fontRegular">{displayedText}</h1> */}
//             <h1 className={`BodyStepH fontRegular ${isVisible ? 'visible' : ''}`}>{displayedText}</h1>
//         </div>
//     )
// }

// export default TypingText;




// interface Props {}

// const TypingText: React.FC<Props> = () => {
//     const [letters, setLetters] = useState<string[]>([]);
//     const fullText = 'Пошив одежды состоит из нескольких этапов:';
//     const elementRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//             const [entry] = entries;
//             if (entry.isIntersecting) {
//                 let currentIndex = 0;
//                 const interval = setInterval(() => {
//                     setLetters((prev) => [
//                         ...prev,
//                         fullText[currentIndex]
//                     ]);
//                     currentIndex += 1;
//                     if (currentIndex === fullText.length) {
//                         clearInterval(interval);
//                     }
//                 }, 55); // Интервал для плавного появления букв
//             }
//         };

//         const observer = new IntersectionObserver(handleIntersection, {
//             root: null,
//             rootMargin: '0px',
//             threshold: 1.0,
//         });

//         if (elementRef.current) {
//             observer.observe(elementRef.current);
//         }

//         return () => {
//             if (elementRef.current) {
//                 observer.unobserve(elementRef.current);
//             }
//         };
//     }, [fullText]);

//     return (
//         <div className="BodyStepHDiv" ref={elementRef}>
//             <h1 className="BodyStepH fontRegular">
//                 {letters.map((letter, index) => (
//                     <span key={index} className="letter" style={{ animationDelay: `${index * 0.075}s` }}>
//                         {letter}
//                     </span>
//                 ))}
//             </h1>
//         </div>
//     );
// };

// export default TypingText;





// 3+


// interface Props {}

// const TypingText: React.FC<Props> = () => {
//     const [letters, setLetters] = useState<string>('');
//     const fullText = 'Пошив одежды состоит из нескольких этапов:';
//     const elementRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//             const [entry] = entries;
//             if (entry.isIntersecting) {
//                 let currentIndex = 0;

//                 const addLetter = () => {
//                     setLetters(fullText.substring(0, currentIndex));
//                     currentIndex += 1;
//                     if (currentIndex <= fullText.length) {
//                         setTimeout(addLetter, 75); // Вызываем снова через 75 мс
//                     }
//                 };

//                 addLetter(); // Начинаем добавление букв
//             }
//         };

//         const observer = new IntersectionObserver(handleIntersection, {
//             root: null,
//             rootMargin: '0px',
//             threshold: 1.0,
//         });

//         if (elementRef.current) {
//             observer.observe(elementRef.current);
//         }

//         return () => {
//             if (elementRef.current) {
//                 observer.unobserve(elementRef.current);
//             }
//         };
//     }, [fullText]);

//     return (
//         <div className="BodyStepHDiv" ref={elementRef}>
//             <h1 className="BodyStepH fontRegular">
//                 {letters.split('').map((letter, index) => (
//                     <span key={index} className="letter" style={{ animationDelay: `${index * 0.075}s` }}>
//                         {letter}
//                     </span>
//                 ))}
//             </h1>
//         </div>
//     );
// };

// export default TypingText;

// 4++

interface Props {}

const TypingText: React.FC<Props> = () => {
    const [letters, setLetters] = useState<string>('');
    const fullText = 'Пошив одежды состоит из нескольких этапов:';
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                let currentIndex = 0;

                const addLetter = () => {
                    setLetters(fullText.substring(0, currentIndex));
                    currentIndex += 1;
                    if (currentIndex <= fullText.length) {
                        setTimeout(addLetter, 30); // Вызываем снова через 30 мс
                    }
                };

                addLetter(); // Начинаем добавление букв
            }
        };

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [fullText]);

    return (
        <div className="BodyStepHDiv" ref={elementRef}>
            <h1 className="BodyStepH fontRegular">
                {letters.split('').map((letter, index) => (
                    <span
                        key={index}
                        className={letter === ' ' ? 'space' : 'letter'}
                        style={{ animationDelay: `${index * 0.040}s` }}
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default TypingText;
