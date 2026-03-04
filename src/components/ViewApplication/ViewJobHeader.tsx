import * as React from "react";
import {
    Box,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";


const ViewJobHeader = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);


    return (
        <Box p={1}>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                gap={2}
            >
                {/* Left content */}
                <Box>
                    <Typography fontSize={22} fontWeight={600}>
                        Frontend Developer
                    </Typography>

                    <Stack direction="row" spacing={1} mt={0.5}>
                        <Typography variant="body2" color="text.secondary">
                            25 Applicants
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            •
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Posted 10 days ago
                        </Typography>
                    </Stack>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        mt={0.5}
                    >
                        TechWave Solutions • San Francisco, CA
                    </Typography>
                </Box>

                {/* Right actions */}
                <Stack direction="row" spacing={1}>
                    {/* Hiring dropdown */}
                    <Button
                        size="small"
                        variant="contained"
                        startIcon={<WorkOutlineIcon />}
                        endIcon={<KeyboardArrowDownIcon />}
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                        sx={{
                            textTransform: "none",
                            borderRadius: 2,
                            backgroundColor: "#E6F4F1",
                            color: "#1B7F6E",
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#D8EEE9",
                                boxShadow: "none"
                            }
                        }}
                    >
                        Hiring
                    </Button>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                    >
                        <MenuItem>Hiring</MenuItem>
                        <MenuItem>On Hold</MenuItem>
                        <MenuItem>Closed</MenuItem>
                    </Menu>

                    {/* Edit Job */}
                    <Button
                        size="small"
                        variant="outlined"
                        startIcon={<EditOutlinedIcon />}
                        sx={{
                            textTransform: "none",
                            borderRadius: 2
                        }}
                    >
                        Edit Job
                    </Button>

                    {/* Close Job */}
                    <Button
                        size="small"
                        variant="outlined"
                        startIcon={<CloseOutlinedIcon />}
                        sx={{
                            textTransform: "none",
                            borderRadius: 2
                        }}
                    >
                        Close Job
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ViewJobHeader