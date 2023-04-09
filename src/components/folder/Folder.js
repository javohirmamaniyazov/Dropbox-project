import React, { Component } from 'react'
import { connect } from 'react-redux'
import folder from '../Images/pngegg.png'

class Folder extends Component {
  state = {
    f: this.props.folder,
    source: this.props.source,
  }

  handleOpenFolder = (e) => {
    e.preventDefault()
    this.props.openFolder(e, this.state.f.id, false)
  }

  render() {

    return (
      <div id={this.props.folder.name} className="d-flex flex-column p-5">
        <img onClick={this.handleOpenFolder} src={folder} width={120}/>
        <span className="text-center pt-1">{this.props.folder.name}</span>
        {this.props.rem.request ? (
          <button type="button" className="btn btn-outline-primary pt-1">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        ) : <button type="button" className="btn btn-outline-primary" onClick={e => this.props.remove(e)}>Remove</button>}
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    rem: state.remove
  }
}

export default connect(mapStateToProps)(Folder)