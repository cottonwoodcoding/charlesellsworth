import React from 'react';
import { Link } from 'react-router';
import Flash from '../components/Flash';
import { setFlash } from '../actions/flash';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import request from 'superagent';
require('superagent-rails-csrf')(request);

class App extends React.Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
    $('#mailing-list').modal();
  }

  navs = () => {
    let { user: { role }, history, dispatch } = this.props
    return (
      <div>
        <li><Link className="grey-text text-darken-2" to="/">HOME</Link></li>
        <li><Link className="grey-text text-darken-2" to="/tour">TOUR</Link></li>
        <li><Link className="grey-text text-darken-2" to="/watch">WATCH</Link></li>
        <li><Link className="grey-text text-darken-2" to="/listen">LISTEN</Link></li>
        <li><Link className="grey-text text-darken-2" to="/wildcat">WILDCAT</Link></li>
        <li><Link className="grey-text text-darken-2" to="/press">PRESS</Link></li>
        <li>
          <a 
            href="https://squareup.com/market/charles-ellsworth"
            target="_blank"
            className="grey-text text-darken-2"
          >
            MERCH
          </a>
        </li>
        <li>
          <a
            href="mailto:wanderingmanproductions@gmail.com?Subject=Booking" target="_top"
            className="grey-text text-darken-2"
          >
            BOOK
          </a>
        </li>
        {/*<li><Link className="grey-text text-darken-2" to="/">BOOK</Link></li> */}
        { role === 'admin' ?
          [
            <li key="subscribers">
              <Link 
                className="grey-text text-darken-2"
                to="/subscribers"
              >
                SUBSCRIBERS
              </Link>
            </li>,
            <li key="pressRelease">
              <Link 
                className="grey-text text-darken-2"
                to="/press_release"
              >
                PRESS RELEASE
              </Link>
            </li>,
            <li key="logout">
              <a 
                onClick={() => dispatch(logout(history))}
                className="grey-text text-darken-2"
              >
                LOGOUT
              </a>
            </li>
          ]
          : null
        }
        <li className="hide-on-med-and-down" style={{ marginLeft: '200px' }}>
          <a className="black-text" href="https://www.facebook.com/charles.b.ellsworth" target="_blank">
            <i className="fa fa-facebook black-text"></i>
          </a>
         </li>
        <li className="hide-on-med-and-up">
          <a className="black-text" href="https://www.facebook.com/charles.b.ellsworth" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
        </li>
        <li>
          <a className="black-text" target="_blank" href="https://twitter.com/cellsworth54">
            <i className="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a className="black-text" target="_blank" href="http://cellsworth54.tumblr.com">
            <i className="fa fa-tumblr"></i>
          </a>
        </li>
        <li>
          <a className="black-text" target="_blank" href="https://www.youtube.com/user/wanderingman54">
            <i className="fa fa-youtube"></i>
          </a>
        </li>
        <li>
          <a className="black-text" target="_blank" href="https://play.spotify.com/artist/31Ca3LzvrbaSP30RY36jxe?play=true&utm_source=open.spotify.com&utm_medium=open">
            <i className="fa fa-spotify"></i>
          </a>
        </li>
      </div>
    )
  }

  joinMailingList = (e) => {
    e.preventDefault();
    let email = this.refs.email;
    this.props.dispatch(setFlash('You have joined my mailing list', 'success'));
    $('#mailing-list').modal('close')
    let req = request.post('/api/subscribers');
    req.setCsrfToken();
    req.send({ subscriber: { email: this.refs.email.value }})
    req.end( (err, res) => {
      this.refs.form.reset();
    });
  }

  render() {
    return (
      <div>
        <nav className="white">
          <div className="nav-wrapper">
            <a
              style={{ marginLeft: '5px', cursor: 'pointer' }} 
              className="black-text"
              href="#mailing-list"
            >
              Join My Mailing List
            </a>
            <a href="#" data-activates="mobile" className="button-collapse">
              <i className="fa fa-bars black-text"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.navs()}
            </ul>
            <ul className="side-nav" id="mobile">
              {this.navs()}
            </ul>  
          </div>
        </nav>
        <Flash />
        { this.props.children }
        <div id="mailing-list" className="modal">
          <div className="modal-content">
            <h4>Join My Mailing List</h4>
            <form ref="form" onSubmit={this.joinMailingList}>
              <input ref="email" type="email" required placeholder="email" />
              <div className="center">
                <button className="black white-text">Join</button>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <a href="#!" className=" modal-action modal-close waves-effect btn-flat">Close</a>
          </div>
        </div> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(App);

