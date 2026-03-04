import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

const SocialLinksHeader: React.FC = () => {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        <ShieldOutlinedIcon sx={{ mr: 1, color: "#6c63ff" }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Social Links
        </Typography>
      </Box>

      <Typography variant="body2" sx={{ color: "#777" }}>
        Update password & security settings
      </Typography>
    </Paper>
  );
};

export default SocialLinksHeader;