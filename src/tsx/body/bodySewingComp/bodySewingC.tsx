import React, { useEffect, useRef, useState } from "react";

// ------------------------img-----------------------------
import dressOne from '../../../img/body/dressOne.svg'
import dressTwo from '../../../img/body/dressTwo.svg'
import dressThree from '../../../img/body/dressThree.svg'
import dressFour from '../../../img/body/dressFour.svg'
import dressFive from '../../../img/body/dressFive.svg'
import dressSix from '../../../img/body/dressSix.svg'
import dressSeven from '../../../img/body/dressSeven.svg'
import dressEight from '../../../img/body/dressEight.svg'
// -----------------------------------------------------------

// -------------------------scss----------------------------
// import '../../../scss/body/bodySewing.scss';
import '../../../scss_media/media_1024.scss';
import '../../../scss_media/media_768.scss';
import '../../../scss_media/media_425.scss';
import '../../../scss_media/media_375.scss';
import '../../../scss_media/media_320.scss';

import '../../../scss/body/bodySewingC.scss';
// ---------------------------------------------------------------


const BodySewingC: React.FC = () => {
    const [currentSewing, setCurrentSewing] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() =>{
            setCurrentSewing((prevSewing) => prevSewing + 1);
        }, 400);

        return() => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentSewing(0);
                }
            })
        };
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (containerRef.current){
            observer.observe(containerRef.current);
        } 
    
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }

    }, []);

    return(
        
        
            <div className="BodySewingGrid" ref={containerRef}>
                <div className="BodySewingGridUp">
                    <div className={`StepItem ${currentSewing >= 1 ? 'visible' : ''}`}>
                        <img className="BodySewingGridImg" src={dressOne} alt="" />
                    </div>
                    <div className={`StepItem ${currentSewing >= 4 ? 'visible' : ''}`}>
                        <p className="BodySewingGridP">Идеальная посадка</p>
                    </div>
                    <div className={`StepItem ${currentSewing >= 6 ? 'visible' : ''}`}>
                        <img className="BodySewingGridImg" src={dressTwo} alt="" />
                    </div>
                    <div className={`StepItem ${currentSewing >= 2 ? 'visible' : ''}`}>
                        <p className="BodySewingGridP">Возможность выбора ткани</p>
                    </div>
                    <div className={`StepItem ${currentSewing >= 3 ? 'visible' : ''}`}>
                        <img className="BodySewingGridImg" src={dressThree} alt="" />
                    </div>
                    <div className={`StepItem ${currentSewing >= 7 ? 'visible' : ''}`}>
                        <p className="BodySewingGridP">Уникальность дизайна</p>
                    </div>
                    <div className={`StepItem ${currentSewing >= 5 ? 'visible' : ''}`}>
                        <img className="BodySewingGridImg" src={dressFour} alt="" />
                    </div>
                    <div className={`StepItem ${currentSewing >= 4 ? 'visible' : ''}`}>
                        <p className="BodySewingGridP">Высокое качество пошива</p>
                    </div>
                </div>
                <div className="BodySewingGridDown">
                    <div className={`StepItem ${currentSewing >= 8 ? 'visible' : ''}`}>
                        <img className="BodySewingGridImg" src={dressFive} alt="" />
                    </div>
                    <div className={`StepItem ${currentSewing >= 10 ? 'visible' : ''}`}>
                        <p className="BodySewingGridP">Возможность примерки изделия на разных этапах работы</p>
                    </div>
                    <div className={`StepItem ${currentSewing >= 7 ? 'visible' : ''}`}>
                        <img className="BodySewingGridImg" src={dressSix} alt="" />
                    </div>
                    <div className={`StepItem ${currentSewing >= 5 ? 'visible' : ''}`}>
                        <p className="BodySewingGridP">Персональный подход к каждому клиенту</p>
                    </div>
                    <div className={`StepItem ${currentSewing >= 4 ? 'visible' : ''}`}>
                        <img className="BodySewingGridImg" src={dressSeven} alt="" /> 
                    </div>
                    <div className={`StepItem ${currentSewing >= 6 ? 'visible' : ''}`}>
                        <p className="BodySewingGridP">Возможность выбрать модель из каталога или придумать собственную</p> 
                    </div>
                    <div className={`StepItem ${currentSewing >= 11 ? 'visible' : ''}`}>
                        <img className="BodySewingGridImg" src={dressEight} alt="" />
                    </div>
                    <div className={`StepItem ${currentSewing >= 9 ? 'visible' : ''}`}>
                        <p className="BodySewingGridP">Возможность получить консультацию специалиста по подбору фасона, цвета, фактуры ткани</p>
                    </div>
                </div>
            </div>
    )
}

export default BodySewingC;