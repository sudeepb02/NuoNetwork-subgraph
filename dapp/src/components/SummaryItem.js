import React from "react";
import NumberFormat from "react-number-format";

function SummaryItem({ headline, value }) {
  return (
    <div className="summary-item d-flex flex-column">
      <div className="mx-auto item-header mt-5">{headline}</div>
      <div className="mx-auto mt-3 item-value">
        <NumberFormat
          value={value}
          displayType={"text"}
          thousandSeparator={true}
        />
      </div>
    </div>
  );
}

export default SummaryItem;
