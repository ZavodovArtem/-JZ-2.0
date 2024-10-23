import React from "react";

// ------------------------img-----------------------------
import dressOne from '../../img/body/dressOne.svg'
import dressTwo from '../../img/body/dressTwo.svg'
import dressThree from '../../img/body/dressThree.svg'
import dressFour from '../../img/body/dressFour.svg'
import dressFive from '../../img/body/dressFive.svg'
import dressSix from '../../img/body/dressSix.svg'
import dressSeven from '../../img/body/dressSeven.svg'
import dressEight from '../../img/body/dressEight.svg'
// -----------------------------------------------------------

// -------------------------scss----------------------------
// import '../../../scss/body/bodySewing.scss';
import '../../../scss_media/media_1024.scss';
import '../../../scss_media/media_768.scss';
import '../../../scss_media/media_425.scss';
import '../../../scss_media/media_375.scss';
import '../../../scss_media/media_320.scss';
import BodySewingC from "./bodySewingC";
import BodySewingH from "./bodySewingH";
// ---------------------------------------------------------------

function BodySewing () {
    return(
        <>
            <div className="BodySewingAll">
                {/* <h1 className="BodySewingH fontRegular">Почему выбирают индивидуальный пошив?</h1> */}
                <BodySewingH />
                <BodySewingC />
            </div>
        </>
    )
}

export default BodySewing