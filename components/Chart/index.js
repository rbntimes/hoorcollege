import { useState } from "react";
import { ResponsiveBubble } from "@nivo/circle-packing";

import data from "./data";

const Chart = () => {
  const [description, setDescription] = useState({
    name: "Data visualisatie van hoorcolleges 11-11-2019",
    text:
      "Ik heb er voor gekozen mijn datavisualisatie van de hoorcolleges uit te werken. Klik op de bubbels om te lezen wat de presentaties voor mij betekende."
  });

  return (
    <div className="chartContainer">
      <div className="chart">
        <ResponsiveBubble
          root={data}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          identity="name"
          value="loc"
          colors={{ scheme: "nivo" }}
          padding={6}
          labelTextColor={{ from: "color", modifiers: [["darker", 0.8]] }}
          borderWidth={2}
          animate={true}
          motionStiffness={50}
          motionDamping={12}
          onClick={({ data }) => console.log(data) || setDescription(data)}
        />
      </div>
      <div className="meta">
        <h1>{description.name}</h1>
        <span>{description.text}</span>
      </div>
      <style jsx>{`
        .chartContainer {
          width: 80vw;
          height: 80vh;
          display: flex;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
        }
        .chartContainer:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .chart {
          width: 70%;
          height: 100%;
          display: flex;
          justify-content: flex-start;
          background: white;
        }
        .meta {
          width: 40%;
          padding: 20px;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 18;
          line-height: 21px;
        }
      `}</style>
    </div>
  );
};

export default Chart;
