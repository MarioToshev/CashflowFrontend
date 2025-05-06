import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { green } from "@mui/material/colors";
import { Box, Button } from "@mui/material";
import { indigo } from "@mui/material/colors";

export default function ChartComponentUsingD3(prices) {
  prices = prices.prices;

  const options = {
    rangeSelector: {
      selected: 1,
    },
    chart: {
      animation: true,
      type: "candlestick",
    },
    time: {
      useUTC: false,
    },
    title: {
      text: `${prices.ticker} Stock Price`,
    },
    navigator: {
      enabled: false,
    },
    scrollbar: {
      enabled: true,
    },
    xAxis: {
      startOfWeek: 1,
      scrollablePlotArea: {
        maxWidth: 1,
      },
      zoomEnabled: true,
      width: "100%",
    },
    yAxis: {
      title: {
        text: "PRICE",
        margin: 5,
        style: {
          color: "white",
          fontWeight: 800,
          opacity: 0.7,
        },
      },
      crosshair: {
        label: {
          enabled: true,
        },
      },
    },
    series: [
      {
        step: "center",
        name: prices.ticker,
        data: prices.results.map((price) => [
          price.t,
          price.o,
          price.h,
          price.l,
          price.c,
        ]),
        type: "candlestick",
      },
    ],
  };
  Highcharts.theme = {
    chart: {
      height: (9 / 16) * 100 + "%",
      width: 1200,
    },
    plotOptions: {
      candlestick: {
        lineColor: "red",
        color: "red",
        upLineColor: green[500],
        upColor: green[500],
      },
    },
  };

  Highcharts.setOptions(Highcharts.theme);

  Highcharts.FullScreen = function (container) {
    this.init(container.parentNode); // main div of the chart
  };
  return (
    <Box id="chart">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"stockChart"}
        options={options}
      />
      <Button
        sx={{ color: indigo[400] }}
        onClick={() => {
          const chartContainer = document.getElementById("chart")?.parentNode;
          if (chartContainer) {
            if (chartContainer.requestFullscreen) {
              chartContainer.requestFullscreen();
            } else if (chartContainer.mozRequestFullScreen) {
              // Firefox
              chartContainer.mozRequestFullScreen();
            } else if (chartContainer.webkitRequestFullscreen) {
              // Chrome, Safari and Opera
              chartContainer.webkitRequestFullscreen();
            } else if (chartContainer.msRequestFullscreen) {
              // IE/Edge
              chartContainer.msRequestFullscreen();
            }
            console.log("Full screen button clicked");
          } else {
            console.error("Chart container not found");
          }
        }}
      >
        Open full screen
      </Button>
    </Box>
  );
}
