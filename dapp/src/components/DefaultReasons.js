import React from "react";
import { GET_DEFAULT_REASONS } from "../queries/defaultReasons";
import { Query } from "react-apollo";
import Chart from "react-google-charts";
import "./Default.css";

function DefaultReasons() {
  const calculate = defaults => {
    const mapping = {};
    for (var i = 0; i < defaults.length; i++) {
      if (mapping[defaults[i].reason]) {
        mapping[defaults[i].reason]++;
      } else {
        mapping[defaults[i].reason] = 1;
      }
    }
    const propNames = Object.getOwnPropertyNames(mapping);

    const props = propNames.map(p => {
      return [p, mapping[p], "color: blue"];
    });
    return props;
  };

  return (
    <div className="d-flex flex-column mt-5">
      <h1 className="headline">Reasons for Default</h1>
      <div className="subnote-text ml-1">Last 1,000 defaults</div>

      <Query query={GET_DEFAULT_REASONS}>
        {({ loading, error, data, fetchMore }) => {
          if (loading) {
            return <div>Loading...</div>;
          }

          const pre = [["Reason", "Number", { role: "style" }]];
          const props = calculate(data.logOrderDefaulteds);

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

export default DefaultReasons;
