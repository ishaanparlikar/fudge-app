import {React} from 'react'
import Dashboard from './Dashboard'
import FirstScreen from './components/FirstScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useLocation } from 'react-router'
const App = () => {
   // const location = useLocation()
 
   return (
      <>
               <Routes>
                  <Route path="/" element={<FirstScreen />} />
                  <Route path="/dashboard" element={<Dashboard />} />
               </Routes>
{/* 
            <CSSTransition classNames="slide" timeout={2000}>
               <Dashboard/>
            </CSSTransition> */}
         

      </>
   )
}

export default App
