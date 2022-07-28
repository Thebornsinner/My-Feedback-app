import React from "react"
import { useState } from "react"
import Header from "./components/Header"
import { v4 as uuidv4 } from "uuid"
import Feedbacklist from "./components/Feedbacklist"
import Feedbackdata from './data/Feedbackdata'
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App(){
    const [feedback, setFeedback ]= useState(Feedbackdata)

    const addFeedback=(newFeedback)=> {
        newFeedback.id = uuidv4()
       setFeedback([newFeedback, ...feedback])
    }
    return ( 
        <>
        <Header  />
        <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
       <FeedbackStats feedback= {feedback} />
    <Feedbacklist feedback={feedback} />
    </div>
    </>
    ) 
    }
export default App