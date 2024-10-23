import React from "react";

// ---------------scss------------------
import '../../../scss/body/bodyStep.scss'

import '../../../scss_media/media_1024.scss';
import '../../../scss_media/media_768.scss';
import '../../../scss_media/media_425.scss';
import '../../../scss_media/media_375.scss';
import '../../../scss_media/media_320.scss';
// ------------------------------------

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

// ------------------------------


import TypingText from "../bodyStepComp/bodyStepH";


import StepByStepComponent from "./bodyStepC";


function BodyStep () {
    return(
        <div className="BodyStep">
            <TypingText />
            {/* <div className="BodyStepUp">
                <img className="BodyStepUpOne" src={triangleOne} alt="" />
                <div className="BodyStepUpOneDiv">
                    <p className="fontRegular bodyStepSize">Консультация и снятие мерок</p>
                    <img src={LineOne} alt="" />
                </div>
                <img className="BodyStepUpTwo" src={triangleTwo} alt="" />
                <div className="BodyStepUpTwoDiv">
                    <img src={LineTwo} alt="" />
                    <p className="fontRegular bodyStepSize">Подбор ткани и фурнитуры</p>
                </div>
                <img className="BodyStepUpThree" src={triangleThree} alt="" />
                <div className="BodyStepUpThreeDiv">
                    <p className="fontRegular bodyStepSize">Создание эскиза модели</p>
                    <img src={LineThree} alt="" />
                </div>
                <img className="BodyStepUpFour" src={triangleFour} alt="" />
            </div>
            <div className="BodyStepMiddle">
                <p className="fontRegular bodyStepSize">Раскрой ткани</p>
                <img src={ballFive} alt="" />
                <p className="fontRegular bodyStepSize">Пошив изделия</p>
            </div>
            <div className="BodyStepDown">
                <div className="BodyStepDownOneDiv">
                    <p className="fontRegular bodyStepSize">Окончательная примерка <br />и сдача готового изделия</p>
                    <img src={LineEight} alt="" />
                </div>
                <img className="BodyStepDownOne" src={triangleEight} alt="" />
                <div className="BodyStepDownTwoDiv">
                    <img src={LineSeven} alt="" />
                    <p className="fontRegular bodyStepSize">Внесение корректировок</p>
                </div>
                <img className="BodyStepDownTwo" src={triangleSeven} alt="" />
                <div className="BodyStepDownThreeDiv">
                    <p className="fontRegular bodyStepSize">Примерка</p>
                    <img src={LineSix} alt="" />
                </div>
                <img className="BodyStepDownThree" src={triangleSix} alt="" />
            </div> */}
            <StepByStepComponent />
            <img src={LineEnd} alt="" />
        </div>
    )
}
export default BodyStep;