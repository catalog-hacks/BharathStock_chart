import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Graph } from "./style";
import FinancialChartMultipleData from "./Graph";
import { total, before } from "./Graph/StocksHistory";
export const Index = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };
  let value;
  return (
    <Graph>
      <div className="stockDashboard">
        <div className="stockValue">
          <div className="currentStock">
            <Typography className="number" variant="h3">
              {parseFloat(total).toFixed(2)}
            </Typography>
            <Typography className="subscript">USD</Typography>
          </div>
          <Typography className="profit">
            {" "}
            {total - before > 0 ? "+" : ""} {(total - before).toFixed(3)}
            {" (" + (((total - before) / total) * 100).toFixed(2) + "%)"}
          </Typography>
        </div>
        <div className="stocksNavigation">
          <Typography
            className={activeLink === "Summary" ? "active" : ""}
            onClick={() => handleLinkClick("Summary")}
          >
            Summary
          </Typography>
          <Typography
            className={activeLink === "Chart" ? "active" : ""}
            onClick={() => handleLinkClick("Chart")}
          >
            Chart
          </Typography>
          <Typography
            className={activeLink === "Statistics" ? "active" : ""}
            onClick={() => handleLinkClick("Statistics")}
          >
            Statistics
          </Typography>
          <Typography
            className={activeLink === "Analysis" ? "active" : ""}
            onClick={() => handleLinkClick("Analysis")}
          >
            Analysis
          </Typography>
          <Typography
            className={activeLink === "Settings" ? "active" : ""}
            onClick={() => handleLinkClick("Settings")}
          >
            Settings
          </Typography>
        </div>
      </div>
      <div className="graphContainer">
        <FinancialChartMultipleData />
      </div>
    </Graph>
  );
};
