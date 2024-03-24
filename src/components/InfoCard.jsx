import React from "react";
import Box from "@mui/material/Box";
import Subtitle from "./Subtitle";
import { useTheme } from "@mui/material/styles";

const InfoCard = ({ title, children }) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={theme.palette.background.paper}
      sx={{
        width: { xs: "100%", md: "48%" },
        padding: "12px",
        mb: { xs: "1rem" },
      }}
    >
      <Subtitle variant="h6" label={title} />
      {children}
    </Box>
  );
};

export default InfoCard;
