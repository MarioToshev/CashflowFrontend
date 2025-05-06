import useWebSocket, { ReadyState } from "react-use-websocket";
import axios from "axios";
import DateConverter from "./DateConverter";
const polygonKey = "Lr1NYMtSAGSA3eD1yDh7NXoUVeueD7G3";

class FinanceInfoService {
  getStockPrice(stockTicker) {
    const today = DateConverter.getTodaysDate();
    const fiveYearsAgo = today.split("-")[0] - 5 + today.substring(4);
    return axios
      .get(
        `https://api.polygon.io/v2/aggs/ticker/${stockTicker}/range/1/day/${fiveYearsAgo}/${today}?adjusted=true&sort=asc&apiKey=${polygonKey}`
      )
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  getStockInfo(stockTicker) {
    return axios
      .get(
        `https://api.polygon.io/v3/reference/tickers/${stockTicker}?apiKey=${polygonKey}`
      )
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  getStockFinancials(stockTicker) {
    return axios
      .get(
        `https://api.polygon.io/vX/reference/financials?ticker=${stockTicker}&limit=1&apiKey=${polygonKey}`
      )
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  searchCompany(ticker) {
    return axios
      .get(
        "https://api.polygon.io/v3/reference/tickers?search=" +
          ticker +
          `&active=true&limit=10&apiKey=` +
          polygonKey
      )
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  getCurrentPrice(ticker) {
    const socket = new WebSocket("wss://delayed.polygon.io/stocks");
  }
}
export default new FinanceInfoService();
