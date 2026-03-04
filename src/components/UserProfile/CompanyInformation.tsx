import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  Grid,
  Button,
  Avatar,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const inputSx = {
  "& .MuiInputBase-root": {
    height: 40,
  },
};

const CompanyInformation: React.FC = () => {
  return (
    <Paper elevation={1} sx={{p:2}}>
      
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
            Company Information
          </Typography>

          <Grid container spacing={2}>
            {/* Upload Section */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  background: "#f6f5fa",
                  borderRadius: 3,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    mx: "auto",
                    mb: 2,
                    background:
                      "linear-gradient(135deg, #7b5cff, #5f3df7)",
                    fontSize: 28,
                  }}
                >
                  T
                </Avatar>

                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    color: "#6c63ff",
                    fontWeight: 500,
                  }}
                >
                  Upload New
                </Button>
              </Box>
            </Grid>

            {/* Right Section */}
            <Grid size={{ xs: 12, md: 9 }}>
              {/* Company Name */}
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Company Name
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="TechWave Solutions"
                sx={{ ...inputSx, mb: 2 }}
              />

              {/* Industry */}
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Industry
              </Typography>
              <FormControl fullWidth size="small" sx={{ ...inputSx }}>
                <Select
                  defaultValue="Software Development"
                  IconComponent={ExpandMoreIcon}
                >
                  <MenuItem value="Software Development">
                    Software Development
                  </MenuItem>
                  <MenuItem value="FinTech">FinTech</MenuItem>
                  <MenuItem value="Healthcare">Healthcare</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Company Size */}
            <Grid size={12}>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Company Size
              </Typography>

              <Grid container spacing={2}>
                <Grid size={6}>
                  <FormControl fullWidth size="small" sx={inputSx}>
                    <Select defaultValue="1-10" IconComponent={ExpandMoreIcon}>
                      <MenuItem value="1-10">1-10</MenuItem>
                      <MenuItem value="11-50">11-50</MenuItem>
                      <MenuItem value="51-200">51-200</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid size={6}>
                  <FormControl fullWidth size="small" sx={inputSx}>
                    <Select defaultValue="200+" IconComponent={ExpandMoreIcon}>
                      <MenuItem value="200+">200+</MenuItem>
                      <MenuItem value="500+">500+</MenuItem>
                      <MenuItem value="1000+">1000+</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>

            {/* Website */}
            <Grid size={12}>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Website URL
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="https://www.techwave.com"
                sx={inputSx}
              />
            </Grid>

            {/* Email */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Company Email
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="hr@techwave.com"
                sx={inputSx}
              />
            </Grid>

            {/* Contact Number */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" sx={{ mb: 0.5 }}>
                Contact Number
              </Typography>
              <TextField
                fullWidth
                size="small"
                defaultValue="+91 98765 43210"
                sx={inputSx}
              />
            </Grid>
          </Grid>
    </Paper>
  );
};

export default CompanyInformation;