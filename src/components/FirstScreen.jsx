import { React, useState, useRef } from "react";
import "../css/FirstScreen.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const FirstScreen = () => {
   const [show, setShow] = useState(false);
   const nodeRef = useRef(null);
   return (
      <>
         <div className="main-bg relative">


            <div className={`main-bg-img w-full h-screen flex flex-col items-center justify-center ${show ? 'moveit' : ''} `}>
               <img height="52" width="160" className="mb-6" src="/src/img/Group 1@2x.png" alt="" />

               <CSSTransition
                  in={show}
                  timeout={3000}
                  classNames="alert"
                  unmountOnExit
               >
                  <div className="z-10 flex flex-col items-center">
                     <h1 className="text-6xl font-bold text-white mb-8">All your finances in one place.</h1>
                     <p className="text-center text-gray-400 mb-8">
                        Find out how our team of highly qualified financial consultants can help you achieve your financial goals.
                     </p>

                     <button className="text-white rounded-md px-4 py-2 w-40 border-gray-400 border">View Dashboard</button>

                  </div>
               </CSSTransition>


               {show == false && (

                  <a onClick={() => setShow(true)} href="#" className="absolute bottom-10 z-10">
                     <img height="20" width="20" src="/src/img/arrow-down-24@2x.png" alt="" />
                  </a>
               )}
            </div>
            {/* <div className="main-bg-gradient"></div> */}
         </div>
      </>
   );
};

export default FirstScreen;
