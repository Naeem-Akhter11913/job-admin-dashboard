import * as React from "react";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  IconButton,
  Stack,
  FormControl,
  Collapse,
  Box
} from "@mui/material";

import { Grid } from "@mui/material"

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SalaryExperience: React.FC = () => {
  const [minUnit, setMinUnit] = React.useState("LPA");
  const [maxUnit, setMaxUnit] = React.useState("LPA");
  const [experience, setExperience] = React.useState("2-5");

  const [open, setOpen] = React.useState(true);

  return (
    <Box p={1}>
      {/* Header */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={open ? 2 : 0}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ cursor: "pointer" }}
          onClick={() => setOpen((p) => !p)}
        >
          <ExpandMoreIcon
            fontSize="small"
            sx={{
              transition: "0.2s",
              transform: open ? "rotate(0deg)" : "rotate(-90deg)"
            }}
          />

          <Typography fontWeight={600}>
            Salary & Experience
          </Typography>
        </Stack>

        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Stack>

      {/* Collapsible content */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container spacing={2}>
          {/* Minimum Salary */}
          <Grid size={6}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Minimum Salary
            </Typography>

            <Stack direction="row">
              <TextField
                fullWidth
                size="small"
                placeholder="Enter amount"
              />

              <FormControl size="small">
                <Select
                  value={minUnit}
                  onChange={(e) => setMinUnit(e.target.value)}
                  sx={{
                    minWidth: 70,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                  }}
                >
                  <MenuItem value="LPA">LPA</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          {/* Maximum Salary */}
          <Grid size={6}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Maximum Salary
            </Typography>

            <Stack direction="row">
              <TextField
                fullWidth
                size="small"
                placeholder="Enter amount"
              />

              <FormControl size="small">
                <Select
                  value={maxUnit}
                  onChange={(e) => setMaxUnit(e.target.value)}
                  sx={{
                    minWidth: 70,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                  }}
                >
                  <MenuItem value="LPA">LPA</MenuItem>
                  <MenuItem value="USD">USD</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          {/* Experience */}
          <Grid size={12}>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Experience Level
            </Typography>

            <Select
              fullWidth
              size="small"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <MenuItem value="0-1">0 - 1 Years</MenuItem>
              <MenuItem value="2-5">2 - 5 Years</MenuItem>
              <MenuItem value="5-8">5 - 8 Years</MenuItem>
              <MenuItem value="8+">8+ Years</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};

export default SalaryExperience;