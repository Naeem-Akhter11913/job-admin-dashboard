import * as React from "react";
import {
    Typography,
    IconButton,
    Stack,
    Collapse,
    Switch,
    Button,
    TextField,
    Box
} from "@mui/material";

import { Grid } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ApplicationSettings: React.FC = () => {
    const [open, setOpen] = React.useState(true);
    const [requireResume, setRequireResume] = React.useState(true);

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
                        Application Settings
                    </Typography>
                </Stack>

                <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                </IconButton>
            </Stack>

            <Collapse in={open} timeout="auto" unmountOnExit >
                <Grid container spacing={2} alignItems="center" textAlign={'start'} >
                    <Grid size={4}>
                        <Typography variant="body2">
                            Resume Upload
                        </Typography>
                    </Grid>

                    <Grid
                        size={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        
                    >
                        <Typography variant="body2" color="text.secondary">
                            Require resume
                        </Typography>

                        <Switch
                            checked={requireResume}
                            onChange={(e) => setRequireResume(e.target.checked)}
                        />
                    </Grid>

                    {/* Screening Questions */}
                    <Grid size={4}>
                        <Typography variant="body2">
                            Screening Questions
                        </Typography>
                    </Grid>

                    <Grid
                        size={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Button
                            size="small"
                            variant="outlined"
                            startIcon={<AddIcon />}
                            sx={{
                                textTransform: "none",
                                borderRadius: 2
                            }}
                        >
                            Add Questions
                        </Button>

                        <IconButton size="small">
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </Grid>

                    {/* Application Deadline */}
                    <Grid size={4}>
                        <Typography variant="body2">
                            Application Deadline
                        </Typography>
                    </Grid>

                    <Grid
                        size={8}
                        display="flex"
                        alignItems="center"
                        gap={1}
                    >
                        <TextField
                            size="small"
                            type="date"
                            defaultValue="2024-01-01"
                            sx={{ maxWidth: 180 }}
                        />

                        <IconButton size="small">
                            <CalendarMonthIcon fontSize="small" />
                        </IconButton>

                        <IconButton size="small" sx={{ ml: "auto" }}>
                            <MoreVertIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Collapse>
        </Box>
    );
};

export default ApplicationSettings;