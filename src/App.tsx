// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// // ------------------scss----------------------------
// import './App.css';
// // -----------------------------------------------

// // ----------------------tsx----------------------------
// import Header from './tsx/header/header';
// import BodySewing from './tsx/body/bodySewingComp/bodySewing'
// import BodyPhilosophy from './tsx/body/bodyPhilosophy';
// import BodyStep from './tsx/body/bodyStepComp/bodyStep';
// import BodyMoney from './tsx/body/bodyMoney';
// import BodyForm from './tsx/body/bodyForm';
// import Footer from './tsx/footer/footer';
// // -----------------------------------------------------


// // ----------------------img-----------------------------
// import logoLoad from './img/header/logo.svg'


// // ------------------------------------------------------


// const LoadingAnimation: React.FC = () => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//       const timer  = setTimeout(() => setLoading(false), 3000);
//       return () => clearTimeout(timer);
//     }, []);


// const containerClass = loading ? 'Appp' : 'App'; 



//   return (
//     <BrowserRouter>

//     <div className={containerClass}>
//     {loading ? (
//       <>
//         <p className='loa loaOne fontRegular'>Индивидуальный</p>
//         <p className='loa loaThree fontRegular'>пошив</p>
//         <img className='loadere' src={logoLoad} alt="" />
//         <p className='loa loaTwo fontRegular'>Юлия</p>
//         <p className='loa loaFour fontRegular'>Заводова</p>
//       </>
//     ) : (
//       <>
      
//         <Header />
//         <BodySewing />
//         <BodyPhilosophy />
//         <BodyStep />
//         <BodyMoney />
//         <BodyForm />
//         <Footer />
//       </>
//     )}

//   </div>
//   </BrowserRouter>

//   );
// }


// function App() {
//     return <LoadingAnimation />
// }

// export  default App;

// -------------------------------------2222222--------------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// // ------------------scss----------------------------
// import './App.css';
// // -----------------------------------------------

// // ----------------------tsx----------------------------
// import Header from './tsx/header/header';
// import BodySewing from './tsx/body/bodySewingComp/bodySewing';
// import BodyPhilosophy from './tsx/body/bodyPhilosophy';
// import BodyStep from './tsx/body/bodyStepComp/bodyStep';
// import BodyMoney from './tsx/body/bodyMoney';
// import BodyForm from './tsx/body/bodyForm';
// import Footer from './tsx/footer/footer';
// // -----------------------------------------------------


// // ----------------------img-----------------------------
// import logoLoad from './img/header/logo.svg';
// // ------------------------------------------------------


// const LoadingAnimation: React.FC = () => {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => setLoading(false), 3000);
//         return () => clearTimeout(timer);
//     }, []);

//     const containerClass = loading ? 'Appp' : 'App';

//     return (
//         <BrowserRouter>
//             <div className={containerClass}>
//                 {loading ? (
//                     <>
//                         <p className='loa loaOne fontRegular'>Индивидуальный</p>
//                         <p className='loa loaThree fontRegular'>пошив</p>
//                         <img className='loadere' src={logoLoad} alt="" />
//                         <p className='loa loaTwo fontRegular'>Юлия</p>
//                         <p className='loa loaFour fontRegular'>Заводова</p>
//                     </>
//                 ) : (
//                     <>
//                         <Header />
//                         <nav>
//                             <ul>
//                                 <li><Link to="/">Sewing</Link></li>
//                                 <li><Link to="/philosophy">Philosophy</Link></li>
//                                 <li><Link to="/step">Step</Link></li>
//                                 <li><Link to="/money">Money</Link></li>
//                                 <li><Link to="/form">Form</Link></li>
//                             </ul>
//                         </nav>
//                         <Routes>
//                             <Route path="/" element={<BodySewing />} />
//                             <Route path="/philosophy" element={<BodyPhilosophy />} />
//                             <Route path="/step" element={<BodyStep />} />
//                             <Route path="/money" element={<BodyMoney />} />
//                             <Route path="/form" element={<BodyForm />} />
//                         </Routes>
//                         <BodySewing />
//                         <BodyPhilosophy />
//                         <BodyStep />
//                         <BodyMoney />
//                         <BodyForm />

//                         <Footer />
//                     </>
//                 )}
//             </div>
//         </BrowserRouter>
//     );
// }

// function App() {
//     return <LoadingAnimation />;
// }

// export default App;


// --------------------------------------------УСПЕШНО без хедера------------------------------------------------------------------------------

// import React, { useEffect, useState, useRef } from 'react';
// import { BrowserRouter } from 'react-router-dom';

// // ------------------scss----------------------------
// import './App.css';
// // -----------------------------------------------

