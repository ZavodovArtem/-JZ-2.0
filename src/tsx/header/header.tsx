// import React from "react";


// // ----------------IMG-------------------------
// import logo from '../../img/header/logo.svg';
// import needle from '../../img/header/needle.svg';
// import rectangle from '../../img/header/rectangle.svg';
// import JZ from '../../img/header/JZ.svg'
// // --------------------------------------------



// // ------------------scss--------------------------
// import '../../scss/header/header.scss'
// import '../../scss_media/media_1024.scss';
// import '../../scss_media/media_768.scss';
// import '../../scss_media/media_425.scss';
// import '../../scss_media/media_375.scss';
// import '../../scss_media/media_320.scss';
// // ---------------------------------------------------


// // --------------------Components---------------------------------
// import Hamburger from '../../tsx/header/hamburger'
// import TextAnimationJZ from "./headerTextJZ";
// import TextAnimationIP from "./headerTextIP";
// import { Link } from "react-router-dom";

// // ---------------------------------------------------------------


// function Header() {

//     return(
//         <>
//             <div className="header">
//                 <div className="headerOneBlock">
//                     <img className="headerOneBlockLogo" src={logo} alt="" />
//                     <div className="headerText">
//                         <img className="headerTextNeedle" src={needle} alt="" />
//                         {/* <p className="headerTextT fontMedium">Пошив на заказ</p> */}
//                         <a className="headerTextT fontMedium" href="#">Пошив на заказ</a>
                        
//                         {/* <p className="headerTextT fontMedium">Цены</p> */}
//                         <a className="headerTextT fontMedium" href="#">Цены</a>
//                         {/* <p className="headerTextT fontMedium">Философия</p> */}
//                         <a className="headerTextT fontMedium" href="#">Философия</a>
//                     </div>
//                     <Hamburger />
//                 </div>
//                 <div className="headerTwoBlock">
//                     {/* <p className="headerTwoBlockWhite">Индивидуальный Пошив</p> */}
//                     {/* <p className="headerTwoBlockBlack">Юлия Заводова</p> */}
//                     <TextAnimationIP text='Индивидуальный Пошив' duration={3000}  />
//                     <TextAnimationJZ text="Заводова Юлия" duration={3000} />
//                     <img className="headerTwoBlockBack" src={rectangle} alt="" />
//                     <img className="headerTwoBlockJZ" src={JZ} alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Header;


import React from "react";

// ----------------IMG-------------------------
import logo from '../../img/header/logo.svg';
import needle from '../../img/header/needle.svg';
import rectangle from '../../img/header/rectangle.svg';
import JZ from '../../img/header/JZ.svg';
import logogif from '../../img/header/logo.gif';
// --------------------------------------------

// ------------------scss--------------------------
import '../../scss/header/header.scss';
import '../../scss_media/media_1024.scss';
import '../../scss_media/media_768.scss';
import '../../scss_media/media_425.scss';
import '../../scss_media/media_375.scss';
import '../../scss_media/media_320.scss';
// ---------------------------------------------------

// --------------------Components---------------------------------
import Hamburger from '../../tsx/header/hamburger';
import TextAnimationJZ from "./headerTextJZ";
import TextAnimationIP from "./headerTextIP";
// ---------------------------------------------------------------

interface HeaderProps {
  onScrollToSewing: () => void;
  onScrollToPhilosophy: () => void;
  onScrollToStep: () => void;
  onScrollToMoney: () => void;
  onScrollToForm: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onScrollToSewing,
  onScrollToPhilosophy,
  onScrollToStep,
  onScrollToMoney,
  onScrollToForm,
}) => {
  return (
    <>
      <div className="header">
        <div className="headerOneBlock">
          {/* <img className="headerOneBlockLogo" src={logo} alt="" /> */}
          <img className="headerOneBlockLogo" src={logogif} alt="" />
          <div className="headerText">
            <img className="headerTextNeedle" src={needle} alt="" />
            <a className="headerTextT fontMedium" onClick={onScrollToSewing}>Пошив на заказ</a>
            <a className="headerTextT fontMedium" onClick={onScrollToMoney}>Цены</a>
            <a className="headerTextT fontMedium" onClick={onScrollToPhilosophy}>Философия</a>
          </div>
          <Hamburger />
        </div>
        <div className="headerTwoBlock">
          <TextAnimationIP text='Индивидуальный Пошив' duration={3000} />
          <TextAnimationJZ text="Заводова Юлия" duration={3000} />
          <img className="headerTwoBlockBack" src={rectangle} alt="" />
          <img className="headerTwoBlockJZ" src={JZ} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
