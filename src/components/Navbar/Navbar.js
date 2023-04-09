import React, { Component, } from 'react'
import "./style.css"

import SignOut from '../Auth/SignOut'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" style={{
          fontSize:"25px",
          fontWeight:"700",
          textTransform:"capitalize",
          marginLeft:"20px",
        }}><h2 style={{
          display:"flex",
          float:"left",
          justifyContent:"center",
          alignItems:"center",
        }}> 👤 </h2>{this.props.name}</a>
          <span align="center" className="font-weight-bold">
          <h3 class="time">
          <h2>{this.state.time.toLocaleTimeString()}</h2>
            </h3>
          </span>
          <SignOut />
        </nav>
      </div>
    )
  }
}

export default Navbar