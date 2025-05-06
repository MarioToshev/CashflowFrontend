import { Box, Typography } from "@mui/material";
import { green, lightGreen, red } from "@mui/material/colors";
import React from "react";

export default function InfoContainerDashboard() {
  return (
    <>
      <Box
        sx={{ background: "white", width: "70%", mt: 5, p: 5, borderRadius: 5 }}
      >
        <Typography variant="h4" mb={5}>
          <b>Welcome back!</b>
        </Typography>

        <Typography variant="h4">$ 10,830</Typography>

        <Typography variant="h6">
          Today change:{" "}
          <Typography variant="h6" display={"inline"} color={red["400"]}>
            {" "}
            - $ 100,030
          </Typography>
        </Typography>
      </Box>
    </>
  );
}
