import React from 'react';
import albumLogo from '../images/CesareaMaster.jpg';

class Home extends React.Component {
  componentDidMount() {
    $(".dropdown-button").dropdown();
  }

  render() {
    return (
      <div> 
        <div style={styles.bg} className="hide-on-med-and-down">
          <div className="row">
            <span style={styles.font} className="col s4 center">CHARLES</span>
            <div className="col s2">
              <img style={{ marginTop: '30px', height: '200px', width: '200px' }} src={albumLogo} />
            </div>
            <span style={styles.font}className="col s5">ELLSWORTH</span>
          </div>
        </div>
        <div className="hide-on-large-only">
          <h1 className="center" style={{ fontWeight: '100' }}>CHARLES ELLSWORTH</h1>
        </div>
        <div className="row">
          <div className="col s12 m4 offset-m1">
            <div style={styles.bg} className="card z-depth-3">
              <div className="card-content">
                <div className="center">
                  <img style={{ height: '400px', width: '400px' }} src={albumLogo} />
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m6 center">
            <div style={{...styles.title, marginTop: '10px' }}>“Cesarea”</div>
            <div style={styles.sub}>the new full length studio album from</div>
            <div style={styles.title}>Charles Ellsworth</div>
            <div style={styles.sub}>Available April 21, 2017</div>
            <div style={styles.paragraph}>Pre-order now for an immediate download of the first single</div>
            <div style={styles.lead}>“Fifty Cent Smile”</div>
            <div style={{ marginTop: '40px' }} className="center">
              {/*<button style={{ marginRight: '10px', ...styles.bg }} className="btn-flat black-text">Order Physical</button>
              <a 
                style={{ cursor: 'pointer', marginLeft: '10px', ...styles.bg }} 
                className="btn-flat black-text dropdown-button"
                data-activates="buy_digital"
               >
                 Order Digital
               </a>
               <ul id="buy_digital" className="dropdown-content">
                 <li><a href="#!"><i style={{ marginRight: '10px' }} className="fa fa-apple"/>iTunes</a></li>
                 <li><a href="#!"><i style={{ marginRight: '10px' }} className="fa fa-amazon"/>Amazon</a></li>
               </ul>*/}
               <iframe 
                style={{ width: '100%', height: '10vh' }}
                src="https://embed.spotify.com/?uri=spotify%3Atrack%3A3hg91B8v2BwteyuBq7R5bd"
                frameBorder="0" 
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  font: {
    fontSize: '7em',
    fontWeight: '100',
    letterSpacing: '3px',
    marginTop: '50px',
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

export default Home;
