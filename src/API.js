"use strict";
import request from 'superagent';
import ServerActions from './actions/ServerActions';

const API = {
  fetchLinks() {
    request
      .get('http://localhost:3000/data/links')
      .end((err, resp) => {
        ServerActions.receiveLinks(resp.body);
      });
  }
};

export default API;