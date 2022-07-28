import React from 'react'
import Feedbackitem from './Feedbackitem'

function Feedbacklist({feedback}) {
    if(!feedback || feedback.length ===0){
        return <p>No feedback yet.</p>
    }
  return <div className='feedback-list'>
  {feedback.map((item) =>(
   <Feedbackitem key ={item.id} item={item} />
  ))}
  </div>
}
      
export default Feedbacklist
