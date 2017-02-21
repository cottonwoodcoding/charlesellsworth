import React from 'react';
import { connect } from 'react-redux';
import { clearFlash } from '../actions/flash.js';

const fadeFlash = (dispatch) => {
  setTimeout( () => {
    dispatch(clearFlash())
  }, 15000)
}

const mapStateToProps = (state) => {
  return { flash: state.flash }
}

const Flash = ({ flash, dispatch }) => {
  let style;
  switch (flash.msgType) {
    case 'info':
      style = {...styles.alertBase, ...styles.alertInfo}
      break;
    case 'success':
      style = {...styles.alertBase, ...styles.alertSuccess}
      break;
    case 'error':
      style = {...styles.alertBase, ...styles.alertError}
      break;
    default: 
      style = {}
  }

  if (flash.message) {
    return (
      <div 
        className="center"
        id="alert" 
        style={{cursor: 'pointer', ...style}}
        onClick={ () => dispatch(clearFlash()) }
      >
        <a 
          style={{ cursor: 'pointer' }}
          className="close grey-text" 
        >
          &times;
        </a>
        {' '}
        {flash.message}
        { fadeFlash(dispatch) }
      </div>
    )
  } else {
    return null
  }
}

Flash.propTypes = {
  message: React.PropTypes.string,
  msgType: React.PropTypes.string,
  dispatch: React.PropTypes.func.isRequired
}

const styles = {
  alertBase: {
    padding: '15px',
		marginBottom: '20px',
    marginRight: '10px',
    border: '1px solid transparent',
    borderRadius: '4px',
  },
  
  alertInfo: {
    color: '#31708f',
    backgroundColor: '#d9edf7',
    borderColor: '#bce8f1',
  },
  
  alertSuccess: {
    color: '#3c763d',
    backgroundColor: '#dff0d8',
    borderColor: '#d6e9c6',
  },
  
  alertError: {
    color: '#a94442',
    backgroundColor: '#f2dede',
    borderColor: '#ebccd1',
  },
}

export default connect(mapStateToProps)(Flash);
