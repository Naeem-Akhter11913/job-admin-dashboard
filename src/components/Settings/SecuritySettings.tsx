import { useState } from "react";
import {
    Paper,
    Stack,
    Typography,
    Box,
    Divider,
    TextField,
    InputAdornment,
    IconButton,
    Button,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

export default function SecuritySettings() {
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const renderPasswordField = (
        label: string,
        show: boolean,
        setShow: React.Dispatch<React.SetStateAction<boolean>>
    ) => (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
        >
            <Typography sx={{ minWidth: 180 }} fontWeight={500}>
                {label}
            </Typography>

            <TextField
                fullWidth
                type={show ? "text" : "password"}
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setShow(!show)} edge="end">
                                {show ? (
                                    <VisibilityOffOutlinedIcon />
                                ) : (
                                    <VisibilityOutlinedIcon />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        // height: 40,
                        "& fieldset": {
                            borderColor: "#e0e0e0",
                        },
                        "&:hover fieldset": {
                            borderColor: "#e0e0e0",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#e0e0e0",
                            borderWidth: "1px",
                        },
                        "& .MuiOutlinedInput-input": {
                            // padding: "0 10px", // controlled clean padding
                            // height: "100%",
                            boxSizing: "border-box",
                        },
                    },
                }}
            />
        </Stack>
    );

    return (
        <Paper
            elevation={1} sx={{ p: 2 }}>
            {/* Header */}
            <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                    sx={{
                        width: 36,
                        height: 36,
                        borderRadius: 2,
                        bgcolor: "#ede9fe",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <SecurityOutlinedIcon sx={{ color: "#7c3aed" }} />
                </Box>

                <Box>
                    <Typography fontWeight={600} fontSize={18}>
                        Security
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Update your password
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ my: 1 }} />

            <Stack spacing={3}>
                {renderPasswordField(
                    "Current Password",
                    showCurrent,
                    setShowCurrent
                )}
                {renderPasswordField("New Password", showNew, setShowNew)}
                {renderPasswordField(
                    "Confirm New Password",
                    showConfirm,
                    setShowConfirm
                )}

                <Stack direction="row" justifyContent="flex-end">
                    <Button
                        variant="contained"
                        sx={{
                            minWidth: 180,
                            height: 48,
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 500,
                            background:
                                "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)",
                            boxShadow: "none",
                            "&:hover": {
                                background:
                                    "linear-gradient(135deg, #6d28d9 0%, #4f46e5 100%)",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Save Changes
                    </Button>
                </Stack>
            </Stack>
        </Paper>
    );
}