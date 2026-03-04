import React from "react";
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ApplicantFilterBar: React.FC = () => {
  const [status, setStatus] = React.useState("");
  const [allStatus, setAllStatus] = React.useState("");
  const [level, setLevel] = React.useState("");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        p: 1,
        mt:2,
        flexWrap: "wrap",
      }}
    >
      {/* Search Field */}
      <TextField
        placeholder="Search applicants..."
        size="small"
        sx={{ minWidth: 280, backgroundColor: "#fff" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
      />

      {/* Status */}
      <FormControl size="small" sx={{ minWidth: 120, backgroundColor: "#fff" }}>
        <Select
          displayEmpty
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="">Status</MenuItem>
          <MenuItem value="shortlisted">Shortlisted</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </Select>
      </FormControl>

      {/* All Statuses */}
      <FormControl size="small" sx={{ minWidth: 150, backgroundColor: "#fff" }}>
        <Select
          displayEmpty
          value={allStatus}
          onChange={(e) => setAllStatus(e.target.value)}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="">All Statuses</MenuItem>
          <MenuItem value="applied">Applied</MenuItem>
          <MenuItem value="interview">Interview</MenuItem>
        </Select>
      </FormControl>

      {/* All Levels */}
      <FormControl size="small" sx={{ minWidth: 130, backgroundColor: "#fff" }}>
        <Select
          displayEmpty
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          IconComponent={KeyboardArrowDownIcon}
        >
          <MenuItem value="">All Levels</MenuItem>
          <MenuItem value="junior">Junior</MenuItem>
          <MenuItem value="mid">Mid</MenuItem>
          <MenuItem value="senior">Senior</MenuItem>
        </Select>
      </FormControl>

      {/* Sort Button */}
      <Button
        variant="outlined"
        size="small"
        sx={{
          textTransform: "none",
          borderColor: "#d0d5dd",
          color: "#344054",
          backgroundColor: "#fff",
        }}
      >
        Sort Newest First
      </Button>

      {/* Clear Filters */}
      <Typography
        sx={{
          cursor: "pointer",
          fontSize: "14px",
          color: "#3366ff",
          ml: "auto",
        }}
      >
        Clear Filters
      </Typography>
    </Box>
  );
};

export default ApplicantFilterBar;