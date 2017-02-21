import React from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
require('superagent-rails-csrf')(request);

class Subscribers extends React.Component {
  state = { subscribers: [] }

  componentDidMount() {
    let req = request.get('/api/subscribers');
    req.setCsrfToken();
    req.end( (err, res) => {
      this.setState({ subscribers: res.body });
    }); 
  }

  render() {
    return (
      <div>
        { this.props.user.role === 'admin' ?
          <div className="container">
            <h4 className="center">Subscribers</h4>
            <ul className="collection">
              { this.state.subscribers.map( s => {
                  return (<li className="collection-item" key={s.id}>{s.email}</li>);
                })
              }
            </ul>
          </div>
          :
          <h4 className="center">Page Not Found</h4>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Subscribers);
