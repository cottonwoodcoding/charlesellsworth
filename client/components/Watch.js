import React from 'react';
import { connect } from 'react-redux';
import { setFlash, clearFlash } from '../actions/flash';
import request from 'superagent';
require('superagent-rails-csrf')(request);

class Watch extends React.Component {
  state = { videos: [], vidId: null }

  componentDidMount() {
    $('#video').modal();
    let req = request.get('/api/videos');
    req.setCsrfToken();
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash('Something Went Wrong.  Try again', 'error'));
      } else {
        this.setState({ videos: res.body });
      }
    });
  }

  addVideo = (e) => {
    e.preventDefault();
    let vid_id = this.vidId.value;
    let description = this.description.value;
    let req = request.post('/api/videos');
    req.setCsrfToken();
    req.send({ video: { vid_id, description }})
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash(res.body.errors, 'error'));
      } else {
        this.refs.form.reset(); 
        this.setState({ videos: [res.body, ...this.state.videos] });
      }
    });
  }

  videoForm = () => {
    return (
      <form ref="form" onSubmit={this.addVideo}>
        <div className="center">
          <input type="text" ref={ n => this.vidId = n } placeholder="49-pqRs0" required />
          <input ref={ n => this.description = n } placeholder="description" required />
          <button className="btn black white-text">Add</button>
        </div>
      </form>
    )
  }

  deleteVideo = (id) => {
    if (confirm('Really delete this video?')) {
      let req = request.delete(`/api/videos/${id}`);
      req.setCsrfToken();
      req.end( (err, res) => {
        if (err) {
          this.props.dispatch(setFlash(res.body.errors, 'error'));
        } else {
          this.setState({ videos: this.state.videos.filter( e => e.id !== id ) });
        }
      });
    }
  }

  showVideo = (vidId) => {
    this.setState({ vidId }, $('#video').modal('open') )
  }

  videos = () => {
    return this.state.videos.map( v => {
      return (
        <div key={v.id} className="col s12 m3">
          <img
            style={{ cursor: 'pointer', maxWidth: '100%' }}
            onClick={ () => this.showVideo(v.vid_id) }
            src={`//img.youtube.com/vi/${v.vid_id}/${v.thumbnail}.jpg`}
          />
          <p className="truncate">
            {v.description}
            { this.props.user.role === 'admin' ?
                <span>
                  <i 
                    style={{ marginLeft: '10px', cursor: 'pointer' }} 
                    className="fa fa-trash red-text" 
                    onClick={() => this.deleteVideo(v.id) }
                  />
                </span>
              : null
            }
          </p>
        </div>
      )
    });
  }

  render() {
    let { user: { role }} = this.props;
    return (
      <div style={{ paddingTop: '1px', height: '100vh' }}>
        <h3 className="center">WATCH</h3>
        { role === 'admin' ? this.videoForm() : null }
        <div className="container">
          <div className="row" style={{ marginTop: '20px' }}>
            { this.videos() }
          </div>
        </div>
        <div id="video" className="modal">
          <div 
            className="modal-content"
            style={{ 
              overflow: 'hidden', 
              padding: '0 0'
            }}
           >
            <iframe 
              id="ytplayer" 
              type="text/html" 
              style={{ width:'100%' }}
              height='600'
              src={`https://www.youtube.com/embed/${this.state.vidId}?autoplay=1&fs=0`}
              frameBorder="0"
            >
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Watch);
