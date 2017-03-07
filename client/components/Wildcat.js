import React from 'react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import wildcat from '../images/wildcat.jpg';
import request from 'superagent';
require('superagent-rails-csrf')(request);

class Wildcat extends React.Component {
  state = { edit: false, bio: "" }

  componentDidMount() {
    let req = request.get('/api/bio');
    req.setCsrfToken();
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash('Something Went Wrong.  Try again', 'error'));
      } else {
        this.setState({ bio: res.body.body });
      }
    })
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  handleSubmit = (e) => {
    let req = request.put('/api/bio');
    req.setCsrfToken();
    req.send({ body: this.refs.body.value });
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash('Something Went Wrong.  Try again', 'error'));
      } else {
        this.setState({ bio: res.body, edit: false });
      }
    })
  }

  para = (text) => {
    return text.split("\n").map( (t, i) => {
      return t === "" ? null :
        <div key={i}>
          <h5 className="grey-text text-darken-3">{t}</h5>
          <br />
        </div>
    });
  }

  edit = () => {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <textarea style={{ height: '70vh' }} ref="body" defaultValue={this.state.bio}></textarea>
          <div className="row">
            <button className="col s6 btn grey" type="button" onClick={this.toggleEdit}>Cancel</button>
            <button className="col s6 btn black">Save</button>
          </div>
        </form>
      </div>
    )
  }

  show = () => {
    return (
      <div style={{ marginTop: '100px' }}>
        <div className="row">
          <div className="col s12 m5 center">
            <img style={{ }} src={wildcat} />
          </div>
          <div className="col s12 m6">
            { this.para(this.state.bio) }
          </div>
          { this.props.user.role === 'admin' ?
            <div className="col s12 center">
              <button className="black btn" onClick={this.toggleEdit}>Edit</button>
            </div>
            : null
          }
        </div>
      </div>
    )
  }

  render() {
    if (this.state.edit) 
      return this.edit();
    else 
      return this.show();
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Wildcat);
