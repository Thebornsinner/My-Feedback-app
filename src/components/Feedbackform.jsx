import Cardd from "./shared/Cardd"
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import { useState } from "react"
import { useEffect } from "react"

function Feedbackform() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

useEffect(()=> {
if (feedbackEdit.edit === true){
    setbtnDisabled(false)
    setText(feedbackEdit.item.text)
setRating(feedbackEdit.item.rating)
}
}, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setbtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        } else {
            setMessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
     if(text.trim().length > 10) {
        const newFeedback ={
            text,
            rating,
        }

        if(feedbackEdit.edit === true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
        }else {
            addFeedback(newFeedback)
        }
       
        setText('')
     }  
    }

    return (
        <Cardd>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?.. be fr</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Cardd>
    )
    
}

export default Feedbackform;
