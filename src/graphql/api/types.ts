import * as Graphql from 'graphql';

export const ApiKeyType = new Graphql.GraphQLObjectType({
    name: 'ApiKey',
    fields: {
        token: { type: Graphql.GraphQLString },
    },
});
export const ApiKeyArgs = {
    user: { type: new Graphql.GraphQLNonNull(Graphql.GraphQLString) },
    password: { type: new Graphql.GraphQLNonNull(Graphql.GraphQLString) },
};
