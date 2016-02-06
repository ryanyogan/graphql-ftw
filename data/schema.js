"use strict";

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt
} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      counter: {
        type: GraphQLInt,
        resolve: () => 42
      }
    });
  });

  // mutation: ...
});