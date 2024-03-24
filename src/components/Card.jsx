import React, { useEffect, useRef, useState } from "react";
import { Box, Link, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StarRating from "./StarRating";
import Button from "./Button";
import AddIcon from "../icons/PlusIcon";
import NumberInput from "./NumberInput";
import ImageSwitcher from "./ImageSwitcher";
import { useInViewport } from "../hooks/useInViewport";

const Card = ({
  title,
  supplierName,
  supplierLink,
  totalCosts,
  currency,
  shipping,
  unit,
  setCount,
  rating,
  images,
  setAddToCartButtonVisible,
}) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const btnRef = useRef();
  const { isVisible } = useInViewport(btnRef);

  useEffect(() => {
    setAddToCartButtonVisible(isVisible);
  }, [isVisible]);

  const handleIncrease = () => {
    const parsedNumber = parseInt(inputValue);
    if (!isNaN(parsedNumber) && parsedNumber > 0) {
      setCount((prevCount) => prevCount + parsedNumber);
      setInputValue("");
    }
  };

  return (
    <Box
      bgcolor={theme.palette.background.paper}
      sx={{
        display: "flex",
        p: "2rem",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <ImageSwitcher images={images} />
      {/* description */}
      <Box
        sx={{
          pl: { xs: 0, md: 5 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: { xs: "100%", md: "40%" },
        }}
      >
        <Box>
          <Typography variant="h5" color={theme.palette.primary.secondary}>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.secondary}
          >
            <span>by </span>
            <Link color={theme.palette.primary.link} href={supplierLink}>
              {supplierName}
            </Link>
            {/* {supplierName} */}
          </Typography>
          <StarRating rating={rating} />
          <Box>
            <Typography variant="h6">
              {totalCosts} {currency}
            </Typography>
            <Typography color={theme.palette.primary.secondary} variant="body1">
              +{shipping} {currency} shipping %
            </Typography>
            <Typography color={theme.palette.primary.secondary} variant="body1">
              all prices incl. 10% taxes
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <NumberInput value={inputValue} onChange={setInputValue} />
          <Typography sx={{ ml: "10px", mr: "10px" }}>{unit}</Typography>
          <span style={{ height: "100%" }} ref={btnRef}>
            <Button
              buttonLabel="Add to cart"
              icon={<AddIcon />} // Passing the Icon component as the icon
              onClick={() => {
                handleIncrease();
              }}
              color="primary"
              variant="contained"
              disabled={!Boolean(inputValue)}
              sx={{ height: "100%", whiteSpace: "nowrap" }}
            />
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
