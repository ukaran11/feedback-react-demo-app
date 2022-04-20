import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
      if(window.confirm('Are you sure you want to delete?')) {
          setFeedback(feedback.filter((item) => item.id !== id))
      }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = +uuidv4();
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
              <AboutIconLink />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />}/>
            
        </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App