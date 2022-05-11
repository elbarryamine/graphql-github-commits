import * as Graphql from 'graphql';

export const ApiKeyType = new Graphql.GraphQLObjectType({
    name: 'ApiKey',
    fields: {
        token: { type: Graphql.GraphQLString },
    },
});
