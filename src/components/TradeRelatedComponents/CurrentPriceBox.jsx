import React, { useEffect, useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { green, indigo } from "@mui/material/colors";
import { Propane } from "@mui/icons-material";

export default function CurrentPriceBox(props) {
  const APIKEY = process.env.POLY_API_KEY || "Lr1NYMtSAGSA3eD1yDh7NXoUVeueD7G3";
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const ws = new WebSocket("wss://delayed.polygon.io/stocks");

    ws.onopen = () => {
      console.log("Connected!");
      ws.send(`{"action":"auth","params":"${APIKEY}"}`);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Data APL");

      console.log(data);
      if (data.vw) {
        setPrice(data.vw);
      }
      ws.send(`{ action: "subscribe", params: "AM.AAPL" }`);

      data.forEach((msg) => {
        console.log("Status Update:", msg.message);
        ws.send(`{ action: "subscribe", params: "AM.AAPL" }`);
        console.log("Subscribed to AM.AAPL");
        if (msg.ev === "status") {
        } else {
          console.log(msg);
        }
      });
    };
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    if (price === 0) {
      setPrice(props.lastPrice);
    }
    return () => {
      ws.close();
    };
  });

  var lastDayChange = (props.lastPrice - props.lastDayClose).toFixed(2);
  var color = lastDayChange > 0 ? green[500] : "red";
  var percentage = percentageDiff(
    props.lastDayClose,
    props.lastDayOpen
  ).toFixed(2);
  if (color === "red") {
    percentage = " - " + percentage;
  }

  return (
    <Box
      sx={{
        background: "white",
        mt: 5,
        p: 3,
        borderRadius: 5,
        fontColor: "black",
        bordercolor: indigo[50],
      }}
    >
      <Typography variant="h4" sx={{ mt: 5, mb: 5 }}>
        Current Price:
      </Typography>
      <Typography variant="h4">$ {price.toFixed(2)} </Typography>
      <Typography variant="h5">
        Last day change:{" "}
        <Typography
          variant="h5"
          style={{ display: "inline-block", color: color }}
        >
          {lastDayChange}$ ({percentage}%)
        </Typography>{" "}
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 10,
          width: "100%",
          height: "5%",
          fontSize: "1.2rem",
          background: "green",
          borderRadius: 3,
        }}
      >
        BUY
      </Button>
      <Button
        variant="contained"
        sx={{
          mt: 5,
          width: "100%",
          height: "5%",
          fontSize: "1.2rem",
          background: "red",
          borderRadius: 3,
        }}
      >
        SELL
      </Button>
    </Box>
  );
}

function percentageDiff(a, b) {
  return 100 * Math.abs((a - b) / ((a + b) / 2));
}
