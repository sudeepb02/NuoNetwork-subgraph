import React from 'react';
import OrderSummary from "./components/OrderSummary";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App d-flex flex-column">
        <OrderSummary />
        <div>under</div>
      </div>

    </ApolloProvider>
  );
}

export default App;
