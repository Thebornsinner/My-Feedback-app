import Feedback from "./Feedback"
import FeedbackContext from '../Context/FeedbackContext'
import { useContext } from "react"
 
function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)


    if (!feedback || feedback === 0){
        return <p>No Feedback yet...</p>

    }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <Feedback key={item.id} item={item}
            
/>
        ))}
    </div>
  )
}
export default FeedbackList