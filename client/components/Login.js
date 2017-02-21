import React from 'react';
import { connect } from 'react-redux';
import { refreshLogin } from '../actions/auth';
import { setFlash, clearFlash } from '../actions/flash';
import { browserHistory, Link } from 'react-router';
import request from 'superagent';
require('superagent-rails-csrf')(request);

class Login extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.refs;
    let user = { user: {
        email: email.value, 
        password: password.value
      }
    }
    let req = request.post("/users/sign_in");
    req.setCsrfToken();
    req.send({...user});
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash(res.body.errors, 'error'));
      } else {
        this.props.dispatch(clearFlash());
        this.props.dispatch({ type: 'USER', user: res.body });
        browserHistory.push('/');
      }
    });
  }

  render() {
    return(
      <div>
        <h3 className="center">Login</h3>
        <form className="row" onSubmit={this.handleSubmit}>
          <div className="row">
            <input
              ref="email"
              type="email"
              autoFocus={true}
              className="col s12 m6 validate"
              required={true}
            />
            <input
              ref="password"
              type="password"
              className="validate active col s12 m6"
              required={true}
            />
          </div>
          <div className="center">
            <div style={{ paddingBottom: '50px' }}>
              <button id="login_button" className="btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
  }

}

export default connect()(Login);

