import Proptypes from'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import Cardd from "./shared/Cardd"
import {FaTimes, FaEdit} from 'react-icons/fa'

function Feedback({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  
  return (
   <Cardd >
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>deleteFeedback(item.id)}
         className='close'>
          <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)}
        className='edit' >
        <FaEdit color='purple' />
        </button>
            <div className="text-display">{item.text}</div>
            </Cardd>
    
  )
}
 
Feedback.propTypes={
  item: Proptypes.object.isRequired,
}
export default Feedback 