import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Grid,
  InputAdornment,
  Paper,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const inputSx = {
  "& .MuiInputBase-root": {
    height: 40,
    backgroundColor: "#f6f5fa",
  },
};

const SocialLinks: React.FC = () => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <NotificationsNoneIcon sx={{ mr: 1, color: "#6c63ff" }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Social Links
        </Typography>
      </Box>

      <Typography variant="body2" sx={{ color: "#777", mb: 3 }}>
        Manage email and in-app notifications
      </Typography>

      <Grid container spacing={2}>
        {/* LinkedIn */}
        <Grid size={12}>
          <Grid container alignItems="center" spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LinkedInIcon sx={{ color: "#0A66C2", mr: 1 }} />
                <Typography variant="body2">Linkedin URL</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                size="small"
                defaultValue="linkedin.com/company/techwave"
                sx={inputSx}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Twitter */}
        <Grid size={12}>
          <Grid container alignItems="center" spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TwitterIcon sx={{ color: "#1DA1F2", mr: 1 }} />
                <Typography variant="body2">Twitter / X URL</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                size="small"
                defaultValue="twitter.com/techwavehq"
                sx={inputSx}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Facebook */}
        <Grid size={12}>
          <Grid container alignItems="center" spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FacebookIcon sx={{ color: "#1877F2", mr: 1 }} />
                <Typography variant="body2">Facebook URL</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                size="small"
                defaultValue="facebook.com/techwavehq"
                sx={inputSx}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Instagram */}
        <Grid size={12}>
          <Grid container alignItems="center" spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <InstagramIcon sx={{ color: "#E4405F", mr: 1 }} />
                <Typography variant="body2">Instagram URL</Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                size="small"
                defaultValue="instagram.com/techwavehq"
                sx={inputSx}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SocialLinks;