import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLError } from 'graphql';
import schema from './graphql';
import { DbConnect } from './db/sqlite';
import expressPlayground from 'graphql-playground-middleware-express';
dotenv.config();

DbConnect();

const app = express();
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        customFormatErrorFn: ({ message, path }: GraphQLError) => {
            return { message, path };
        },
    })
);
app.get('/playground', expressPlayground({ endpoint: '/graphql' }));

process.on('unhandledRejection', (err: { message: unknown }) => {
    console.error(err.message);
});

const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
