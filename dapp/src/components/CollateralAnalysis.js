import React from "react";
import { GET_ORDER_CREATEDS } from "../queries/orderCreateds";
import { Query } from "react-apollo";
import Chart from "react-google-charts";

const mapping  = {
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": "WBTC",
  "0x514910771af9ca656af840dff83e8264ecf986ca": "LINK",
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "WETH",
  "0xe41d2489571d322189246dafa5ebde1f4699f498": "ZRX",
  "0xdd974d5c2e2928dea5f71b9825b8b646686bd200": "KNC",
  "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2": "MKR",
  "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359": "DAI"
}

function CollateralAnalysis() {
  const calculate = (tokens) => {
    const tokenMap = {}
    
    for(var i = 0; i < tokens.length; i++){
      const symbol = mapping[tokens[i].collateralToken] ? mapping[tokens[i].collateralToken] : "None or Other";
      if(tokenMap[symbol]){
        tokenMap[symbol]++;
      } else {
        tokenMap[symbol] = 1;
      }
    }

    const propNames = Object.getOwnPropertyNames(tokenMap)
    const props = propNames.map(p => {
      return [p, tokenMap[p], "color: blue"]
    })
    return props;
  }

  return (
    <div className="d-flex flex-column mt-5">
      <h1 className="headline">Collateral Analysis</h1>
      <div className="subnote-text ml-1">Last 1,000 orders...most "None and Other" values are likely Lend orders where no collateral is required</div>

      <Query query={GET_ORDER_CREATEDS}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) {
            return <div>Loading...</div>;
          }
          const pre = [["Reason", "Number", { role: "style" }]];
          const props = calculate(data.logOrderCreateds);

          const mapped = pre.concat(props);

          const options = {
            bars: "horizontal",
            axes: {
              y: {
                0: { side: "right" }
              }
            },
            legend: { position: "none" }
          };

          return (
            <Chart
              className="mt-4 chart ml-2"
              chartType="BarChart"
              width="1000px"
              height="400px"
              options={options}
              data={mapped}
            />
          );
        }}
      </Query>
    </div>
  );
}

export default CollateralAnalysis;
