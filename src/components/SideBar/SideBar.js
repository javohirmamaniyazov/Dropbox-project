import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dowload from '../Images/vecteezy_download-button-clipart-design-illustration_9303129_352.png'
import Upload from '../Images/vecteezy_transparent-cloud-upload-icon_16016762_315.png'



import { uploadFile } from '../../store/actions/uploadAction'
import { createFolder } from '../../store/actions/createFolderAction'

class SideBar extends Component {
  state = {
    show: false
  }

  handleCreateFolder = (e) => {
    e.preventDefault()
    const { createFolder, source } = this.props
    const name = document.getElementById("folderName").value
    document.getElementById("folderName").value = ""
    if (name != '') {
      createFolder(name, source)
      document.getElementById("modalCloseButton").click()
    }
    else {
      console.log('Enter folder name to create a folder')
    }
  }

  render() {

    const { uploadFile, source } = this.props

    const handleUploadFile = (e) => {
      e.preventDefault()
      const f = document.getElementById('upload-file')
      uploadFile(f, source)
    }



    return (
      <div className="sidebar-sticky d-flex flex-column">
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">📁 Create Folder</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form className="form-inline">
                  <label for="folderName">Folder Name</label>
                  <input id="folderName" className="form-control ml-4" />
                </form>

              </div>
              <div class="modal-footer">
                <button id="modalCloseButton" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                {
                  this.props.createFolder.request ? (
                    <button type="button" className="btn btn-primary">
                      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    </button>
                  ) : (
                      <button type="button" class="btn btn-primary" onClick={this.handleCreateFolder}>Create</button>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="btn btn-outline-primary dropdown-item mt-4 text-center ml-3" data-toggle="modal" data-target="#exampleModal" style={{fontSize:"20px"}}>📁 Create Folder</button>
        <label className="pl-3 pt-3" htmlFor="upload-file">
          <img className='ml-3' src={Upload} width={120}/>
        </label>
        <input className="ml-3" style={{display: "none", backgroundColor: "#e2e6e9", width: "15em" }} type="file" name="photo" id="upload-file" />
          <button type="button" className="btn  btn-outline-primary dropdown-item text-center ml-3" onClick={handleUploadFile}>
          <img src={Dowload} width={120}/>
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadFile: (file, source) => dispatch(uploadFile(file, source)),
    createFolder: (f, uid) => dispatch(createFolder(f, uid))
  }
}

const mapStateToProps = (state) => {

  return {
    firestore: state.firestore.firestore,
    createFolder: state.createFolder
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)