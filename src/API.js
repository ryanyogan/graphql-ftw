"use strict";
import request from 'superagent';
import ServerActions from './actions/ServerActions';

const API = {
  fetchLinks() {
    request
      .post('/graphql')
      .send({
        query: `{
          links {
            _id,
            title,
            url
          }
        }`
      })
      .end((err, resp) => {
        ServerActions.receiveLinks(resp.body.data.links);
      });
  }
};

export default API;