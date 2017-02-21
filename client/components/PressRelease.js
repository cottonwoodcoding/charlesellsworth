import React from 'react';
import albumLogo from '../images/CesareaMaster.jpg';

class PressRelease extends React.Component {
  render() {
    return (
      <div> 
        <div style={styles.bg}>
          <div className="center">
            <div style={{ marginBottom: '-15px' }}>
              <span style={styles.font}><bold>Charles Ellsworth</bold></span>
              <span style={styles.font2}>presents</span>
              <span style={styles.font}><bold>“Cesarea”</bold></span>
            </div>
            <h3 style={{ marginTop: '0px', paddingBottom: '30px'}}>A new full length studio album available April 21, 2017</h3>
          </div>
        </div>
        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col s12 m4 offset-m1">
            <iframe 
              style={{ width: '100%', height: '80px', marginBottom: '30px' }}
              src="https://embed.spotify.com/?uri=spotify:track:7HvAze41Wo31tMCddZXfOp"
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim leo quis neque posuere, vitae lacinia ex malesuada. Pellentesque vel libero et orci condimentum pretium. Pellentesque scelerisque leo augue, ac efficitur orci fermentum in. Aenean quis semper erat. Nullam in lorem mi. Vestibulum nec ligula sed nibh ultrices vestibulum eu eu enim. Nulla ullamcorper ligula non nulla porta gravida. Duis ac tortor pulvinar, consequat ipsum eget, gravida magna. Morbi eget vestibulum dolor. Aliquam tristique odio quam, ac tempus metus fringilla non. Curabitur eu tempus sapien, quis ultrices urna. Etiam gravida, sapien sed bibendum venenatis, tortor nisi interdum nibh, in tincidunt felis odio et orci. In semper sit amet nisl facilisis convallis. Nam vel felis eu tellus mattis placerat.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim leo quis neque posuere, vitae lacinia ex malesuada. Pellentesque vel libero et orci condimentum pretium. Pellentesque scelerisque leo augue, ac efficitur orci fermentum in. Aenean quis semper erat. Nullam in lorem mi. Vestibulum nec ligula sed nibh ultrices vestibulum eu eu enim. Nulla ullamcorper ligula non nulla porta gravida. Duis ac tortor pulvinar, consequat ipsum eget, gravida magna. Morbi eget vestibulum dolor. Aliquam tristique odio quam, ac tempus metus fringilla non. Curabitur eu tempus sapien, quis ultrices urna. Etiam gravida, sapien sed bibendum venenatis, tortor nisi interdum nibh, in tincidunt felis odio et orci. In semper sit amet nisl facilisis convallis. Nam vel felis eu tellus mattis placerat.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim leo quis neque posuere, vitae lacinia ex malesuada. Pellentesque vel libero et orci condimentum pretium. Pellentesque scelerisque leo augue, ac efficitur orci fermentum in. Aenean quis semper erat. Nullam in lorem mi. Vestibulum nec ligula sed nibh ultrices vestibulum eu eu enim. Nulla ullamcorper ligula non nulla porta gravida. Duis ac tortor pulvinar, consequat ipsum eget, gravida magna. Morbi eget vestibulum dolor. Aliquam tristique odio quam, ac tempus metus fringilla non. Curabitur eu tempus sapien, quis ultrices urna. Etiam gravida, sapien sed bibendum venenatis, tortor nisi interdum nibh, in tincidunt felis odio et orci. In semper sit amet nisl facilisis convallis. Nam vel felis eu tellus mattis placerat.
            </p>
            <hr />
            <p>Copyright placeholder</p>
          </div>
        </div>
      </div>
    )
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

export default PressRelease;
