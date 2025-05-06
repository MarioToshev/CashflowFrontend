import { React, useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import ChartComponentUsingD3 from "../components/TradeRelatedComponents/ChartComponentUsingD3";
import CompanyInfo from "../components/TradeRelatedComponents/CompanyInfo";
import CurrentPriceBox from "../components/TradeRelatedComponents/CurrentPriceBox";
import FinanceInfoService from "../service/FinanceInfoService";
import { useParams } from "react-router-dom";
import { indigo } from "@mui/material/colors";

function StockPage() {
  const [stockData, setStockData] = useState();
  const { ticker } = useParams();

  useEffect(() => {
    const fetchInitialStockData = async () => {
      if (!stockData) {
        var data = await FinanceInfoService.getStockPrice(ticker);
        setStockData(data);
      }
    };
    fetchInitialStockData();
  }, [stockData, ticker]);

  if (stockData && stockData.results) {
    return (
      <div>
        <Typography variant="h2">{ticker}</Typography>
        <div class="container">
          <Box
            sx={{
              background: "white",
              mt: 5,
              mr: 5,
              p: 5,
              borderRadius: 5,
              poisition: "relative",
              width: "100%",
              flex: 1,
              minwidth: "50%",
              display: "block",
            }}
          >
            <ChartComponentUsingD3 prices={stockData} />
          </Box>

          <Box
            sx={{
              flex: 1,
              background: "white",
              width: "100%",
              height: "100%",
              borderRadius: 5,
              background: indigo[50],
            }}
          >
            <CurrentPriceBox
              lastPrice={stockData.results[[stockData.results.length - 1]].vw}
              lastDayOpen={stockData.results[[stockData.results.length - 1]].o}
              lastDayClose={stockData.results[[stockData.results.length - 1]].c}
            />
            <CompanyInfo ticker={stockData.ticker} />
          </Box>
        </div>
      </div>
    );
  } else {
    return (
      <Box>
        <Typography variant="h4">
          Please select a company from the search bar...
        </Typography>
      </Box>
    );
  }
}
export default StockPage;
