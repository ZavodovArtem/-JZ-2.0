// import React, { useEffect, useState } from 'react';
import './StepByStepComponent.css'; // Подключаем файл со стилями
// import '../../../tsx/body/bodyStepComp/StepByStepComponent.css'
// import '../../../scss/body/bodyStepComponent.css'



// -------------img--------------
import triangleOne from '../../../img/body/triangleOne.svg';
import triangleTwo from '../../../img/body/triangleTwo.svg';
import triangleThree from '../../../img/body/triangleThree.svg';
import triangleFour from '../../../img/body/triangleFour.svg';
import ballFive from '../../../img/body/ballFive.svg'
import triangleSix from '../../../img/body/triangleSix.svg';
import triangleSeven from '../../../img/body/triangleSeven.svg';
import triangleEight from '../../../img/body/triangleEight.svg';

import LineEnd from '../../../img/body/LineEnd.svg'

import LineOne from '../../../img/body/LineOne.svg';
import LineTwo from '../../../img/body/LineTwo.svg';
import LineThree from '../../../img/body/LineThree.svg';
import LineFour from '../../../img/body/LineFour.svg';
import LineFive from '../../../img/body/LineFive.svg';
import LineSix from '../../../img/body/LineSix.svg';
import LineSeven from '../../../img/body/LineSeven.svg';
import LineEight from '../../../img/body/LineEight.svg';

// // ------------------------------

// const StepByStepComponent: React.FC = () => {
//     const [currentStep, setCurrentStep] = useState<number>(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentStep((prevStep) => prevStep + 1);
//         }, 1000); // Интервал в миллисекундах между появлением элементов

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="StepByStepContainer">
//             <div className={`StepItem ${currentStep >= 0 ? 'visible' : ''}`}>
//                 <img className="BodyStepUpOne" src={triangleOne} alt="" />
//                 <div className="BodyStepUpOneDiv">
//                     <p className="fontRegular bodyStepSize">Консультация и снятие мерок</p>
//                     <img src={LineOne} alt="" />
//                 </div>
//             </div>
//             <div className={`StepItem ${currentStep >= 1 ? 'visible' : ''}`}>
//                 <img className="BodyStepUpTwo" src={triangleTwo} alt="" />
//                 <div className="BodyStepUpTwoDiv">
//                     <img src={LineTwo} alt="" />
//                     <p className="fontRegular bodyStepSize">Подбор ткани и фурнитуры</p>
//                 </div>
//             </div>
//             <div className={`StepItem ${currentStep >= 2 ? 'visible' : ''}`}>
//                 <img className="BodyStepUpThree" src={triangleThree} alt="" />
//                 <div className="BodyStepUpThreeDiv">
//                     <p className="fontRegular bodyStepSize">Создание эскиза модели</p>
//                     <img src={LineThree} alt="" />
//                 </div>
//             </div>
//             <div className={`StepItem ${currentStep >= 3 ? 'visible' : ''}`}>
//                 <img className="BodyStepUpFour" src={triangleFour} alt="" />
//             </div>
//             <div className={`StepItem ${currentStep >= 4 ? 'visible' : ''}`}>
//                 <div className="BodyStepMiddle">
//                     <p className="fontRegular bodyStepSize">Раскрой ткани</p>
//                     <img src={ballFive} alt="" />
//                     <p className="fontRegular bodyStepSize">Пошив изделия</p>
//                 </div>
//             </div>
//             <div className={`StepItem ${currentStep >= 5 ? 'visible' : ''}`}>
//                 <div className="BodyStepDownOneDiv">
//                     <p className="fontRegular bodyStepSize">Окончательная примерка <br />и сдача готового изделия</p>
//                     <img src={LineEight} alt="" />
//                 </div>
//                 <img className="BodyStepDownOne" src={triangleEight} alt="" />
//             </div>
//             <div className={`StepItem ${currentStep >= 6 ? 'visible' : ''}`}>
//                 <div className="BodyStepDownTwoDiv">
//                     <img src={LineSeven} alt="" />
//                     <p className="fontRegular bodyStepSize">Внесение корректировок</p>
//                 </div>
//                 <img className="BodyStepDownTwo" src={triangleSeven} alt="" />
//             </div>
//             <div className={`StepItem ${currentStep >= 7 ? 'visible' : ''}`}>
//                 <div className="BodyStepDownThreeDiv">
//                     <p className="fontRegular bodyStepSize">Примерка</p>
//                     <img src={LineSix} alt="" />
//                 </div>
//                 <img className="BodyStepDownThree" src={triangleSix} alt="" />
//             </div>
//         </div>
//     );
// };

