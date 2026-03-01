import * as React from "react";
import {
  Box,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Chip,
  TextField,
  Menu,
  InputAdornment,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";

/* =======================
   Component
======================= */
const RequirementsCard: React.FC = () => {
  const [menuAnchor, setMenuAnchor] = React.useState<HTMLElement | null>(null);
  const [degree, setDegree] = React.useState("");
  const [skills] = React.useState(["React.js", "JavaScript", "Node.js", "New"]);

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        border: "1px solid #E5E7EB",
        p: 2,
        width: '100%'
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 0.5,
        }}
      >
        <Typography fontWeight={600}>
          Requirements
        </Typography>

        <IconButton size="small" onClick={(e) => setMenuAnchor(e.currentTarget)}>
          <MoreHorizIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          fontSize: 13,
          color: "#6B7280",
          mb: 2,
        }}
      >
        Some basic job experience or skills
      </Typography>

      {/* Reference Level */}
      <Box sx={{ mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography fontSize={13} fontWeight={500}>
            Reference Level
          </Typography>

          <IconButton size="small">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>

        <Select
          fullWidth
          size="small"
          value={degree}
          displayEmpty
          onChange={(e) => setDegree(e.target.value)}
          IconComponent={KeyboardArrowDownIcon}
          sx={{
            height: 40,
            fontSize: 14,
            borderRadius: 2,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E5E7EB",
            },
          }}
        >
          <MenuItem value="">
            Bachelor's Degree
          </MenuItem>
          <MenuItem value="masters">Master's Degree</MenuItem>
          <MenuItem value="phd">PhD</MenuItem>
        </Select>
      </Box>

      {/* Skill Count */}
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 0.5,
          }}
        >
          <Typography fontSize={13} fontWeight={500}>
            Discover Count
          </Typography>

          <IconButton size="small">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>

        <TextField
          fullWidth
          size="small"
          placeholder="Add skills"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ display: "flex", gap: 0.5 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        height: 22,
                        fontSize: 12,
                        borderRadius: 1,
                        backgroundColor:
                          skill === "New" ? "#EEF2FF" : "#F3F4F6",
                        color:
                          skill === "New" ? "#4F46E5" : "#374151",
                      }}
                    />
                  ))}
                </Box>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <AddIcon fontSize="small" sx={{ color: "#6B7280" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              minHeight: 44,
              borderRadius: 2,
              fontSize: 14,
              paddingLeft: 1,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E5E7EB",
            },
          }}
        />
      </Box>

      {/* Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={() => setMenuAnchor(null)}
      >
        <MenuItem onClick={() => setMenuAnchor(null)}>Edit</MenuItem>
        <MenuItem onClick={() => setMenuAnchor(null)}>Remove</MenuItem>
      </Menu>
    </Box>
  );
};

export default RequirementsCard;