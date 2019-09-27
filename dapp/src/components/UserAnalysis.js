import React, { useState } from "react";
import { GET_USER_ANALYSIS } from "../queries/userAnalysis";
import { Query } from "react-apollo";
import SummaryItem from "./SummaryItem";
import "./User.css";

function UserAnalysis() {
  const [address, setAddress] = useState("");
  const [submitted, toggleSubmitted] = useState(false);

  const submit = () => {
    toggleSubmitted(true);
  };

  const useExample = () => {
    setAddress("0x4d98916cece6f7af5d156823d7a25a7bac5e4d51");
  };

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
    return results;
  };

  return (
    <div className="d-flex flex-column mb-5">
      <h1 className="headline">User Analysis</h1>
      {address && submitted ? (
        <Query
          query={GET_USER_ANALYSIS}
          variables={{
            id: address
          }}
        >
          {({ loading, error, data, fetchMore }) => {
            if (loading) {
              return <div>loading</div>;
            }

            if (data) {
              const results = getData(data.user);
              console.log("user analysis data", results);
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
      ) : (
        <div className="d-flex flex-column">
          <div className="d-flex">
            <input
              value={address}
              onChange={e => setAddress(e.target.value)}
              className=""
            />
            <div className="submit-button d-flex ml-2" onClick={submit}>
              <div className="mx-auto my-auto">Submit</div>
            </div>
          </div>
          <div className="use-example mt-2" onClick={useExample}>
            Use example address
          </div>
        </div>
      )}
    </div>
  );
}

export default UserAnalysis;
