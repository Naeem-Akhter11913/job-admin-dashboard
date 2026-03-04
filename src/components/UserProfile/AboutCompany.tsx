import React, { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Paper,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const MAX_LENGTH = 1120;

const AboutCompany: React.FC = () => {
    const [value, setValue] = useState(
        "Innovating Today's Techlogy for Tomorrow."
    );

    return (
        <Paper elevation={1} sx={{ p: 2 }} >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <DescriptionOutlinedIcon
                    sx={{ mr: 1, color: "#6c63ff" }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    About Company
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                }}
            >
                <Typography
                    variant="body2"
                    sx={{ color: "#666" }}
                >
                 Innovating Today's Techlogy for Tomorrow.
                </Typography>

                <Typography
                    variant="body2"
                    sx={{ color: "#999" }}
                >
                    {value.length}/{MAX_LENGTH}
                </Typography>
            </Box>

            <TextField
                fullWidth
                multiline
                minRows={3}
                // value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter your text here or create a value..."
                inputProps={{ maxLength: MAX_LENGTH }}
                sx={{
                    "& .MuiInputBase-root": {
                        backgroundColor: "#f6f5fa",
                        borderRadius: 2,
                    },
                }}
            />
        </Paper>
    );
};

export default AboutCompany;