import {
    Typography,
    Stack,
    Box,
    Button,
    Chip,
    Checkbox,
    Divider,
    Paper,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Subscription() {
    return (
        <Paper elevation={1} sx={{ p: 2 }}>
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
                    <CreditCardIcon sx={{ color: "#7c3aed" }} />
                </Box>

                <Box>
                    <Typography fontWeight={600} fontSize={18}>
                        Subscription
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        View and manage your plan & billing
                    </Typography>
                </Box>
            </Stack>

            <Divider sx={{ my: 2 }} />

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 1.5 }}
            >
                <Typography fontWeight={500}>
                    Professional Plan
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                       justifyContent={'space-between'}
                    sx={{
                        backgroundColor: "grey.100",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        minWidth:200
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize:15
                        }}
                    >₹ 2999 / month</Typography>
                    <Checkbox
                        checked
                        sx={{
                            color: "#7c3aed",
                            "&.Mui-checked": { color: "#7c3aed" },
                            p: 0,
                        }}
                    />
                </Stack>
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 1 }}
                
            >
                <Typography variant="body2" color="text.secondary">
                    10 Active Job Postings
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent={'space-between'}
                    sx={{
                        backgroundColor: "grey.100",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        minWidth:200
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: 15
                        }}
                    >2 Team Members</Typography>
                    <Checkbox
                        checked
                        sx={{
                            color: "#14b8a6",
                            "&.Mui-checked": { color: "#14b8a6" },
                            p: 0,
                        }}
                    />
                </Stack>
            </Stack>

            {/* Buttons */}
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <Button
                    variant="contained"
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        px: 3,
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
                    Upgrade Plan
                </Button>

                <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                        px: 3,
                        borderColor: "#e5e7eb",
                        color: "text.primary",
                    }}
                >
                    Manage Billing
                </Button>
            </Stack>
        </Paper>
    );
}