import React from 'react'

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm'
import FeedbackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'

import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
              <FeedbackForm/>
              <FeedbackStats />
              <FeedbackList />
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