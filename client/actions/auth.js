import { setFlash, clearFlash } from './flash';
import { browserHistory } from 'react-router'
import request from 'superagent';
require('superagent-rails-csrf')(request);

export const refreshLogin = (user = null) => {
  return (dispatch) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      let req = request.get('/api/users/info');
      req.setCsrfToken();
      req.send({...user});
      req.end( (err, res) => {
        if(err) {
          dispatch(setFlash(res.body.errors, 'error'));
        } else {
          setUser(dispatch, res.body);
        }
      });
    }
  }
}

export const logout = (router) => {
  return (dispatch) => {
    let req = request.delete('/users/sign_out');
    req.setCsrfToken();
    req.end( (err, res) => {
      if(err) {
        dispatch(setFlash(err.responseJSON.error, 'error'));
      } else {
        dispatch(clearFlash());
        dispatch({ type: 'USER', user: {} });
        router.push('/');
      }
    });
  }
}

const setUser = (user) => {
  return { type: 'USER', ...user }
}
