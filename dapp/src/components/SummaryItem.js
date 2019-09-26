import React from "react";
import NumberFormat from "react-number-format";

function SummaryItem({ headline, value }) {
  const sanitize = text => {
    let str = "";
    let letters = text.split("");

    for (var i = 0; i < letters.length; i++) {
      str += letters[i];

      if (i + 1 < letters.length) {
        const character = letters[i + 1];
        if (character == character.toUpperCase()) {
          str += " ";
        }
      }
    }

    return str;
  };

  return (
    <div className="summary-item d-flex flex-column">
      <div className="mx-auto item-header mt-5">{sanitize(headline)}</div>
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
