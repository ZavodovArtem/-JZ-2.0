import React, { useState } from "react";

// -----------scss-----------------
import '../../scss/body/bodyMoney.scss'

import '../../scss_media/media_1024.scss';
import '../../scss_media/media_768.scss';
import '../../scss_media/media_425.scss';
import '../../scss_media/media_375.scss';
import '../../scss_media/media_320.scss';
// -----------------------------

// ----------img------------------
import LineMoney from '../../img/body/LineMoney.svg'
// --------------------------------


const BodyMoneyTranformLeft: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
        >
            {isHovered ? (
                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Ваш текст</span>
            ) : (
                <img className="bodyMoneyMiddle" src={LineMoney} alt="Линия" />
            )}
        </div>
    )
}






function BodyMoney () {
    return(
        <div className="bodyMoney">
            {/* <BodyMoneyTranformLeft /> */}
            <p className="bodyMoneyLeft fontRegular">Индивидуальный пошив — это эксклюзив, который позволит вам выглядеть безупречно. 
                Больше никаких компромиссов между тем, что вам нравится, и тем, что подходит. 
                Теперь вы можете получить идеальную посадку, уникальный дизайн и высочайшее качество пошива.</p>
            <img className="bodyMoneyMiddle" src={LineMoney} alt="" />
            <p className="bodyMoneyRight fontRegular">Высокая стоимость индивидуального пошива складывается из множества факторов. 
                Во-первых, работа портного — это полноценная профессия, которой люди обучаются много лет. 
                Мастерство приходит с опытом, поэтому услуги профессионала не могут стоить дёшево. 
                Во-вторых, в процессе создания одежды используются качественные ткани и фурнитура, которые также влияют на итоговую цену. 
                В-третьих, каждое изделие, созданное по индивидуальным меркам, уникально и существует в единственном экземпляре, что само по себе повышает его ценность.</p>
        </div>
    )
}

export default BodyMoney;