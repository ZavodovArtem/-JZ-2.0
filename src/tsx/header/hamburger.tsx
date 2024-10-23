import React, { useEffect, useState } from "react";

// -------------img------------------
import hamb from '../../img/header/gamburger.svg'
import tele from '../../img/footer/telegramm.svg'
import VK from '../../img/footer/VK.svg'
import wats from '../../img/footer/watsApp.svg'
import viber from '../../img/footer/Viber.svg'
// ----------------------------------

// --------------scss-------------------------
import '../../scss/AllBasicStyles.scss';
import { render } from "@testing-library/react";
import '../../scss/header/hamburger.scss'
// -------------------------------------------


const Hamburger: React.FC = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [animationEnd, setAnimationEnd] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }
    useEffect(() => {
        if (menuVisible) {
            setTimeout(() => {
                setAnimationEnd (true);
            }, 300)
        } else {
            setAnimationEnd (false)
        }
    }, [menuVisible]);

    const renderLetterWithDelay = (word: string, delay: number) => {
        return word.split('').map((letter, index) => (
            <span key={index} className="animated-letter" style={{animationDelay: `${index * delay}ms`}}> {letter}</span>
        ))
    }
    return(
        <div className="hamburgerMain" onClick={toggleMenu}>
            <img className={`image hamburger ${menuVisible ? 'pop' : ''} ${animationEnd ? 'rotated' : ''}`} src={hamb} alt="" />
            {menuVisible && (
                <div className="hamburgerMenu">
                    <ul className="hamburgerMenuUllll">
                        <li className="hamburgerMenuLi fontRegular">
                            {renderLetterWithDelay ('8-987-112-57-14', 50)}
                        </li>
                        <li className="hamburgerMenuLi fontRegular">
                            {renderLetterWithDelay ('AA-AA@m.ru', 50)}
                        </li>
                        <li className="hamburgerMenuLi fontRegular">
                            {renderLetterWithDelay ('г. Нижний Новгород', 50)}
                        </li>
                    </ul>
                    <ul className="hamburgerMenuUl">
                        <li className="hamburgerMenuLi"><a href="https://web.telegram.org/a/#-1001110905904"><img src={tele} alt="" /></a></li>
                        <li className="hamburgerMenuLi"><a href="#"><img src={viber} alt="" /></a></li>
                        <li className="hamburgerMenuLi"><a href="#"><img src={VK} alt="" /></a></li>
                        <li className="hamburgerMenuLi"><a href="#"><img src={wats} alt="" /></a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}   

export default Hamburger;