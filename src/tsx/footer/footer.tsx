import React from "react";

// ---------------img-----------------
import policy from '../../img/footer/policy.svg';
import VK from '../../img/footer/VK.svg';
import Viber from '../../img/footer/Viber.svg';
import telegramm from '../../img/footer/telegramm.svg';
import watsApp from '../../img/footer/watsApp.svg';
import line from '../../img/body/LineEnd.svg';
// ----------------------------------


// -----------------scss--------------------
import '../../scss/footer/footer.scss'

import '../../scss_media/media_1024.scss';
import '../../scss_media/media_768.scss';
import '../../scss_media/media_425.scss';
import '../../scss_media/media_375.scss';
import '../../scss_media/media_320.scss';
// ---------------------------------------


function Footer() {
    return (
        <>
            <img src={line} alt="" />
            <div className="footer">
                <div className="footerPolicy">
                    <img src={policy} alt="" />
                    <p>2024. Все права защищены</p>
                </div>
                <p>8-987-112-57-14</p>
                <p>AA-AA@mail.ru</p>
                <p>г.Нижний Ногвород</p>
                <div>
                    <img className="footerMessage" src={telegramm} alt="" />
                    <img className="footerMessage" src={Viber} alt="" />
                    <img className="footerMessage" src={VK} alt="" />
                    <img className="footerMessage" src={watsApp} alt="" />
                </div>
            </div>
        </>
    )
}


export default Footer;