require('dotenv').config();
express = require('express');
ApolloServer = require('apollo-server-express');
import typedefs from 'resolver.graphql';
import resolvers from 'resolver.graphql';



const running_server = new ApolloServer({typedefs, resolvers, playground: true});
const app = express();
running_server.start();
running_server.applyMiddleware('/graphql', app)

app.listen({port: PORT}, () => {});