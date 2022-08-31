import React from "react";

function Jumbotron() {
  return (
    <div className="jumbotron" style={{ marginTop: "5%" }}>
      <h1 className="display-4">Make each customer experience matter</h1>
      <p className="lead">
        CRM has evolved to represent every touch point in the customer
        experience. Our enterprise-grade CX solutions provide end-to-end
        insights across the value chain, allowing you to connect real-time
        business data and signals to improve loyalty, customer retention, and
        revenue.
      </p>
      <hr className="my-4" />

      <div style={{ display: "flex" }}>
        <span
          style={{ display: "flex", flexDirection: "column", width: "51vw" }}
        >
          <h5>Turn market opportunities into bottom-line realities</h5>
          <p className="para">
            Exceptional customer experience begins with placing your audience at
            the centre of all you do. Unify customer data across your enterprise
            and utilise AI to build unique profiles that can help you truly
            understand your customers and their preferences.
          </p>
        </span>
        <span
          style={{ display: "flex", flexDirection: "column", width: "51vw" }}
        >
          <h5>Win customer trust and loyalty with intelligent engagement</h5>
          <p className="para">
            AI-fueled insights can help you make each customer feel like your
            only customer. Engage and understand consumers on their terms, while
            respecting their privacy preferences at every point in the customer
            journey, to retain and upsell with machine learning and smart
            automation.
          </p>
        </span>
      </div>
    </div>
  );
}

export default Jumbotron;
