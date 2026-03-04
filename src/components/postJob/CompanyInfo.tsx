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

import {Grid} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const CompanyInfo: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const [industry, setIndustry] = React.useState("it");

  return (
    <Box p={1}>
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
          <Typography fontWeight={600}>Company Info</Typography>
        </Stack>

        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container spacing={1} alignItems="center" textAlign={'start'}>
          <Grid size={4}>
            <Typography variant="body2">
              Company Name
            </Typography>
          </Grid>
          <Grid size={8}>
            <TextField
              fullWidth
              size="small"
              defaultValue="TechWave Solutions"
            />
          </Grid>

          {/* Company Location */}
          <Grid size={4}>
            <Typography variant="body2">
              Company Location
            </Typography>
          </Grid>
          <Grid size={8}>
            <TextField
              fullWidth
              size="small"
              defaultValue="San Francisco, CA"
            />
          </Grid>

          {/* Industry */}
          <Grid size={4}>
            <Typography variant="body2">
              Industry
            </Typography>
          </Grid>
          <Grid size={8}>
            <FormControl fullWidth size="small">
              <Select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <MenuItem value="it">Information Technology</MenuItem>
                <MenuItem value="finance">Finance</MenuItem>
                <MenuItem value="health">Healthcare</MenuItem>
                <MenuItem value="edu">Education</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Website */}
          <Grid size={4}>
            <Typography variant="body2">
              Website
            </Typography>
          </Grid>
          <Grid size={8}>
            <TextField
              fullWidth
              size="small"
              defaultValue="www.techwavesolutions.com"
            />
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};

export default CompanyInfo;