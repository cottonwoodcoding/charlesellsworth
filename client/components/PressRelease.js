import React from 'react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import albumLogo from '../images/CesareaMaster.jpg';

class PressRelease extends React.Component {
  state = { editing: false, pressReleaseData: {} };

  componentDidMount() {
    $.ajax({ 
      url: '/api/press_release',
      type: 'GET',
      dataType: 'JSON'
    }).done( pressReleaseData => {
      this.setState({ pressReleaseData });
    }).fail( data => {
      console.log(data);
    });
  }

  para = (text) => {
    if(text)
      return text.split("\n").map( (t, i) => {
        return t === "" ? null :
          <div key={i}>
            <p>{t}</p>
            <br />
          </div>
      });
  }

  toggleEditing = () => {
    this.setState({ editing: !this.state.editing });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let { name, presents, album, sub_header, content, embed_url } = this.refs;

    $.ajax({
      url: '/api/press_release',
      type: 'PUT',
      dataType: 'JSON',
      data: { press_release: {
                name: name.value, presents: presents.value, 
                album: album.value, sub_header: sub_header.value, 
                content: content.value, embed_url: embed_url.value
              }
            }
    }).done( pressReleaseData => { 
      this.props.dispatch(setFlash('Press Release Content Updated', 'success'));
      this.setState({ editing: false, pressReleaseData });
    }).fail( data => {
      console.log(data);
    });
  }

  displayView = () => {
    let { name, presents, album, sub_header, content, embed_url } = this.state.pressReleaseData;

    return (
      <div> 
        <div style={styles.bg}>
          <div className="center">
            <div style={{ marginBottom: '-15px' }}>
              <span style={styles.font}><bold>{ name }</bold></span>
              <span style={styles.font2}>{ presents }</span>
              <span style={styles.font}><bold>“{album}”</bold></span>
            </div>
            <h3 style={{ marginTop: '0px', paddingBottom: '30px'}}>{ sub_header }</h3>
          </div>
        </div>
        { this.props.user.role === 'admin' ? 
            <div className='center'>
              <button className='btn' onClick={ this.toggleEditing } >
                Edit
              </button> 
            </div>
            : 
          null 
        }
        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col s12 m4 offset-m1">
            <iframe 
              style={{ width: '100%', height: '450', marginBottom: '30px' }}
              src={embed_url}
              frameBorder="0"
            ></iframe>
            <div style={styles.bg} className="card z-depth-3">
              <div className="card-content">
                <div className="center">
                  <img style={{ height: '400px', width: '400px' }} src={albumLogo} />
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m6" style={{ marginLeft: '40px' }}>
            { this.para(content) }
          </div>
        </div>
      </div>
    );
  }

  editView = () => {
    let { name, presents, album, sub_header, content, embed_url } = this.state.pressReleaseData;

    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <div style={styles.bg}>
            <div className="center">
              <div style={{ marginBottom: '-15px' }}>
                <span style={styles.font}>
                  <bold>
                    <input type='text' required defaultValue={name} placeholder="Artist Name" ref='name' />
                  </bold>
                </span>
                <span style={styles.font2}>
                  <input type='text' required placeholder='Presents Text' ref='presents' defaultValue={presents} />
                </span>
                <span style={styles.font}>
                  <bold>
                    <input type='text' required placeholder='Album Text' defaultValue={album} ref='album' />
                  </bold>
                </span>
              </div>
              <input type='text' placeholder='Sub Header' ref='sub_header' defaultValue={ sub_header } required />
            </div>
          </div>
          <div className="row" style={{ marginTop: '30px' }}>
            <div className="col s12 m4 offset-m1">
              <input type='url' required placeholder='Embed URL' defaultValue={embed_url} ref='embed_url' />
              <div style={styles.bg} className="card z-depth-3">
                <div className="card-content">
                  <div className="center">
                    <img style={{ height: '400px', width: '400px' }} src={albumLogo} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m6" style={{ marginLeft: '40px' }}>
              <textarea 
                ref='content' 
                style={{ height: '50vh' }} 
                required 
                defaultValue={content}
                placeholder='Press Release Content'
              >
              </textarea>
            </div>
          </div>
          <div className='center'>
            <button className='btn'>Save</button>
            <button type='button' className='btn grey' onClick={ this.toggleEditing }>Cancel</button>
          </div>
        </form>
      </div>
    )
  }

  render() {
    if(this.state.editing)
      return this.editView();
    else
      return this.displayView();
  }
}

const styles = {
  font: {
    fontSize: '5em',
    marginTop: '50px',
  },
  font2: {
    fontSize: '5em',
    marginTop: '50px',
    fontWeight: '100',
    marginLeft: '10px',
    marginRight: '10px'
  },
  title: {
    fontWeight: '400',
    fontSize: '3rem',
    marginTop: '0px',
    marginBottom: '0px'
  },
  sub: {
    fontWeight: '200',
    fontSize: '2rem',
    marginTop: '0px',
    marginBottom: '0px',
  },
  paragraph: {
    fontWeight: '200',
    fontSize: '20px',
    marginTop: '30px',
  },
  lead: {
    fontWeight: '400',
    fontSize: '1.8rem',
  },
  bg: {
    backgroundColor: 'rgb(247,245,240)'
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(PressRelease);
