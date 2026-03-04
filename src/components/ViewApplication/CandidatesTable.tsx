import React, { useMemo, useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Checkbox,
  Chip,
  Collapse,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Tabs,
  Tab,
  TablePagination,
} from "@mui/material";

import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

interface Candidate {
  id: number;
  name: string;
  role: string;
  location: string;
  experience: number;
  salary: number;
  skills: string[];
  status: "Shortlisted" | "Under Review" | "Rejected";
  createdAt: string;
}

const data: Candidate[] = [
  {
    id: 1,
    name: "Adam Johnson",
    role: "Frontend Developer",
    location: "Bengaluru, India",
    experience: 3,
    salary: 10,
    skills: ["React.js"],
    status: "Shortlisted",
    createdAt: "2024-02-20",
  },
  {
    id: 2,
    name: "Jennifer Miller",
    role: "Frontend Developer",
    location: "Mantar, India",
    experience: 4,
    salary: 11,
    skills: ["React.js"],
    status: "Under Review",
    createdAt: "2024-02-18",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Frontend Developer",
    location: "Derin, India",
    experience: 2.5,
    salary: 9,
    skills: ["JavaScript", "Vue.js", "Bootstrap"],
    status: "Rejected",
    createdAt: "2024-02-22",
  },
  {
    id: 4,
    name: "Rahul Verma",
    role: "Frontend Developer",
    location: "Unermal, India",
    experience: 2,
    salary: 8.5,
    skills: ["HTML", "CSS", "React"],
    status: "Under Review",
    createdAt: "2024-02-25",
  },
];

const CandidatesTable: React.FC = () => {
  const [applicantTab, setApplicantTab] = useState(0);
  const [tab, setTab] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [openRowId, setOpenRowId] = useState<number | null>(
    data.length ? data[0].id : null
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalCount = data.length;
  const shortlistedCount = data.filter(
    (c) => c.status === "Shortlisted"
  ).length;
  const rejectedCount = data.filter(
    (c) => c.status === "Rejected"
  ).length;

  const filteredData = useMemo(() => {
    let filtered = [...data];

    if (applicantTab === 1) {
      filtered = filtered.filter((c) => c.status === "Shortlisted");
    }

    if (applicantTab === 2) {
      filtered = filtered.filter((c) => c.status === "Rejected");
    }

    filtered.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    );

    return filtered;
  }, [applicantTab]);

  // Reset page when filter changes
  useEffect(() => {
    setPage(0);
  }, [applicantTab]);

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ borderRadius: 3, mt: 2 }}>
      {/* Top Tabs */}
      <Box sx={{ pt: 2, borderBottom: "1px solid #eee", textAlign:'start' }}>
        <Tabs value={applicantTab} onChange={(e, v) => setApplicantTab(v)}>
          <Tab  sx={{textTransform:'capitalize'}} label={`All Applicants ${totalCount}`} />
          <Tab  sx={{textTransform:'capitalize'}} label={`Shortlisted ${shortlistedCount}`} />
          <Tab  sx={{textTransform:'capitalize'}} label={`Rejected ${rejectedCount}`} />
        </Tabs>
      </Box>

      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: "#f9fafb" }}>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Candidate</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Skills</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row) => {
              const isOpen = openRowId === row.id;

              return (
                <React.Fragment key={row.id}>
                  <TableRow
                    hover
                    onClick={() =>
                      setOpenRowId((prev) =>
                        prev === row.id ? null : row.id
                      )
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.includes(row.id)}
                        onClick={(e) => e.stopPropagation()}
                        onChange={() =>
                          setSelected((prev) =>
                            prev.includes(row.id)
                              ? prev.filter((x) => x !== row.id)
                              : [...prev, row.id]
                          )
                        }
                      />
                    </TableCell>

                    <TableCell>{row.name}</TableCell>

                    <TableCell>
                      {row.experience} Years <br />
                      ₹{row.salary} LPA
                    </TableCell>

                    <TableCell>
                      {row.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{ mr: 1 }}
                        />
                      ))}
                    </TableCell>

                    <TableCell>
                      <Chip label={row.status} size="small" />
                    </TableCell>

                    <TableCell
                      align="right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <IconButton size="small">
                        <ChatOutlinedIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small">
                        <VisibilityOutlinedIcon fontSize="small" />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell colSpan={6} sx={{ p: 0 }}>
                      <Collapse in={isOpen} timeout="auto" unmountOnExit>
                        <Box sx={{ p: 3, background: "#f9fafb" }}>
                          <Tabs
                            value={tab}
                            onChange={(e, v) => setTab(v)}
                            sx={{ mb: 2 }}
                          >
                            <Tab sx={{textTransform:'capitalize'}} label="Resume" />
                            <Tab sx={{textTransform:'capitalize'}} label="Cover Letter" />
                            <Tab sx={{textTransform:'capitalize'}} label="Notes (1)" />
                            <Tab sx={{textTransform:'capitalize'}} label="Activity" />
                          </Tabs>

                          {tab === 0 && (
                            <Paper sx={{ p: 2 }}>
                              <Stack direction="row" spacing={2}>
                                <DescriptionOutlinedIcon />
                                <Typography>
                                  {row.name.replace(" ", "-")}-Resume.pdf
                                </Typography>
                              </Stack>
                            </Paper>
                          )}
                        </Box>
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
};

export default CandidatesTable;