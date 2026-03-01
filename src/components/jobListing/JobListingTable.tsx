import * as React from "react";
import { Box, Typography, Button, Chip, Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";


type JobStatus = "Hiring" | "Closed";

interface JobRow {
    id: number;
    title: string;
    status: JobStatus;
    applications: string;
    shortlisted: string;
    date: string;
}


const rows: JobRow[] = [
    {
        id: 1,
        title: "Frontend Developer",
        status: "Hiring",
        applications: "38 / 18",
        shortlisted: "8 / 12",
        date: "6-9-ago",
    },
    {
        id: 1,
        title: "Frontend Developer",
        status: "Hiring",
        applications: "38 / 18",
        shortlisted: "8 / 12",
        date: "6-9-ago",
    },
    {
        id: 2,
        title: "UX/UI Designer",
        status: "Closed",
        applications: "52 / 15",
        shortlisted: "18 / 30",
        date: "7-9-ago",
    },
    {
        id: 3,
        title: "Backend Developer",
        status: "Hiring",
        applications: "24 / 26",
        shortlisted: "4 / 6",
        date: "10-9-ago",
    },
    {
        id: 4,
        title: "Digital Marketing Manager",
        status: "Hiring",
        applications: "19 / 25",
        shortlisted: "5 / 6",
        date: "12-9-ago",
    },
];

const columns: GridColDef<JobRow>[] = [
    {
        field: "title",
        headerName: "Job Title",
        flex: 1.5,
        minWidth: 220,
        renderCell: (params) => (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Avatar sx={{ width: 32, height: 32 }}>
                    {params.value?.[0]}
                </Avatar>
                <Typography fontWeight={500}>{params.value}</Typography>
            </Box>
        ),
    },
    {
        field: "status",
        headerName: "Status",
        width: 120,
        renderCell: (params) => (
            <Chip
                label={params.value}
                size="small"
                sx={{
                    backgroundColor:
                        params.value === "Hiring" ? "#E6F4EA" : "#F1F3F4",
                    color:
                        params.value === "Hiring" ? "#1E7F43" : "#5F6368",
                    fontWeight: 500,
                }}
            />
        ),
    },
    {
        field: "applications",
        headerName: "Applications",
        width: 150,
    },
    {
        field: "shortlisted",
        headerName: "Shortlisted",
        width: 150,
    },
    {
        field: "date",
        headerName: "Date",
        width: 130,
    },
    {
        field: "actions",
        headerName: "View",
        width: 90,
        sortable: false,
        filterable: false,
        renderCell: () => <RowMenu />,
    },
];


const RowMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    return (
        <>
            <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
                <MoreVertIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem onClick={() => setAnchorEl(null)}>
                    View Applications
                </MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>
                    Edit Job
                </MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>
                    Close Job
                </MenuItem>
                <MenuItem onClick={() => setAnchorEl(null)}>
                    Delete Job
                </MenuItem>
            </Menu>
        </>
    );
};


const JobListingTable: React.FC = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Typography variant="h6" fontWeight={600}>
                    Job Listings
                </Typography>

                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ textTransform: "none", borderRadius: 2 }}
                >
                    Post a Job
                </Button>
            </Box>

            {/* DataGrid */}
            <Box sx={{ height: 420 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    disableRowSelectionOnClick
                    showToolbar
                    sx={{
                        borderRadius: 3,
                        border: "1px solid #E5E7EB",
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: "#F7F8FC",
                            fontWeight: 600,
                        },
                        "& .MuiDataGrid-cell": {
                            outline: "none",
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default JobListingTable;