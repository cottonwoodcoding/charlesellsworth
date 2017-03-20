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
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '50px' }}>
            <span style={styles.font}>CHARLES</span>
            <div>
              <img style={{ height: '250px' }} src={albumLogo} />
            </div>
            <span style={styles.font}>ELLSWORTH</span>
          </div>
        </div>
        <div className="hide-on-large-only">
          <h1 className="center" style={{ fontWeight: '100' }}>CHARLES ELLSWORTH</h1>
        </div>
        <div className="row container">
          <div className="col s12 m5">
            <div style={styles.bg} className="card z-depth-3">
              <div className="card-content">
                <div className="center">
                  <img className="responsive-img" src={albumLogo} />
                </div>
              </div>
            </div>
          </div>
          <div className="col s12 m6 offset-m1 center">
            <div style={{...styles.title, marginTop: '10px' }}>“Cesaréa”</div>
            <div style={styles.sub}>the new full length studio album from</div>
            <div style={styles.title}>Charles Ellsworth</div>
            <div style={styles.sub}>Available May 26, 2017</div>
            <div style={styles.lead}>“Fifty Cent Smile”</div>
            <div style={styles.paragraph}><a href="http://charlesellsworth.bandcamp.com/merch" target="_blank">Pre-order now for an immediate download of the first single</a></div>
            <div style={{ marginTop: '40px' }} className="center">
              <a href="http://charlesellsworth.bandcamp.com/merch" target="_blank" style={{ marginRight: '10px', ...styles.bg }} className="btn-flat black-text">Order Physical</a>
              <a 
                style={{ cursor: 'pointer', marginLeft: '10px', ...styles.bg }} 
                className="btn-flat black-text dropdown-button"
                data-activates="buy_digital"
               >
                 Order Digital
               </a>
               <ul id="buy_digital" className="dropdown-content">
                 <li><a href="https://itunes.apple.com/us/album/50-cent-smile-single/id1216264573" target="_blank"><i style={{ marginRight: '10px' }} className="fa fa-apple"/>iTunes</a></li>
                 <li><a href="https://www.amazon.com/50-Cent-Smile-Charles-Ellsworth/dp/B06XPLLZRZ/" target="_blank"><i style={{ marginRight: '10px' }} className="fa fa-amazon"/>Amazon</a></li>
               </ul>
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
    marginTop: '20px',
  },
  lead: {
    fontWeight: '400',
    fontSize: '1.8rem',
    marginTop: '10px',
  },
  bg: {
    backgroundColor: 'rgb(247,245,240)'
  }

}

export default Home;
