import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import {typedefs, resolvers } from '../database/resolver.graphql'
import { PORT } from '../config/app_config'


const running_server = new ApolloServer({typedefs, resolvers});
const app = express();

app.get('/', (request, response) => {});

app.listen({port: PORT}, () => {});