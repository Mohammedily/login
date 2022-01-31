import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {  Welcome, MentorData, StudentData, Mentor, Student } from './Pages'
const App = () => {
    return (
        <div className="App">
            <Router>
                 {/* <Route exact path="/login"  component={Login}/>
                <Route path="/register"  component={Register}/> */}
                <Route  path="/welcome" component={Welcome}/> 
                <Route  path="/mentor" component={MentorData}/> 
                <Route  path="/student" component={StudentData}/> 
                <Route  path="/mentordata" component={Mentor}/> 
                <Route  path="/studentdata" component={Student}/> 
            </Router>
          
        </div>
    )
}

export default App