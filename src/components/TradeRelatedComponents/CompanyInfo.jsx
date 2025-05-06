import React, { useEffect, useState } from "react";
import { Box, ListItem, Divider, List, Typography } from "@mui/material";
import FinanceInfoService from "../../service/FinanceInfoService";

export default function CompanyInfo(prop) {
  const [stockData, setStockData] = useState();
  // const [stockFinancials, setStockFinancials] = useState();

  useEffect(() => {
    if (!stockData) {
      const fetchInitialStockData = async () => {
        var data = await FinanceInfoService.getStockInfo(prop.ticker);
        setStockData(data.results);
      };
      fetchInitialStockData();
    }
    // if (!stockFinancials) {
    //   const fetchInitialFinStockData = async () => {
    //     var financials = await FinanceInfoService.getStockFinancials(
    //       prop.ticker
    //     );
    //     stockFinancials = financials.results;
    //     setStockFinancials(stockFinancials);
    //   };
    //   fetchInitialFinStockData();
    // }
  }, [stockData]);

  if (!stockData) {
    return <div>Loading...</div>;
  } else
    return (
      <>
        <Box
          sx={{
            background: "white",
            width: "100%",
            mt: 2,
            p: 5,
            pb: 3,
            borderRadius: 5,
            fontColor: "black",
          }}
        >
          <Typography variant="h5">Company Info:</Typography>
          <List>
            <ListItem>
              <Typography variant="h6">
                <b>Full name:</b> {stockData.name}
              </Typography>
            </ListItem>

            <Divider component="li" />
            <ListItem>
              <Typography variant="h6">
                <b>Address:</b> {stockData.address?.address1 || "No data"}{" "}
                {stockData.address?.city || " "}{" "}
                {stockData.address?.state || " "}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">
                <b>Description:</b> {stockData.description || "No data"}
                <a href={stockData.homepage_url}>
                  {" "}
                  {stockData.homepage_url || ""}
                </a>
              </Typography>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Typography variant="h6">
                <b>Share count</b>{" "}
                {stockData.share_class_shares_outstanding || "No data"}{" "}
              </Typography>
            </ListItem>
          </List>
        </Box>
        {/* <Box
          sx={{
            background: "white",
            width: "100%",
            mt: 2,
            p: 5,
            pb: 3,
            borderRadius: 5,
            fontColor: "black",
          }}
        >
          <Typography variant="h5">Company Financials:</Typography>
          <List>
            <ListItem>
              <Typography variant="h6">
                <b>Balance Sheet:</b>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">
                <b>
                  Current Assets:{" "}
                  {stockFinancials.balance_sheet?.current_assets || "no data"}
                </b>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">
                <b>
                  Current Liabilities:{" "}
                  {stockFinancials.balance_sheet?.current_liabilities ||
                    "no data"}
                </b>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="h6">
                <b>
                  Equity: {stockFinancials.balance_sheet?.equity || "no data"}
                </b>
              </Typography>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Typography variant="h6">
                <b>Full name:</b> {stockData.name}
              </Typography>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Typography variant="h6">
                <b>Full name:</b> {stockData.name}
              </Typography>
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <Typography variant="h6">
                <b>Full name:</b> {stockData.name}
              </Typography>
            </ListItem>
            <Divider component="li" />
          </List>
        </Box> */}
      </>
    );
}
