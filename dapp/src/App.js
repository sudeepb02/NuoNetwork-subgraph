import React from 'react';
import OrderSummary from "./components/OrderSummary";
import CollateralAnalysis from "./components/CollateralAnalysis";
import DefaultReasons from "./components/DefaultReasons";
import { ApolloProvider } from "react-apollo";
import { client } from "./client";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App d-flex flex-column">
        <h4 className="ml-1 mb-3 font-weight-bold">
          Nuo Network Subgraph
        </h4>
        <div className="my-4"/>
        <OrderSummary />
        <CollateralAnalysis />
        <DefaultReasons />
      </div>

    </ApolloProvider>
  );
}

export default App;
