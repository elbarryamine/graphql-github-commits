import * as Graphql from 'graphql';
import { listCommits } from './commits/query';
import { CommitsQueryArgs, CommitsQueryType } from './commits/types';
import GuardMiddeleWare from './middleware/guard';
import { ApiKeyArgs, ApiKeyType } from './api/types';
import { generateApiKey } from './api/mutation';
import { helloWorld } from './hello-world/query';

const Schema = new Graphql.GraphQLSchema({
    query: new Graphql.GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            sayHello: {
                type: Graphql.GraphQLString,
                resolve: helloWorld,
            },
            listCommits: {
                type: new Graphql.GraphQLList(CommitsQueryType),
                args: CommitsQueryArgs,
                resolve: GuardMiddeleWare(listCommits),
            },
        }),
    }),
    mutation: new Graphql.GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            generateApiKey: {
                type: ApiKeyType,
                args: ApiKeyArgs,
                resolve: generateApiKey,
            },
        }),
    }),
});

export default Schema;
