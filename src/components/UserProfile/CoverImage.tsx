import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

const CoverImage: React.FC = () => {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <ImageOutlinedIcon sx={{ mr: 1, color: "#6c63ff" }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Cover Image
        </Typography>
      </Box>

      {/* Content Row */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Image Preview */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="cover"
          sx={{
            width: 260,
            height: 140,
            borderRadius: 2,
            objectFit: "cover",
          }}
        />

        {/* Right Content */}
        <Box sx={{ flex: 1, minWidth: 250 }}>
          {/* File Name */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f6f5fa",
              borderRadius: 2,
              px: 1.5,
              height: 40,
              mb: 1.5,
            }}
          >
            <Typography variant="body2">
              Verification_Document.pdf
            </Typography>

            <IconButton size="small">
              <InsertDriveFileOutlinedIcon
                sx={{ fontSize: 18, color: "#6c63ff" }}
              />
            </IconButton>
          </Box>

          {/* File Size + Button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: "#777" }}>
              420 KB
            </Typography>

            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                px: 3,
                height: 40,
                borderRadius: 2,
                background:
                  "linear-gradient(135deg, #7b5cff, #5f3df7)",
                boxShadow: "none",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #6c63ff, #5236e0)",
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CoverImage;