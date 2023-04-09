import React, { Component } from 'react'
import files from "../Images/Files-High-Quality-PNG.png"
import { connect } from 'react-redux'

class File extends Component {
  state = {
    fileName: this.props.fileName,
    url: this.props.url,
    view: false
  }

  render() {

    return (
      <div className="d-flex flex-column p-5" id={this.state.fileName}>
        <a href={this.state.url} style={{ color: "inherit" }}>
          <div>
            <img src={files} width={120}/>
          </div>
          <p className="text-center">{this.props.fileName}</p>
        </a>

        <button id={this.state.url} type="button" className="btn" onClick={e => this.props.download(e)}>Download</button>

        {this.props.rem.request ? (
          <button type="button" className="btn btn-outline-primary">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        ) : (
            <button id={this.state.url} type="button" className="btn mt-2" onClick={e => this.props.remove(e)}>Remove</button>
          )}


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rem: state.remove
  }
}

export default connect(mapStateToProps)(File)