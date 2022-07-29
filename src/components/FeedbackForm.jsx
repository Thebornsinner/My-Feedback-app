import React from 'react'
import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [rating] = useState(10)
    const [btnDisabled, setbtnDisabled] = useState('')
    const [message, setMessage] = useState('')


const handleTextChange = (e) => {
    if(text=== ''){
        setbtnDisabled(true)
        setMessage(null)
    } else if(text !== '' && text.trim().length <= 10){
        setbtnDisabled(true)
        setMessage('Text must be at least 10 characters!')
    } else{
        setMessage(null)
        setbtnDisabled(false)
    }
    setText(e.target.value)
}
 
const handleSubmit = (e) => {
   e.preventDefault()
   if(text.trim ().length > 10){
    const newFeedback={
         text,
        rating,
    }
    handleAdd(newFeedback)

setText('')

   }
}


    return (
        
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?
          </h2>
               <RatingSelect />
                <div className="input-group">
                    <input onChange={handleTextChange}
                     type= "text"
                      placeholder='Write a review' 
                      value={text}
                      />

                    <Button type='submit' isDisabled={btnDisabled}>Send
                    </Button>
                </div>

                {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm
