import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import Logout from "../Images/logout.png"

class SignOut extends Component {

  state = {
    signedOut: false
  }

  handleClick = () => {
    firebase.auth().signOut().then(data => {
      this.setState({ signedOut: true })
    }).catch(function(error) {
      console.log('error sign out')
    });
  }

  render() {

    if(this.state.signedOut) {
      return (
        <Redirect
          to={{
            pathname: '/signin',
          }}
        />
      )
    }

    return (
      <button onClick={this.handleClick} style={{border:"none" , background:"#fff", marginRight:"15px"}}>
        <img width={50} src={Logout}/>
      </button>
    )
  }
}

export default SignOut