// // ----------------------tsx----------------------------
// import Header from './tsx/header/header';
// import BodySewing from './tsx/body/bodySewingComp/bodySewing';
// import BodyPhilosophy from './tsx/body/bodyPhilosophy';
// import BodyStep from './tsx/body/bodyStepComp/bodyStep';
// import BodyMoney from './tsx/body/bodyMoney';
// import BodyForm from './tsx/body/bodyForm';
// import Footer from './tsx/footer/footer';
// // -----------------------------------------------------

// // ----------------------img-----------------------------
// import logoLoad from './img/header/logo.svg';
// // ------------------------------------------------------

// const LoadingAnimation: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   const sewingRef = useRef<HTMLDivElement>(null);
//   const philosophyRef = useRef<HTMLDivElement>(null);
//   const stepRef = useRef<HTMLDivElement>(null);
//   const moneyRef = useRef<HTMLDivElement>(null);
//   const formRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const containerClass = loading ? 'Appp' : 'App';

//   return (
//     <BrowserRouter>
//       <div className={containerClass}>
//         {loading ? (
//           <>
//             <p className='loa loaOne fontRegular'>Индивидуальный</p>
//             <p className='loa loaThree fontRegular'>пошив</p>
//             <img className='loadere' src={logoLoad} alt="" />
//             <p className='loa loaTwo fontRegular'>Юлия</p>
//             <p className='loa loaFour fontRegular'>Заводова</p>
//           </>
//         ) : (
//           <>
//             <Header />
//             <nav>
//               <ul>
//                 <li><a onClick={() => scrollToSection(sewingRef)}>Sewing</a></li>
//                 <li><a onClick={() => scrollToSection(philosophyRef)}>Philosophy</a></li>
//                 <li><a onClick={() => scrollToSection(stepRef)}>Step</a></li>
//                 <li><a onClick={() => scrollToSection(moneyRef)}>Money</a></li>
//                 <li><a onClick={() => scrollToSection(formRef)}>Form</a></li>
//               </ul>
//             </nav>
//             <div ref={sewingRef}>
//               <BodySewing />
//             </div>
//             <div ref={philosophyRef}>
//               <BodyPhilosophy />
//             </div>
//             <div ref={stepRef}>
//               <BodyStep />
//             </div>
//             <div ref={moneyRef}>
//               <BodyMoney />
//             </div>
//             <div ref={formRef}>
//               <BodyForm />
//             </div>
//             <Footer />
//           </>
//         )}
//       </div>
//     </BrowserRouter>
//   );
// }

// function App() {
//   return <LoadingAnimation />;
// }

// export default App;



import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';

// ------------------scss----------------------------
import './App.css';
// -----------------------------------------------

// ----------------------tsx----------------------------
import Header from './tsx/header/header';
import BodySewing from './tsx/body/bodySewingComp/bodySewing';
import BodyPhilosophy from './tsx/body/bodyPhilosophy';
import BodyStep from './tsx/body/bodyStepComp/bodyStep';
import BodyMoney from './tsx/body/bodyMoney';
import BodyForm from './tsx/body/bodyForm';
import Footer from './tsx/footer/footer';
// -----------------------------------------------------

// ----------------------img-----------------------------
import logoLoad from './img/header/logo.svg';
// ------------------------------------------------------

const LoadingAnimation: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const sewingRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<HTMLDivElement>(null);
  const moneyRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerClass = loading ? 'Appp' : 'App';

  return (
    <BrowserRouter>
      <div className={containerClass}>
        {loading ? (
          <>
            <p className='loa loaOne fontRegular'>Индивидуальный</p>
            <p className='loa loaThree fontRegular'>пошив</p>
            <img className='loadere' src={logoLoad} alt="" />
            <p className='loa loaTwo fontRegular'>Юлия</p>
            <p className='loa loaFour fontRegular'>Заводова</p>
          </>
        ) : (
          <>
            <Header
              onScrollToSewing={() => scrollToSection(sewingRef)}
              onScrollToPhilosophy={() => scrollToSection(philosophyRef)}
              onScrollToStep={() => scrollToSection(stepRef)}
              onScrollToMoney={() => scrollToSection(moneyRef)}
              onScrollToForm={() => scrollToSection(formRef)}
            />
            <div ref={sewingRef}>
              <BodySewing />
            </div>
            <div ref={philosophyRef}>
              <BodyPhilosophy />
            </div>
            <div ref={stepRef}>
              <BodyStep />
            </div>
            <div ref={moneyRef}>
              <BodyMoney />
            </div>
            <div ref={formRef}>
              <BodyForm />
            </div>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

function App() {
  return <LoadingAnimation />;
}

export default App;
