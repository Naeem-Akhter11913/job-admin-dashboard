import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import CheckIcon from "@mui/icons-material/Check";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const rowSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
//   py: 1.5,
};

const inputBoxSx = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f6f5fa",
  borderRadius: 2,
  px: 1.5,
  height: 40,
  minWidth: 200,
  justifyContent: "space-between",
};

const Branding: React.FC = () => {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
        <PaletteOutlinedIcon sx={{ mr: 1, color: "#6c63ff" }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Branding
        </Typography>
      </Box>

      <Typography variant="body2" sx={{ color: "#777", mb: 2 }}>
        Update password & security settings
      </Typography>

      <Divider sx={{ mb: 1 }} />

      {/* Primary Color */}
      <Box sx={rowSx}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: 1,
              backgroundColor: "#6c63ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <ColorLensOutlinedIcon sx={{ fontSize: 16, color: "#fff" }} />
          </Box>

          <Typography variant="body2">Primary Color</Typography>
        </Box>

        <Box sx={inputBoxSx}>
          <Typography variant="body2" sx={{ color: "#555" }}>
            5A522EA
          </Typography>

          <IconButton
            size="small"
            sx={{
              backgroundColor: "#6c63ff",
              color: "#fff",
              width: 28,
              height: 28,
              "&:hover": { backgroundColor: "#5a52ea" },
            }}
          >
            <CheckIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Secondary Color */}
      <Box sx={rowSx}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: 28,
              height: 28,
              borderRadius: 1,
              backgroundColor: "#52c4a0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <AccessTimeIcon sx={{ fontSize: 16, color: "#fff" }} />
          </Box>

          <Typography variant="body2">Secondary Color</Typography>
        </Box>

        <Box sx={inputBoxSx}>
          <Typography variant="body2" sx={{ color: "#555" }}>
            6008289
          </Typography>

          <Box
            sx={{
              width: 20,
              height: 20,
              borderRadius: 1,
              backgroundColor: "#52c4a0",
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default Branding;