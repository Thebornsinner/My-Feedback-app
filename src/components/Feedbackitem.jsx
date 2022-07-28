import React from 'react'
import Card from './shared/Card'
function Feedbackitem({item}) {
 return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'>{item.text} </div>
        </Card>
  )
}

export default Feedbackitem