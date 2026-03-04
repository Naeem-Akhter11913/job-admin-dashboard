import React from 'react';
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Stack,
    Grid,
    Paper,
} from '@mui/material';


const JobPreferences: React.FC = () => {
    return (
        <Paper elevation={1} sx={{p:2}} >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 3,
                        letterSpacing: '-0.01em',
                    }}
                >
                    Job Preferences
                </Typography>

                <Stack spacing={2.5}>
                    {/* Default Job Type */}
                    <Grid container alignItems="center" spacing={2}>
                        <Grid size={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                    Default Job Type
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={8}>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                defaultValue="Full-time"
                            >
                                <MenuItem value="Full-time">Full-time</MenuItem>
                                <MenuItem value="Part-time">Part-time</MenuItem>
                                <MenuItem value="Contract">Contract</MenuItem>
                                <MenuItem value="Internship">Internship</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                    {/* Default Experience */}
                    <Grid container alignItems="center" spacing={2}>
                        <Grid size={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                    Default Experience
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={8}>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                defaultValue="0-3 Years (Fresher)"
                            >
                                <MenuItem value="0-3 Years (Fresher)">0-3 Years (Fresher)</MenuItem>
                                <MenuItem value="3-5 Years">3-5 Years</MenuItem>
                                <MenuItem value="5-8 Years">5-8 Years</MenuItem>
                                <MenuItem value="8+ Years">8+ Years</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                    {/* Default Salary Range */}
                    <Grid container alignItems="center" spacing={2}>
                        <Grid size={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                    Default Salary Range
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={8}>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                defaultValue="₹6-12 LPA"
                            >
                                <MenuItem value="₹6-12 LPA">₹6-12 LPA</MenuItem>
                                <MenuItem value="₹12-18 LPA">₹12-18 LPA</MenuItem>
                                <MenuItem value="₹18-25 LPA">₹18-25 LPA</MenuItem>
                                <MenuItem value="₹25+ LPA">₹25+ LPA</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                    {/* Auto-Close Applications After */}
                    <Grid container alignItems="center" spacing={2}>
                        <Grid size={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                    Auto-Close Applications After
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={8}>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                defaultValue="30 days"
                            >
                                <MenuItem value="15 days">15 days</MenuItem>
                                <MenuItem value="30 days">30 days</MenuItem>
                                <MenuItem value="45 days">45 days</MenuItem>
                                <MenuItem value="60 days">60 days</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>

                    {/* Default Interview Mode */}
                    <Grid container alignItems="center" spacing={2}>
                        <Grid size={4}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                                    Default Interview Mode
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={8}>
                            <TextField
                                select
                                fullWidth
                                size="small"
                                defaultValue="In-Person"
                            >
                                <MenuItem value="In-Person">In-Person</MenuItem>
                                <MenuItem value="Virtual">Virtual</MenuItem>
                                <MenuItem value="Phone">Phone</MenuItem>
                                <MenuItem value="Video Call">Video Call</MenuItem>
                            </TextField>
                        </Grid>
                    </Grid>
                </Stack>
        </Paper>
    );
};

export default JobPreferences;