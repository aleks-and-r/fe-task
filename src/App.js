import React, { useState } from "react";
import Header from "./components/Header";
import { Box, Container, ThemeProvider, createTheme } from "@mui/material";
import data from "../resources/data/data.json";
import Typography from "@mui/material/Typography";
import Details from "./components/Details";
import PricingAndShipping from "./components/PricingAndShipping";
import Card from "./components/Card";
import GlobalStyles from "./GlobalStyles";

const App = () => {
  const [count, setCount] = useState(data.cart.items);
  const [isAddToCartButtonVisible, setAddToCartButtonVisible] = useState(false);
  const [shake, setShake] = useState(false);

  const handleHeaderAddToCart = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleProductAdd = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 500);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#DE554A",
        secondary: "#676767",
        link: "#0000ff",
      },
      background: {
        default: "#EFEFEF",
        paper: "#fff",
      },
      icon: {
        primary: "#E8E8E8",
        secondary: "#A7A7A7",
      },
      chip: {
        background: "#CED4DA",
        color: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header
        title={data.article.title}
        count={count}
        isAddToCartButtonVisible={isAddToCartButtonVisible}
        handleHeaderAddToCart={handleHeaderAddToCart}
        shake={shake}
      />
      <Container>
        <Card
          title={data.article.title}
          supplierName={data.article.supplier_name}
          supplierLink={data.article.supplier_link}
          totalCosts={data.cart.total_costs}
          currency={data.article.currency}
          shipping={data.article.transport_costs}
          unit={data.article.unit}
          setCount={setCount}
          count={count}
          rating={data.article.stars}
          images={data.article.images}
          setAddToCartButtonVisible={setAddToCartButtonVisible}
          onProductAdd={handleProductAdd}
        />
        <Box
          sx={{ padding: "2rem" }}
          bgcolor={theme.palette.background.default}
        >
          <Box
            sx={{ width: { xs: "100%", md: "80%" } }}
            bgcolor={theme.palette.background.default}
          >
            <Box>
              <Typography variant="h6" color={theme.palette.primary.main}>
                DESCRIPTION
              </Typography>
              <Typography variant="body1">
                {data.article.description_long}
                {data.article.description_long}
                {data.article.description_long}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexBasis: 1,
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "3rem",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Details
                  features={data.article.features}
                  keywords={data.article.keywords}
                  attachments={data.article.attachments}
                />
                <PricingAndShipping
                  deliveryTime={data.article.delivery_time}
                  unit={data.article.unit}
                  minimumOrderQuantity={data.article.minimum_order_quantity}
                  shipping={data.article.transport_costs}
                  priceBreaks={data.article.price_breaks}
                  currency={data.article.currency}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
