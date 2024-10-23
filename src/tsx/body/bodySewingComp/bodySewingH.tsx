
// import React, {useEffect, useRef, useState} from "react";
// // import '../../scss/body/bodySewing.scss';
// import '../../scss/body/bodySewing.scss'


// interface Props{}

// const BodySewingH: React.FC<Props> = () => {
//     const [letters, setLetters] = useState<string>('');
//     const fullText = 'Почему выбирают индивидуальный пошив?';
//     const elementRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//             const[entry] = entries;
//             if (entry.isIntersecting) {
//                 let currentIndex = 0;

//                 const addLetter = () => {
//                     setLetters(fullText.substring(0, currentIndex + 1))
//                     currentIndex += 1;
//                     if( currentIndex < fullText.length) {
//                         setTimeout(addLetter, 30);
//                     }
//                 }

//                 addLetter()
//             }
//         };

//         const observer = new IntersectionObserver(handleIntersection, {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5,
//         })

//         if(elementRef.current) {
//             observer.observe(elementRef.current)
//         }

//         return() => {
//             if (elementRef.current) {
//                 observer.unobserve(elementRef.current)
//             }
//         };
//     }, [fullText]);


//     return(
//         <div className="BodySewingHDiv" ref={elementRef}>
//             <h1 className="BodySewingH fontRegular">
//                 {letters.split('').map((letter, index) =>(
//                     <span 
//                         key={index}
//                         className={letter === '' ? 'space' : 'letter'}
//                         style={{animationDelay: `${index * 0.040}s`}}
//                     >
//                         {letter === '' ? '\u00A0' : letter}
//                     </span>
//                 ))}
//             </h1>
//         </div>
//     )
// }

// export default BodySewingH;



// +++++++++++++++++++++++++++

// import React, {useEffect, useRef, useState} from "react";
// import '../../scss/body/bodySewing.scss';

// interface Props{}

// const BodySewingH: React.FC<Props> = () => {
//     const [letters, setLetters] = useState<string>('');
//     const fullText = 'Почему выбирают индивидуальный пошив?';
//     const elementRef = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//         const handleIntersection = (entries: IntersectionObserverEntry[]) => {
//             const [entry] = entries;
//             if (entry.isIntersecting) {
//                 let currentIndex = 0;

//                 const addLetter = () => {
//                     setLetters(fullText.substring(0, currentIndex + 1));
//                     currentIndex += 1;
//                     if (currentIndex < fullText.length) {
//                         setTimeout(addLetter, 30);
//                     }
//                 };

//                 addLetter();
//             }
//         };

//         const observer = new IntersectionObserver(handleIntersection, {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.5,
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
//         <div className="BodySewingHDiv" ref={elementRef}>
//             <h1 className="BodySewingH fontRegular">
//                 {letters.split('').map((letter, index) => (
//                     <span 
//                         key={index}
//                         className={letter === ' ' ? 'space' : 'letter'}
//                         style={{animationDelay: `${index * 0.040}s`}}
//                     >
//                         {letter === ' ' ? '\u00A0' : letter}
//                     </span>
//                 ))}
//             </h1>
//         </div>
//     );
// };

// export default BodySewingH;



import React, { useEffect, useRef, useState } from "react";

interface Props {}

const BodySewingH: React.FC<Props> = () => {
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
        <div className="BodySewingHDiv" ref={elementRef}>
            <h1 className="BodySewingH fontRegular">
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

export default BodySewingH;