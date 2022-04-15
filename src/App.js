import React, { useState } from 'react'
import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
      <>
        <Header/>
        <div className='container'>
            <FeedbackItem />
        </div>
      </>
  )
}

export default App