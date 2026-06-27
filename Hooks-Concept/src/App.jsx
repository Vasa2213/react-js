import React from 'react'
import States from './components/states'
import StatesAdv from './components/StatesAdv'
import Formhandling from './components/Formhandling'

const App = () => {
  return (
    <div>
      <States/>
      <hr></hr>
      <StatesAdv/>
      <hr></hr>
      <h2>Form Handling</h2>
      <Formhandling/>
      </div>
      
  )
}

export default App