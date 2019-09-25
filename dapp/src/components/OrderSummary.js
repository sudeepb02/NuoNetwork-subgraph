import React from "react";
import SummaryItem from "./SummaryItem";
import { GET_ORDER_SUMMARY } from "../queries/orderSummary";
import { Query } from "react-apollo";
import "./Summary.css";

function OrderSummary() {
  const getData = data => {
    const results = [];

    for (var i in data) {
      if (i !== "id" && i !== "__typename") {
        results.push({
          headline: i,
          value: data[i]
        });
      }
    }
    console.log("results", results);
    return results;
  };

  return (
    <div className="d-flex flex-column">
      <h1 className="headline">Order Summary</h1>
      <Query
        query={GET_ORDER_SUMMARY}
        variables={{
          id: 1
        }}
      >
        {({ loading, error, data, fetchMore }) => {
          console.log("data", data);
          if (loading) {
            return <div>loading</div>;
          }
          if (data) {
            const results = getData(data.orderSummary);
            return (
              <div className="d-flex order-summary mt-3">
                {results.map((r, i) => {
                  return (
                    <SummaryItem
                      key={i}
                      headline={r.headline}
                      value={r.value}
                    />
                  );
                })}
              </div>
            );
          }
        }}
      </Query>
    </div>
  );
}

export default OrderSummary;
