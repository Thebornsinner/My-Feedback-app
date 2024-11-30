
import Header from "./components/Header"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList"
import Feedbackform from "./components/Feedbackform"
import Feedbackstats from "./components/Feedbackstats"
import Aboutlink from './components/Aboutlink'
import Aboutpage from './components/pages/Aboutpage'
import { FeedbackProvider } from './Context/FeedbackContext'


function App(){
    
    
   
    return (
        <FeedbackProvider>
        <Router> 
            <Header/>
             <div className="container">
             <Routes> 
                <Route exact path="/" element={ <> <Feedbackform  />
              <Feedbackstats  /> 
              <FeedbackList   />
               </>   } />
                <Route path="/about" element={<Aboutpage />} /> 
                </Routes> 
                <Aboutlink /> 
                </div> 
                </Router>
                </FeedbackProvider> 
    )
}
export default App