import React from 'react'

import './App.css'
import Topnav from './components/Topnav/Topnav'
import ElectionHome from './components/ElectionHome/ElectionHome'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About/About'
import Election from './components/Election/Election'


export default class App extends React.Component {

  componentDidMount = () => {
    fetch('/api/candidates')
      .then(response => {
        return response.json()
      })
      .then(candidates => {
        this.setState({ candidates })
      })
  }

  render = () => {
    return (
      <Router>
        <div className='App'>
          <Topnav />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/elections/:uuid' component={Election} />
            <ElectionHome />
          </Switch>
        </div>
      </Router>
    )
  }
}
