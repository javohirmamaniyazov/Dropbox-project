import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase/compat/app';
import { auth } from '../../store/actions/authAction';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    isVerified: false,
    uid: '',
    signup: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((data) => {
        const uid = data.user.uid;
        const d = {
          email: data.user.email,
          uid: data.user.uid,
        };
        this.props.authenticate(d);
        this.setState({
          isVerified: true,
          uid: uid,
        });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      });
  };

  render() {
    if (this.state.isVerified) {
      return (
        <Redirect
          to={{
            pathname: '/drive',
            state: {
              uid: this.state.uid,
            },
          }}
        />
      );
    }

    if (this.state.signup) {
      return <Redirect to={{ pathname: '/signup' }} />;
    }

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <Link className="navbar-brand d-flex align-items-center" style={{ marginLeft: "80px" }} to="/">
            <img
              src="data:image/png;base64,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"
              alt="Dropbox"
              width="45"
              height="45"
            />
            <span className="ml-4 font-weight-bold">Dropbox</span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <button className="button button-3 sign-btn btn btn-outline-primary ml-lg-3"
                  style={{ borderRadius: "30px" }}
                  onClick={() => this.setState({ signup: true })}>
                  Signup
                </button>


              </li>
            </ul>
          </div>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link mr-4" onClick={() => this.setState({ signup: true })}>Sign up</a>
              </li>
            </ul>
          </div> */}
        </nav>

        <div className='jumbotron d-flex align-items-center min-vh-100 p-0'
          style={{ backgroundColor: '#f8f9fa' }}>
          <div className='container py-5'>
            <form className='mx-auto p-3 bg-white rounded'
              style={{ maxWidth: '400px', borderRadius: '20px', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.2)' }}
              onSubmit={this.handleSubmit}>
              <div className='pb-2'>
                <h2 className='text-center display-5 font-weight-bold' style={{ fontSize: "35px" }}>Login</h2>
              </div>
              <div className='form-group mt-3'>
                <div className='form-floating'>
                  <input
                    type='text'
                    className='form-control bg-light border-0'
                    id='email'
                    style={{ width: '100%', height: '50px' }}
                    placeholder='Email'
                    onChange={(event) => this.setState({ email: event.target.value })} />
                  <label htmlFor='email' className='font-weight-bold'>Email</label>
                </div>
                <div className='form-floating mt-3'>
                  <input
                    type='password'
                    className='form-control mt-2 bg-light border-0'
                    id='password'
                    style={{ width: '100%', borderRadius: '10px', height: '50px', }}
                    placeholder='Password'
                    onChange={(event) => this.setState({ password: event.target.value })} />
                  <label htmlFor='password' className=' font-weight-bold'>Password</label>
                </div>
              </div>
              <div className='text-center mt-3'>
                <button type='submit' className='w-100 btn btn-primary mb-2 btn-lg font-weight-bold'>
                  login
                </button>
              </div>
            </form>
            <div className='text-center mt-4'>
              <p>Don't have an account? <a href='#' className='ml-2' style={{textDecoration: "none"}} onClick={() => this.setState({ signup: true })}>Sign up</a></p>
            </div>

          </div>
        </div>




      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (data) => dispatch(auth(data)),
  };
};

export default connect(null, mapDispatchToProps)(SignIn);