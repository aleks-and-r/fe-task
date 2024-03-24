import React from "react";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import InfoCard from "./InfoCard";
import { useTheme } from "@mui/material/styles";
import AttachmentIcon from "../icons/Attachment";

const Details = ({ features, keywords, attachments }) => {
  const theme = useTheme();

  return (
    <InfoCard title={"DETAILS"}>
      <Box sx={{ padding: "10px" }}>
        <Typography variant="subtitle1" color={theme.palette.primary.secondary}>
          Features
        </Typography>
        <List sx={{ listStyle: "disc", pl: 2, pt: 0 }}>
          {Object.entries(features).map(([key, value]) => (
            <ListItem key={key} sx={{ display: "list-item", padding: 0 }}>
              <span style={{ display: "inline-flex" }}>
                <ListItemText
                  sx={{
                    color: theme.palette.primary.secondary,
                    display: "inline",
                    m: 0,
                    mr: "8px",
                  }}
                  primary={`${key}: `}
                />{" "}
                <ListItemText
                  sx={{ display: "inline", m: 0 }}
                  primary={value}
                />
              </span>
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle1" color={theme.palette.primary.secondary}>
          Attachments
        </Typography>
        <List sx={{ pt: 0 }}>
          {attachments.map((attachment, idx) => (
            <ListItem key={idx} sx={{ padding: 0 }}>
              <ListItemText sx={{ m: 0 }}>
                <AttachmentIcon width="15px" />
                <Link
                  color={theme.palette.primary.link}
                  href={attachment.file_link}
                  underline="none"
                >
                  {attachment.file_label}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.primary.secondary }}
        >
          Keywords
        </Typography>

        <Stack direction="row" spacing={1}>
          {keywords.map((keyword, idx) => (
            <Chip
              key={idx}
              label={keyword}
              sx={{
                backgroundColor: theme.palette.chip.background,
                color: theme.palette.chip.color,
                cursor: "pointer",
              }}
            />
          ))}
        </Stack>
      </Box>
    </InfoCard>
  );
};

export default Details;
