import React from "react"
import {HashRouter as Router, Route} from "react-router-dom"
import Home from "../routes/Home"
import Detail from "../routes/Detail"
function App() {
  return (
  <div>
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/:id" component={Detail}/>

    </Router>

  </div>
  
)}

export default App;
