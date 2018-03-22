import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import UserProfile from './components/UserProfile.js'
import DebitsList from './components/DebitsList.js'
import CreditsList from './components/CreditsList.js';

class App extends Component {
  render() {

    const accountBalance = 14568.27

    const currentUser = {
      userName: 'bob_loblaw',
      memberSince: '08/23/99',
    }

    const HomeComponent = () => (<Home accountBalance={accountBalance} />)
    const UserProfileComponent = () => (<UserProfile {...currentUser} />)

    return (
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent} />
            <Route exact path="/profile" render={UserProfileComponent} />
            <Route exact path="/credits" component={CreditsList} />
            <Route exact path="/debits" component={DebitsList} />
          </Switch>
        </Router>
    )
  }
}

export default App