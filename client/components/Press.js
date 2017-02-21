import React from 'react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import request from 'superagent';
require('superagent-rails-csrf')(request);

class Press extends React.Component {
  state = { releases: [] }

  componentDidMount() {
    let req = request.get('/api/releases');
    req.setCsrfToken();
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash('Something Went Wrong.  Try again', 'error'));
      } else {
        this.setState({ releases: res.body });
      }
    });
  }

  addRelease = (e) => {
    e.preventDefault();
    let body = this.body.value;
    let source = this.source.value;
    let req = request.post('/api/releases');
    req.setCsrfToken();
    req.send({ release: { body, source }})
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash(res.body.errors, 'error'));
      } else {
        this.refs.form.reset(); 
        this.setState({ releases: [res.body, ...this.state.releases ] });
      }
    });
  }

  releaseForm = () => {
    return (
      <form ref="form" onSubmit={this.addRelease}>
        <div className="row">
          <input className="col s12" ref={ n => this.body = n } placeholder="Body" required />
          <input className="col s12 m12" placeholder="Source" ref={ n => this.source = n } required />
          <div className="row center">
            <button className="btn black white-text">Add</button>
          </div>
        </div>
      </form>
    )
  }

  deleteRelease = (id) => {
    if (confirm('Really delete this Press Release?')) {
      let req = request.delete(`/api/releases/${id}`);
      req.setCsrfToken();
      req.end( (err, res) => {
        if (err) {
          this.props.dispatch(setFlash(res.body.errors, 'error'));
        } else {
          this.setState({ releases: this.state.releases.filter( e => e.id !== id ) });
        }
      });
    }
  }

  releases = () => {
    return this.state.releases.map( (r, i) => {
      return (
        <p key={i}>
          {`"${r.body}"`}
          <br />
          <blockquote className="blue-text text-lighten-1" style={{ borderLeft: '2px solid #42a5f5' }}>
            {r.source}
          </blockquote>
          { this.props.user.role === 'admin' ?
            <span>
              <i 
                className="fa fa-trash red-text" 
                onClick={ () => this.deleteRelease(r.id) } 
                style={{ cursor: 'pointer' }}
              />
            </span>
            : null
          }
        </p>
      )
    });
  }

  render() {
    let { user: { role }} = this.props;
    return (
      <div style={{ paddingTop: '1px', height: '100vh', backgroundColor: 'rgb(247,245,240)' }}>
        <h3 className="center">PRESS</h3>
        { role === 'admin' ? this.releaseForm() : null }
        <div className="container">
          { this.releases() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Press);
