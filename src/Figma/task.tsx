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
              {value ? parseFloat(total).toFixed(2) : 125.6}
            </Typography>
            <Typography className="subscript">USD</Typography>
          </div>
          <Typography className="profit">+0.700(0.553%)</Typography>
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
