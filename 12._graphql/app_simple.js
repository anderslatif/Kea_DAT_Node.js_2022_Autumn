import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

const app = express();
app.use(express.static("public"));

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            hello: {
                description: "Returns a standard greeting 'World'",
                type: GraphQLString,
                resolve: () => "world"
            }
        }
    })
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));



app.listen(8080, () => console.log("Server is running on port", 8080));
