import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import StocksHistory from "./StocksHistory";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect, useState } from "react";
import { Maximize2, PlusCircle } from "react-feather";
import "./index.css";
import { Typography } from "@mui/material";
IgrFinancialChartModule.register();
const FinancialChartMultipleData = () => {
  const [activeLink, setActiveLink] = useState("");
  const handle = useFullScreenHandle();
  const [data, setData] = useState([{}]);
  const [copydata, setCopydata] = useState([{}]);
  useEffect(() => {
    const fetchData = async () => {
      const stocks = await StocksHistory.getStockData();
      setData(stocks);
      setCopydata(stocks);
    };
    fetchData();
  }, []);
  function getData(date: any) {
    setData(copydata.slice(-1 * date));
  }
  return (
    <div className="container sample">
      <div className="container">
        <div className="stockChanges">
          <div className="stockactions">
            <div className="actions">
              <Maximize2 color="#6F7177" />
              <Typography
                fontSize={15}
                fontWeight={400}
                color="#6F7177"
                onClick={handle.enter}
              >
                Fullscreen
              </Typography>
            </div>
            <div className="actions">
              <PlusCircle color="#6F7177" />
              <Typography fontSize={15} fontWeight={400} color="#6F7177">
                Compare
              </Typography>
            </div>
          </div>
          <div className="button">
            <button
              className={activeLink === "one" ? "activedata" : "btn"}
              onClick={() => {
                getData(23);
                setActiveLink("one");
              }}
            >
              1d
            </button>
            <button
              className={activeLink === "three" ? "activedata" : "btn"}
              onClick={() => {
                getData(69);
                setActiveLink("three");
              }}
            >
              3d
            </button>
            <button
              className={activeLink === "month" ? "activedata" : "btn"}
              onClick={() => {
                getData(161);
                setActiveLink("month");
              }}
            >
              1w
            </button>
            <button
              className={activeLink === "six" ? "activedata" : "btn"}
              onClick={() => {
                getData(774);
                setActiveLink("six");
              }}
            >
              1m
            </button>
            <button
              className={activeLink === "year" ? "activedata" : "btn"}
              onClick={() => {
                getData(1000);
                setActiveLink("year");
              }}
            >
              6m
            </button>
            <button
              className={activeLink === "all" ? "activedata" : "btn"}
              onClick={() => {
                getData(1200);
                setActiveLink("all");
              }}
            >
              1y
            </button>
            <button
              className={activeLink === "max" ? "activedata" : "btn"}
              onClick={() => {
                getData(2000);
                setActiveLink("max");
              }}
            >
              max
            </button>
          </div>
        </div>
        <FullScreen handle={handle}>
          <div className="chart">
            <IgrFinancialChart
              width="100%"
              height="100%"
              chartType="Line"
              thickness={2}
              volumeType={"column"}
              volumeOutlines={"#e7e8ec"}
              volumeBrushes={"#e7e8ec"}
              dataSource={data}
              zoomSliderType={"none"}
              toolTipType={"none"}
              xAxisLabelTextColor={"transparent"}
              yAxisLabelTextColor={"transparent"}
              brushes="rgba(75, 64, 238, 1) "
              xAxisStroke={"transparent"}
              yAxisMajorStroke={"transparent"}
              xAxisMajorStroke="#e7e8ec"
              isToolbarVisible="true"
              crosshairsAnnotationYAxisBackground="black"
              crosshairsAnnotationXAxisBackground="transparent"
              crosshairsAnnotationXAxisTextColor="transparent"
              crosshairsLineThickness={2}
            />
          </div>
        </FullScreen>
      </div>
    </div>
  );
};
export default FinancialChartMultipleData;
