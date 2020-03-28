import React, { Component } from 'react'
import MyBio from './components/mybio'
// import { j1 } from './utils2'
import { j1 } from './utils'

export default class App extends Component {
 
  render() {
    return (
      <div>
           <div className="App">
     <MyBio/>
    </div>
      </div>
    )
  }
}

