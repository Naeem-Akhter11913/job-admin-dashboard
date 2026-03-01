import React from "react";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  InputAdornment,
  SelectChangeEvent,
} from "@mui/material";

const experienceOptions: string[] = [
  "0 - 1 Years",
  "1 - 2 Years",
  "2 - 5 Years",
  "5 - 10 Years",
  "10+ Years",
];

const SalaryExperience: React.FC = () => {
  const [minSalary, setMinSalary] = React.useState<string>("");
  const [maxSalary, setMaxSalary] = React.useState<string>("");
  const [experience, setExperience] = React.useState<string>("2 - 5 Years");
  const [unit] = React.useState<string>("LPA");

  const handleExperienceChange = (event: SelectChangeEvent) => {
    setExperience(event.target.value);
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 2,
        maxWidth: 600,
      }}
    >
      {/* Header */}
      <Typography variant="h6" fontWeight={600} mb={2}>
        Salary & Experience
      </Typography>

      <Grid container spacing={2}>
        {/* Minimum Salary */}
        <Grid item xs={12} md={6}>
          <Typography variant="body2" mb={1}>
            Minimum Salary
          </Typography>

          <TextField
            fullWidth
            value={minSalary}
            onChange={(e) => setMinSalary(e.target.value)}
            placeholder="Enter salary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Select
                    value={unit}
                    size="small"
                    variant="standard"
                    disableUnderline
                  >
                    <MenuItem value="LPA">LPA</MenuItem>
                  </Select>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Maximum Salary */}
        <Grid item xs={12} md={6}>
          <Typography variant="body2" mb={1}>
            Maximum Salary
          </Typography>

          <TextField
            fullWidth
            value={maxSalary}
            onChange={(e) => setMaxSalary(e.target.value)}
            placeholder="Enter salary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Select
                    value={unit}
                    size="small"
                    variant="standard"
                    disableUnderline
                  >
                    <MenuItem value="LPA">LPA</MenuItem>
                  </Select>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Experience Level */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Experience Level</InputLabel>
            <Select
              value={experience}
              label="Experience Level"
              onChange={handleExperienceChange}
            >
              {experienceOptions.map((exp) => (
                <MenuItem key={exp} value={exp}>
                  {exp}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SalaryExperience;