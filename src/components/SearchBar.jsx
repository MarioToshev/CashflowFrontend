import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Autocomplete, InputAdornment, Box } from "@mui/material";
import FinanceInfoService from "../service/FinanceInfoService";
import { redirect } from "react-router-dom";

export default function SearchBar() {
  var selectedTicker = "";
  const [input, setInput] = useState();
  const [searchResults, setSearchResults] = useState([
    { name: "No results found", ticker: "" },
  ]);
  useEffect(() => {
    const search = async () => {
      if (input) {
        const response = await FinanceInfoService.searchCompany(input);
        setSearchResults(response.results);
        console.log(response);
      }
    };
    search();
  }, [input]);

  return (
    <Stack sx={{ width: "60%", mb: 5, borderRadius: 5 }}>
      <Autocomplete
        value={input}
        id="search-bar"
        sx={{
          "& fieldset": { borderRadius: 33 },
          justifyContent: "center",
        }}
        onChange={(event, value) => {
          selectedTicker = value.split(" -- ")[0];
          window.location.replace("/stocks/" + selectedTicker);
        }}
        options={searchResults.map(
          (option) => option.ticker + " -- " + option.name
        )}
        renderInput={(params) => (
          <TextField
            onChange={(e) => {
              setInput(e.target.value);
              console.log(input);
            }}
            {...params}
            label="🔍 Search"
          />
        )}
      />
    </Stack>
  );
}
