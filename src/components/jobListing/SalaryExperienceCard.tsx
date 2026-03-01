import * as React from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Chip,
  Menu,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const SalaryExperienceCard: React.FC = () => {
  const [menuAnchor, setMenuAnchor] = React.useState<HTMLElement | null>(null);
  const [level, setLevel] = React.useState("");

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 3,
        border: "1px solid #E5E7EB",
        p: 2,
        width:'100%'
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
          Salary & Experience
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
        Configure minimum required experience level
      </Typography>

      {/* Experience Level */}
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
            Experience Level
          </Typography>

          <Box sx={{ display: "flex", gap: 0.75 }}>
            <Typography fontSize={12} color="#6B7280">
              4 Level
            </Typography>
            <Chip
              label="Job"
              size="small"
              sx={{
                height: 20,
                fontSize: 11,
                borderRadius: 1,
                backgroundColor: "#EEF2FF",
                color: "#4F46E5",
              }}
            />
          </Box>
        </Box>

        <FormControl fullWidth size="small">
          <Select
            value={level}
            displayEmpty
            onChange={(e) => setLevel(e.target.value)}
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
              Level Required
            </MenuItem>
            <MenuItem value="junior">Junior</MenuItem>
            <MenuItem value="mid">Mid</MenuItem>
            <MenuItem value="senior">Senior</MenuItem>
            <MenuItem value="lead">Lead</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Job Event */}
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
            Resume Job Event
          </Typography>

          <IconButton size="small">
            <MoreHorizIcon fontSize="small" />
          </IconButton>
        </Box>

        <TextField
          fullWidth
          size="small"
          placeholder="2 prize sharing as employment"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 40,
              borderRadius: 2,
              fontSize: 14,
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

export default SalaryExperienceCard;