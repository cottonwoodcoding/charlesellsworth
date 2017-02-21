import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
require('superagent-rails-csrf')(request);

class Listen extends React.Component {
  state = { albums: [], playing: ''}

  componentDidMount() {
    let req = request.get('/api/albums');
    req.setCsrfToken();
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash('Something Went Wrong.  Try again', 'error'));
      } else {
        let albums = res.body
        let playing = albums.length ? albums[0].title : ''
        this.setState({ albums, playing }, () => {
          $('ul.tabs').tabs();
        });
      }
    });
  }

  addAlbum = (e) => {
    e.preventDefault();
    let uri = this.uri.value;
    let title = this.title.value;
    let req = request.post('/api/albums');
    req.setCsrfToken();
    req.send({ album: { uri, title } });
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash(res.body.errors, 'error'));
      } else {
        this.refs.form.reset();
        this.setState({ albums: [res.body, ...this.state.albums] });
      }
    });
  }

  albumForm = () => {
    return (
      <form ref="form" onSubmit={this.addAlbum}>
        <div className="row">
          <input 
            className="col s12" 
            ref={ n => this.title = n } 
            placeholder="title" 
            required 
          />
          <input 
            className="col s12" 
            ref={ n => this.uri = n } 
            placeholder="spotify:album:2LUGrxbveIRrLmd97n71zT" 
            required 
          />
          <div className="row center">
            <button className="btn black white-text">Add</button>
          </div>
        </div>
      </form>
    )
  }

  deleteAlbum = () => {
    let album = this.state.albums.find( a => a.title === this.state.playing )
    if (confirm('Really delete this album?')) {
      let id = album.id
      let req = request.delete(`/api/albums/${id}`);
      req.setCsrfToken();
      req.end( (err, res) => {
        if (err) {
          this.props.dispatch(setFlash(res.body.errors, 'error'));
        } else {
          window.location.reload()
        }
      });
    }
  }

  tabs = () => {
    return (
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            { this.state.albums.map( album => {
                return (
                  <li
                    key={album.id}
                    className="tab col s2"
                  >
                    <a
                      style={{ cursor: 'pointer' }}
                      className="black-text"
                      onClick={ e => {
                        e.preventDefault();
                        this.setState({ playing: album.title })
                      }}
                     >
                       {album.title}
                     </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }

  embed = () => {
    let { albums, playing } = this.state;
    let album = albums.find( a => a.title === playing );
    if (album) {
      return (
        <iframe 
          style={{ width: '100%', height: '50vh' }}
          src={`https://embed.spotify.com/?uri=${album.uri}`}
          frameBorder="0" 
        ></iframe>
      )
    }
  }

  render() {
    return (
      <div style={{ paddingTop: '1px', height: '100vh', backgroundColor: 'rgb(247,245,240)' }}>
        <h3 className="center">LISTEN</h3>
        { this.props.user.role === 'admin' ? this.albumForm() : null }
        <div className="container">
				  { this.tabs() }
          <div className="center">
            { this.props.user.role === 'admin' && this.state.playing !== '' ?
              <span>
                Remove Album ?
                {' '}
                <i 
                  className="fa fa-trash red-text" 
                  style={{ cursor: 'pointer' }}
                  onClick={this.deleteAlbum}
                />
              </span> : null
            }
            { this.embed() }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Listen);
