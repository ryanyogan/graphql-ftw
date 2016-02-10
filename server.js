'use strict';

import fs from 'fs';
import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';
import { graphql } from 'graphql';
import { introspectionQuery } from 'graphql/utilities';

import { MongoClient } from 'mongodb';

const app = express();
app.use(express.static('public'));

(async () => {
  const db = await MongoClient.connect(process.env.MONGO_URL);
  const schema = Schema(db);

  app.use('/graphql', GraphQLHTTP({
    schema,
    graphiql: true
  }));

  const json = await graphql(schema, introspectionQuery);
  fs.writeFile('./data/schema.json', JSON.stringify(json, null, 2), err => {
    if (err) throw err;

    console.log('JSON Schema Succesfully Created');
  });

  app.listen(3000, () => console.log('Listening on port 3000'));
})();
