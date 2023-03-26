import { Typography } from "@mui/material";
import { useState } from "react";
import { RectangularBox } from "./style";
import FinancialChartMultipleData from "./Graph";
import { blue } from "@mui/material/colors";
export const FirstPart = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };
  return (
    <RectangularBox>
      <div className="container">
        <div className="stockValue">
          <div className="currentStock">
            <Typography className="number" variant="h3">
              126.5
            </Typography>
            <Typography className="subscript">USD</Typography>
          </div>
          <Typography className="profit">+ 0.700 (0.553%)</Typography>
        </div>
        <div className="stocksNavigation">
          <Typography
            className={activeLink === "Summary" ? "active" : "nav-btn"}
            onClick={() => handleLinkClick("Summary")}
          >
            Summary
          </Typography>
          <Typography
            className={activeLink === "Chart" ? "active" : "nav-btn"}
            onClick={() => handleLinkClick("Chart")}
            // style={{ borderBottom: '3px solid blue' }}
          >
            Chart
          </Typography>
          <Typography
            className={activeLink === "Statistics" ? "active" : "nav-btn"}
            onClick={() => handleLinkClick("Statistics")}
          >
            Statistics
          </Typography>
          <Typography
            className={activeLink === "Analysis" ? "active" : "nav-btn"}
            onClick={() => handleLinkClick("Analysis")}
          >
            Analysis
          </Typography>
          <Typography
            className={activeLink === "Settings" ? "active" : "nav-btn"}
            onClick={() => handleLinkClick("Settings")}
          >
            Settings
          </Typography>
        </div>
      </div>

      <FinancialChartMultipleData />
    </RectangularBox>
  );
};
