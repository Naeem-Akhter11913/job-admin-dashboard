import * as React from "react";
import {
  Typography,
  TextField,
  IconButton,
  Stack,
  Collapse,
  Chip,
  Box
} from "@mui/material";

import {Grid} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Requirements: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const [skills, setSkills] = React.useState<string[]>([
    "React.js",
    "JavaScript",
    "Node.js"
  ]);

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

          <Typography fontWeight={600}>
            Requirements
          </Typography>
        </Stack>

        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container spacing={2} alignItems="center" textAlign={'start'}>
          <Grid size={4}>
            <Typography variant="body2">
              Minimum Qualification
            </Typography>
          </Grid>

          <Grid size={8}>
            <TextField
              fullWidth
              size="small"
              defaultValue="Bachelor's Degree"
            />
          </Grid>

          {/* Skills Required */}
          <Grid size={4}>
            <Typography variant="body2">
              Skills Required
            </Typography>
          </Grid>

          <Grid size={8}>
            <Box
              sx={{
                minHeight: 40,
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 1,
                px: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1
              }}
            >
              <Stack
                direction="row"
                spacing={0.5}
                flexWrap="wrap"
              >
                {skills.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    variant="outlined"
                  />
                ))}
              </Stack>

              {/* right icons */}
              <Stack direction="row" spacing={0.5}>
                <IconButton size="small">
                  <CodeIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <LinkIcon fontSize="small" />
                </IconButton>
                <IconButton size="small">
                  <FormatListBulletedIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          {/* Vacancy Count */}
          <Grid size={4}>
            <Typography variant="body2">
              Vacancy Count
            </Typography>
          </Grid>

          <Grid size={8}>
            <TextField
              fullWidth
              size="small"
              type="number"
              defaultValue={2}
            />
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};

export default Requirements;