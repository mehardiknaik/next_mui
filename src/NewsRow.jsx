import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const NewsRow = ({ title, imageUrl, content }) => {
  return (
    <Card
      sx={{
        my: 2,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt="Live from space album cover"
        sx={{ width: { xs: "100%", sm: 150 },height: { xs: 300, sm: 'auto' } }}
      />
      <CardContent>
        <Typography component="div" variant="h6">
          {title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsRow;
