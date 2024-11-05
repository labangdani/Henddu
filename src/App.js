import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import "./App.css";
import Routers from "./routes/Router.navigation";
// import { Provider } from "react-redux";


const httpLink = createHttpLink({
  fetch,
  uri: process.env.REACT_APP_SECRET_DIRECTUS_LINK,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_SECRET_DIRECTUS_TOKEN}`,
    "Content-Language": "en-us",
    "Content-Type": "application/json",
  },
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      {/* <Provider store={0}> */}
        <ApolloProvider client={apolloClient}>
          <Routers />
        </ApolloProvider>
      {/* </Provider> */}
    </>
  );
}

export default App;
