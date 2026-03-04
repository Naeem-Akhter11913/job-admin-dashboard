import React from "react";
import {
  Box,
  Typography,
  Grid,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Paper,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const inputSx = {
  "& .MuiInputBase-root": {
    height: 40,
    backgroundColor: "#f6f5fa",
  },
};

const CompanyAddress: React.FC = () => {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <LocationOnOutlinedIcon sx={{ mr: 1, color: "#6c63ff" }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Company Address
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* Country */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Country
          </Typography>
          <FormControl fullWidth size="small" sx={inputSx}>
            <Select defaultValue="India" IconComponent={ExpandMoreIcon}>
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* State */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            State
          </Typography>
          <FormControl fullWidth size="small" sx={inputSx}>
            <Select defaultValue="California" IconComponent={ExpandMoreIcon}>
              <MenuItem value="California">California</MenuItem>
              <MenuItem value="Texas">Texas</MenuItem>
              <MenuItem value="New York">New York</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Left Side (Address + City) */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Full Address
          </Typography>
          <TextField
            fullWidth
            size="small"
            defaultValue="123 Tech Park, Sector 5"
            sx={{ ...inputSx, mb: 2 }}
          />

          <Typography variant="body2" sx={{ mb: 0.5 }}>
            City
          </Typography>
          <FormControl fullWidth size="small" sx={inputSx}>
            <Select
              defaultValue="San Francisco"
              IconComponent={ExpandMoreIcon}
            >
              <MenuItem value="San Francisco">San Francisco</MenuItem>
              <MenuItem value="Los Angeles">Los Angeles</MenuItem>
              <MenuItem value="San Diego">San Diego</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Right Side (Map) */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            component="img"
            src="https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco&zoom=13&size=400x200&markers=color:red%7CSan+Francisco"
            alt="map"
            sx={{
              width: "100%",
              height: 160,
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CompanyAddress;