import * as Graphql from 'graphql';
import { GetCommitInterface } from './interfaces';

export const CommitsQueryArgs = {
    page: { type: Graphql.GraphQLInt },
    pageSize: { type: Graphql.GraphQLInt },
};
export const CommitsQueryType = new Graphql.GraphQLObjectType({
    name: 'Commits',
    fields: {
        sha: { type: Graphql.GraphQLString },
        message: {
            type: Graphql.GraphQLString,
            resolve: (parent: GetCommitInterface) => parent.commit.message,
        },
        html_url: { type: Graphql.GraphQLString },
        commiter: {
            type: new Graphql.GraphQLObjectType({
                name: 'Commiter',
                fields: {
                    name: { type: Graphql.GraphQLString },
                    email: { type: Graphql.GraphQLString },
                    date: { type: Graphql.GraphQLString },
                },
            }),
            resolve: (parent: GetCommitInterface) => parent.commit.committer,
        },
        date: {
            type: Graphql.GraphQLString,
            resolve: (parent: GetCommitInterface) =>
                parent.commit.committer.date,
        },
    },
});