// export default StepByStepComponent;




// import React, { useEffect, useRef, useState } from 'react';
// import './StepByStepComponent.css'; // Подключаем файл со стилями

// interface Step {
//     key: number;
//     component: React.ReactNode;
// }

// const StepByStepComponent: React.FC = () => {
//     const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
//     const stepsRef = useRef<Array<HTMLDivElement | null>>([]);

//     useEffect(() => {
//         const observerOptions = {
//             root: null,
//             rootMargin: '0px',
//             threshold: 0.8, // Порог видимости элемента
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     const stepIndex = parseInt((entry.target as HTMLDivElement).dataset.step || '0', 10);
//                     setVisibleSteps((prevVisibleSteps) => {
//                         if (!prevVisibleSteps.includes(stepIndex)) {
//                             return [...prevVisibleSteps, stepIndex].sort((a, b) => a - b);
//                         }
//                         return prevVisibleSteps;
//                     });
//                     observer.unobserve(entry.target); // Остановить наблюдение за элементом после его появления
//                 }
//             });
//         }, observerOptions);

//         stepsRef.current.forEach((stepRef) => {
//             if (stepRef) {
//                 observer.observe(stepRef);
//             }
//         });

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     const steps: Step[] = [
//         { key: 1, component: (
//             <>
//                 <img className="BodyStepUpOne" src={triangleOne} alt="" />
//                 <div className="BodyStepUpOneDiv">
//                     <p className="fontRegular bodyStepSize">Консультация и снятие мерок</p>
//                     <img src={LineOne} alt="" />
//                 </div>
//             </>
//         ) },
//         { key: 2, component: (
//             <>
//                 <img className="BodyStepUpTwo" src={triangleTwo} alt="" />
//                 <div className="BodyStepUpTwoDiv">
//                     <img src={LineTwo} alt="" />
//                     <p className="fontRegular bodyStepSize">Подбор ткани и фурнитуры</p>
//                 </div>
//             </>
//         ) },
//         { key: 3, component: (
//             <>
//                 <img className="BodyStepUpThree" src={triangleThree} alt="" />
//                 <div className="BodyStepUpThreeDiv">
//                     <p className="fontRegular bodyStepSize">Создание эскиза модели</p>
//                     <img src={LineThree} alt="" />
//                 </div>
//             </>
//         ) },
//         { key: 4, component: (
//             <img className="BodyStepUpFour" src={triangleFour} alt="" />
//         ) },
//         { key: 5, component: (
//             <div className="BodyStepMiddle">
//                 <p className="fontRegular bodyStepSize">Раскрой ткани</p>
//                 <img src={ballFive} alt="" />
//                 <p className="fontRegular bodyStepSize">Пошив изделия</p>
//             </div>
//         ) },
//         { key: 6, component: (
//             <>
//                 <div className="BodyStepDownOneDiv">
//                     <p className="fontRegular bodyStepSize">Окончательная примерка <br />и сдача готового изделия</p>
//                     <img src={LineEight} alt="" />
//                 </div>
//                 <img className="BodyStepDownOne" src={triangleEight} alt="" />
//             </>
//         ) },
//         { key: 7, component: (
//             <>
//                 <div className="BodyStepDownTwoDiv">
//                     <img src={LineSeven} alt="" />
//                     <p className="fontRegular bodyStepSize">Внесение корректировок</p>
//                 </div>
//                 <img className="BodyStepDownTwo" src={triangleSeven} alt="" />
//             </>
//         ) },
//         { key: 8, component: (
//             <>
//                 <div className="BodyStepDownThreeDiv">
//                     <p className="fontRegular bodyStepSize">Примерка</p>
//                     <img src={LineSix} alt="" />
//                 </div>
//                 <img className="BodyStepDownThree" src={triangleSix} alt="" />
//             </>
//         ) },
//     ];

//     return (
//         <>
//             <div className="BodyStepUp">
//                 {steps.slice(0, 4).map((step, index) => (
//                     <div
//                         key={step.key}
//                         ref={(el) => stepsRef.current[index] = el}
//                         data-step={step.key}
//                         className={`StepItem ${visibleSteps.includes(step.key) ? 'visible' : ''}`}
//                     >
//                         {step.component}
//                     </div>
//                 ))}
//             </div>
//             <div className="BodyStepMiddle">
//                 {steps.slice(4, 5).map((step, index) => (
//                     <div
//                         key={step.key}
//                         ref={(el) => stepsRef.current[index + 4] = el}
//                         data-step={step.key}
//                         className={`StepItem ${visibleSteps.includes(step.key) ? 'visible' : ''}`}
//                     >
//                         {step.component}
//                     </div>
//                 ))}
//             </div>
//             <div className="BodyStepDown">
//                 {steps.slice(5).map((step, index) => (
//                     <div
//                         key={step.key}
//                         ref={(el) => stepsRef.current[index + 5] = el}
//                         data-step={step.key}
//                         className={`StepItem ${visibleSteps.includes(step.key) ? 'visible' : ''}`}
//                     >
//                         {step.component}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default StepByStepComponent;




// import React, { useEffect, useState } from 'react';
// import triangleOne from 'path/to/triangleOne';
// import triangleTwo from 'path/to/triangleTwo';
// import triangleThree from 'path/to/triangleThree';
// import triangleFour from 'path/to/triangleFour';
// import LineOne from 'path/to/LineOne';
// import LineTwo from 'path/to/LineTwo';
// import LineThree from 'path/to/LineThree';
// import ballFive from 'path/to/ballFive';
// import LineEight from 'path/to/LineEight';
// import triangleEight from 'path/to/triangleEight';
// import LineSeven from 'path/to/LineSeven';
// import triangleSeven from 'path/to/triangleSeven';
// import LineSix from 'path/to/LineSix';
// import triangleSix from 'path/to/triangleSix';

// const StepByStepComponent: React.FC = () => {
//     const [currentStep, setCurrentStep] = useState<number>(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentStep((prevStep) => prevStep + 1);
//         }, 500); // Интервал в миллисекундах между появлением элементов

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         const handleScroll = () => {
//             setCurrentStep(0);
//         };

//         window.addEventListener('scroll', handleScroll);
        
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <div className="StepByStepContainer">
//             <div className={`StepItem ${currentStep >= 0 ? 'visible' : ''}`}>
//                 <img className="BodyStepUpOne" src={triangleOne} alt="" />
//                 <div className="BodyStepUpOneDiv">
//                     <p className="fontRegular bodyStepSize">Консультация и снятие мерок</p>
//                     <img src={LineOne} alt="" />
//                 </div>
//             </div>
//             <div className={`StepItem ${currentStep >= 1 ? 'visible' : ''}`}>
//                 <img className="BodyStepUpTwo" src={triangleTwo} alt="" />
//                 <div className="BodyStepUpTwoDiv">
//                     <img src={LineTwo} alt="" />
//                     <p className="fontRegular bodyStepSize">Подбор ткани и фурнитуры</p>
//                 </div>
//             </div>
//             <div className={`StepItem ${currentStep >= 2 ? 'visible' : ''}`}>
//                 <img className="BodyStepUpThree" src={triangleThree} alt="" />
//                 <div className="BodyStepUpThreeDiv">
//                     <p className="fontRegular bodyStepSize">Создание эскиза модели</p>
//                     <img src={LineThree} alt="" />
//                 </div>
//             </div>
//             <div className={`StepItem ${currentStep >= 3 ? 'visible' : ''}`}>
//                 <img className="BodyStepUpFour" src={triangleFour} alt="" />
//             </div>
//             <div className={`StepItem ${currentStep >= 4 ? 'visible' : ''}`}>
//                 <div className="BodyStepMiddle">
//                     <p className="fontRegular bodyStepSize">Раскрой ткани</p>
//                     <img src={ballFive} alt="" />
//                     <p className="fontRegular bodyStepSize">Пошив изделия</p>
//                 </div>
//             </div>
//             <div className={`StepItem ${currentStep >= 5 ? 'visible' : ''}`}>
//                 <div className="BodyStepDownOneDiv">
//                     <p className="fontRegular bodyStepSize">Окончательная примерка <br />и сдача готового изделия</p>
//                     <img src={LineEight} alt="" />
//                 </div>
//                 <img className="BodyStepDownOne" src={triangleEight} alt="" />
//             </div>
//             <div className={`StepItem ${currentStep >= 6 ? 'visible' : ''}`}>
//                 <div className="BodyStepDownTwoDiv">
//                     <img src={LineSeven} alt="" />
//                     <p className="fontRegular bodyStepSize">Внесение корректировок</p>
//                 </div>
//                 <img className="BodyStepDownTwo" src={triangleSeven} alt="" />
//             </div>
//             <div className={`StepItem ${currentStep >= 7 ? 'visible' : ''}`}>
//                 <div className="BodyStepDownThreeDiv">
//                     <p className="fontRegular bodyStepSize">Примерка</p>
//                     <img src={LineSix} alt="" />
//                 </div>
//                 <img className="BodyStepDownThree" src={triangleSix} alt="" />
//             </div>
//         </div>
//     );
// };

// export default StepByStepComponent;




import React, { useEffect, useState, useRef } from 'react';
// import triangleOne from 'path/to/triangleOne';
// import triangleTwo from 'path/to/triangleTwo';
// import triangleThree from 'path/to/triangleThree';
// import triangleFour from 'path/to/triangleFour';
// import LineOne from 'path/to/LineOne';
// import LineTwo from 'path/to/LineTwo';
// import LineThree from 'path/to/LineThree';
// import ballFive from 'path/to/ballFive';
// import LineEight from 'path/to/LineEight';
// import triangleEight from 'path/to/triangleEight';
// import LineSeven from 'path/to/LineSeven';
// import triangleSeven from 'path/to/triangleSeven';
// import LineSix from 'path/to/LineSix';
// import triangleSix from 'path/to/triangleSix';

const StepByStepComponent: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prevStep) => prevStep + 1);
        }, 400); // Интервал в миллисекундах между появлением элементов

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentStep(0);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className="StepByStepContainer" ref={containerRef}>
            <div className="BodyStepUp">
                <div className={`StepItem ${currentStep >= 0 ? 'visible' : ''}`}>
                    <img className="BodyStepUpOne" src={triangleOne} alt="" />
                </div>
                <div className={`StepItem ${currentStep >= 1 ? 'visible' : ''}`}>
                    <div className="BodyStepUpOneDiv">
                        <p className="fontRegular bodyStepSize">Консультация и снятие мерок</p>
                        <img src={LineOne} alt="" />
                    </div>
                </div>
                <div className={`StepItem ${currentStep >= 2 ? 'visible' : ''}`}>
                    <img className="BodyStepUpTwo" src={triangleTwo} alt="" />
                </div>
                <div className={`StepItem ${currentStep >= 3 ? 'visible' : ''}`}>
                    <div className="BodyStepUpTwoDiv">
                        <img src={LineTwo} alt="" />
                        <p className="fontRegular bodyStepSize">Подбор ткани и фурнитуры</p>
                    </div>
                </div>
                <div className={`StepItem ${currentStep >= 4 ? 'visible' : ''}`}>
                    <img className="BodyStepUpThree" src={triangleThree} alt="" />
                </div>
                <div className={`StepItem ${currentStep >= 5 ? 'visible' : ''}`}>
                    <div className="BodyStepUpThreeDiv">
                        <p className="fontRegular bodyStepSize">Создание эскиза модели</p>
                        <img src={LineThree} alt="" />
                    </div>
                </div>
                <div className={`StepItem ${currentStep >= 6 ? 'visible' : ''}`}>
                    <img className="BodyStepUpFour" src={triangleFour} alt="" />
                </div>
            </div>
            {/* <div className="BodyStepMiddle"> */}
                <div className={`StepItem ${currentStep >= 7 ? 'visible' : ''}`}>
                    <div className="BodyStepMiddle">
                        <p className="fontRegular bodyStepSize">Раскрой ткани</p>
                        <img src={ballFive} alt="" />
                        <p className="fontRegular bodyStepSize">Пошив изделия</p>
                    </div>
                </div>
            {/* </div> */}
            <div className="BodyStepDown">
                <div className={`StepItem ${currentStep >= 13 ? 'visible' : ''}`}>
                    <div className="BodyStepDownOneDiv">
                        <p className="fontRegular bodyStepSize">Окончательная примерка <br />и сдача готового изделия</p>
                        <img src={LineEight} alt="" />
                    </div>
                </div>
                <div className={`StepItem ${currentStep >= 12 ? 'visible' : ''}`}>
                    <img className="BodyStepDownOne" src={triangleEight} alt="" />
                </div>
                <div className={`StepItem ${currentStep >= 11 ? 'visible' : ''}`}>
                    <div className="BodyStepDownTwoDiv">
                        <img src={LineSeven} alt="" />
                        <p className="fontRegular bodyStepSize">Внесение корректировок</p>
                    </div>
                </div>
                <div className={`StepItem ${currentStep >= 10 ? 'visible' : ''}`}>
                    <img className="BodyStepDownTwo" src={triangleSeven} alt="" />
                </div>
                <div className={`StepItem ${currentStep >= 9 ? 'visible' : ''}`}>
                    <div className="BodyStepDownThreeDiv">
                        <p className="fontRegular bodyStepSize">Примерка</p>
                        <img src={LineSix} alt="" />
                    </div>
                </div>
                <div className={`StepItem ${currentStep >= 8 ? 'visible' : ''}`}>
                    <img className="BodyStepDownThree" src={triangleSix} alt="" />
                </div>
            </div>
        </div>
    );
};

export default StepByStepComponent;
