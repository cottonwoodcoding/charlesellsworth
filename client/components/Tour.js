import React from 'react';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';
import request from 'superagent';
require('superagent-rails-csrf')(request);

class Tour extends React.Component {
  state = { events: [] }

  componentDidMount() {
    let req = request.get('/api/events');
    req.setCsrfToken();
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash('Something Went Wrong.  Try again', 'error'));
      } else {
        this.setState({ events: res.body });
      }
    });
  }

  addEvent = (e) => {
    e.preventDefault();
    let event_date = this.eventDate.value;
    let venue = this.venue.value;
    let location = this.location.value;
    let link = this.rsvp.value;
    let req = request.post('/api/events');
    req.setCsrfToken();
    req.send({ event: { event_date, venue, location, link }})
    req.end( (err, res) => {
      if (err) {
        this.props.dispatch(setFlash(res.body.errors, 'error'));
      } else {
        this.refs.form.reset(); 
        this.setState({ events: [...this.state.events, res.body] });
      }
    });
  }

  eventForm = () => {
    return (
      <form ref="form" onSubmit={this.addEvent}>
        <div className="row">
          <input type="date" className="col s12 m3" ref={ n => this.eventDate = n } required />
          <input className="col s12 m3" placeholder="venue" ref={ n => this.venue = n } required />
          <input className="col s12 m3" placeholder="location city, state" ref={ n => this.location = n } required />
          <input className="col s12 m3" placeholder="rsvp link" ref={ n => this.rsvp = n } />
          <div className="row center">
            <button className="btn black white-text">Add</button>
          </div>
        </div>
      </form>
    )
  }

  deleteEvent = (id) => {
    if (confirm('Really delete this event?')) {
      let req = request.delete(`/api/events/${id}`);
      req.setCsrfToken();
      req.end( (err, res) => {
        if (err) {
          this.props.dispatch(setFlash(res.body.errors, 'error'));
        } else {
          this.setState({ events: this.state.events.filter( e => e.id !== id ) });
        }
      });
    }
  }

  events = () => {
    let sorted = this.state.events.sort( (a, b) => {
      a = new Date(a.event_date);
      b = new Date(b.event_date);
      return a < b ? -1 : a > b ? 1 : 0;
    }); 

    return (
      <table className="bordered">
        <tbody>
          { sorted.map( (e, i) => {
              return (
                <tr key={i}>
                  <td>{moment(e.event_date).format('MMM DD  ddd').toUpperCase()}</td>
                  <td>{e.venue}</td>
                  <td>{e.location}</td>
                  <td>
                    <a 
                      className="btn-flat right" 
                      href={e.link} target="_blank"
                      style={{ border: '1px solid black' }}
                    >
                      RSVP
                    </a>
                  </td>
                  { this.props.user.role === 'admin' ?
                      <td className="center">  
                        <i 
                          className="fa fa-trash red-text" 
                          style={{ cursor: 'pointer' }}
                          onClick={ () => this.deleteEvent(e.id) }
                        />
                      </td>
                    : null
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  render() {
    let { user: { role }} = this.props;
    return (
      <div style={{ paddingTop: '1px', height: '100vh', backgroundColor: 'rgb(247,245,240)' }}>
        <h3 className="center">TOUR</h3>
        { role === 'admin' ? this.eventForm() : null }
        <div className="container">
          { this.events() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Tour);
