import React, {useState} from "react";


// -----------img------------------------
import imgPhilosophy from '../../img/body/imgPhilosophy.png';
import lamp from '../../img/TEST-IMG/лампа 4к png 1.svg';
import returnBall from '../../img/TEST-IMG/ball-return.svg';
// ----------------------------------------

// ----------------scss-----------------------------
import '../../scss/body/bodyPhilosophy.scss'
import '../../scss_media/media_1024.scss';
import '../../scss_media/media_768.scss';
import '../../scss_media/media_425.scss';
import '../../scss_media/media_375.scss';
import '../../scss_media/media_320.scss';
// -----------------------------------------------



type LayerProps = {
    isVisible: boolean;
    toggleLayer: () => void;
    toggleLayerBackground: () => void;
};

const Layer1: React.FC<LayerProps> = ({ isVisible, toggleLayer, toggleLayerBackground}) => {
    const lampRef = React.createRef<HTMLImageElement>();


  const handleLampClick = () => {
    if (lampRef.current) {
      lampRef.current.animate(
        [
          { transform: 'translateY(0)' },
          { transform: 'translateY(30px)' },
          { transform: 'translateY(10px)' }
        ],
        {
          duration: 300,
          fill: 'forwards',
          easing: 'ease-in'
        }
      );
      setTimeout(() => {
        toggleLayer();
        toggleLayerBackground();
      }, 300);
    }
  };




    return isVisible ? (
    <>
    
    <div className="backkOne">
        <img ref={lampRef} className='backkOnelamp' src={lamp} alt="" onClick={handleLampClick} />
        <h2 className="backkOnePhilsophyH">sdfsdfsdfsdfsdfsdf</h2>
        <p className="backkOnePhilsophyP">sdfsdffffffffffffffffff</p>
    </div>
    
                    </>
     ) : null;
  };
  
  const Layer2: React.FC<LayerProps> = ({ isVisible, toggleLayer, toggleLayerBackground }) => {

    const handleReturnClick = () => {
      toggleLayer(); 
      toggleLayerBackground();
    };


    return isVisible ? 
    
    <>
    <div className="backkTwo">
      {/* Это второй слой контента */}
        {/* <img src={returnBall} alt="" className="returnLamp" onClick={handleReturnClick}/> */}
        
    </div>

    
    <div className="bodyPhilosophyH">
                        <h1 className="bodyPhilosophyH fontRegular">Индивидуальный пошив - философия красоты и комфорта</h1>
                    </div>
                    <div className="bodyPhilosophyMain">
                        <img src={imgPhilosophy} alt="" onClick={handleReturnClick}/>
                        <p className="bodyPhilosophyMainP fontRegular">
                            Философия индивидуального пошива основана на том, 
                            что каждый человек уникален и имеет свои особенности фигуры, 
                            цвета кожи, стиля и предпочтений. Поэтому одежда, 
                            которую мы носим, должна быть не только красивой, 
                            но и соответствовать нашим потребностям и желаниям.</p>
                    </div>
                    </>
    
    
    
    : null;
  };


function BodyPhilosophy () {

    const [currentLayer, setCurrentLayer] = useState<number>(1);
    const [isBackground, setIsBackground] = useState<boolean>(true);

        const toggleLayer = () => {
            setCurrentLayer((prevLayer) => (prevLayer === 1 ? 2 : 1));
        };

        const toggleLayerBackground = () => { 
          setIsBackground((prevColor) => !prevColor);
        }

    return(
        <>
        
            <div className="bodyPhilosophyBackground" style={{backgroundColor: isBackground ? 'black' : '#9E9782'}}> 
                <div className="bodyPhilosophy">                                            
                                <div>
                                {/* <button onClick={toggleLayer}>Переключить контент</button> */}

                                    <Layer1 isVisible={currentLayer === 1} toggleLayer={toggleLayer} toggleLayerBackground={toggleLayerBackground} />
                                    <Layer2 isVisible={currentLayer === 2} toggleLayer={toggleLayer} toggleLayerBackground={toggleLayerBackground} />
                                </div>
    
                </div>
            </div>
        </>
    )
}

export default BodyPhilosophy;