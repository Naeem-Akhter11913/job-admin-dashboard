import * as React from "react";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


interface Filters {
  location: string;
  jobType: string;
  experience: string;
  sort: string;
}

const JobFilters: React.FC = () => {
  const [filters, setFilters] = React.useState<Filters>({
    location: "",
    jobType: "",
    experience: "",
    sort: "default",
  });

  const handleChange =
    (key: keyof Filters) =>
    (event: SelectChangeEvent<string>) => {
      setFilters((prev) => ({
        ...prev,
        [key]: event.target.value,
      }));
    };

  const commonSelectStyles = {
    minWidth: 160,
    height: 40,
    borderRadius: 2,
    fontSize: 14,
    backgroundColor: "#fff",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E5E7EB",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D1D5DB",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#6366F1",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        flexWrap: "wrap",
        mb: 2,
      }}
    >
      <FormControl size="small">
        <Select
          value={filters.location}
          displayEmpty
          onChange={handleChange("location")}
          IconComponent={KeyboardArrowDownIcon}
          sx={commonSelectStyles}
        >
          <MenuItem value="">
            Location
          </MenuItem>
          <MenuItem value="remote">Remote</MenuItem>
          <MenuItem value="india">India</MenuItem>
          <MenuItem value="usa">USA</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <Select
          value={filters.jobType}
          displayEmpty
          onChange={handleChange("jobType")}
          IconComponent={KeyboardArrowDownIcon}
          sx={commonSelectStyles}
        >
          <MenuItem value="">
            Job Type
          </MenuItem>
          <MenuItem value="full-time">Full Time</MenuItem>
          <MenuItem value="part-time">Part Time</MenuItem>
          <MenuItem value="contract">Contract</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <Select
          value={filters.experience}
          displayEmpty
          onChange={handleChange("experience")}
          IconComponent={KeyboardArrowDownIcon}
          sx={commonSelectStyles}
        >
          <MenuItem value="">
            Experience
          </MenuItem>
          <MenuItem value="junior">Junior</MenuItem>
          <MenuItem value="mid">Mid</MenuItem>
          <MenuItem value="senior">Senior</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <Select
          value={filters.sort}
          onChange={handleChange("sort")}
          IconComponent={KeyboardArrowDownIcon}
          sx={{ ...commonSelectStyles, minWidth: 180 }}
        >
          <MenuItem value="default">Sort Default</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </FormControl>
      <Button type="button" sx={{...commonSelectStyles,textTransform:'capitalize', color:'black', border:'1px solid #dedddd'}}> Reset Filter </Button>
    </Box>
  );
};

export default JobFilters;