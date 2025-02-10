import { ApolloServer } from '@apollo/server';
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/use/ws';
import expres from "express"
import cors from "cors"
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4';




//GraphQL Settings
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";


//Moongose
import mongoose from "mongoose";


// Create an express app
const app = expres()

// Your MongoDB connection string 


mongoose.connect("mongodb://db/livechat",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })
    .then(() => console.log('MongoDB Conectada'))
    .catch(err => console.log(err)
);
  
const httpServer = createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });


// Creating the WebSocket server
const wsServer = new WebSocketServer({
  // This is the `httpServer` we created in a previous step.
  server: httpServer,
  // Pass a different path here if app.use
  // serves expressMiddleware at a different path
  path: '/subscriptions',
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
const serverCleanup = useServer({ schema }, wsServer);
const server = new ApolloServer({
  schema,
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

await server.start()

app.use("/subscriptions", cors(), bodyParser.json(), expressMiddleware(server))

httpServer.listen(4000, () => {
    console.log("Server running on port: ", 4000)
})