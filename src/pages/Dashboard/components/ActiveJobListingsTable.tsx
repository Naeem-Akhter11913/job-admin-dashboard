import {
    Box,
    Typography,
    Button,
    Chip,
    Stack
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const jobs = [
    {
        title: "Frontend Developer",
        status: "Hiring",
        applications: "38 / 8",
        shortlisted: "8 / 12",
        date: "5 days",
    },
    {
        title: "UX/UI Designer",
        status: "Closed",
        applications: "52 / 15",
        shortlisted: "15 / 30",
        date: "1 day",
    },
    {
        title: "Backend Developer",
        status: "Hiring",
        applications: "24 / 24",
        shortlisted: "4 / 6",
        date: "1 day",
    },
];

export default function ActiveJobListingsTable() {
    return (
        <>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
            >
                <Typography fontWeight={600} fontSize={18}>
                    Active Job Listings
                </Typography>

                <Button
                    variant="outlined"
                    size="small"
                    startIcon={<AddIcon />}
                    sx={{
                        textTransform: "none",
                        borderRadius: 2,
                    }}
                >
                    Post a Job
                </Button>
            </Stack>

            <Stack
                direction="row"
                sx={{
                    fontSize: 13,
                    color: "text.secondary",
                    mb: 1.5,
                    px: 1,
                }}
                spacing={4}
            >
                <Box flex={2} textAlign={'start'}>Job Title</Box>
                <Box flex={1} textAlign={'start'}>Status</Box>
                <Box flex={1} textAlign={'start'}>Applications</Box>
                <Box flex={1} textAlign={'start'}>Shortlisted</Box>
                <Box flex={1} textAlign={'start'}>Date</Box>
            </Stack>

            {jobs.map((job, index) => (
                <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    textAlign={'start'}
                    sx={{
                        background: "#ffffff",
                        borderRadius: 2,
                        p: "5px",
                        mb: 1.5,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                    }}
                >
                    <Box flex={2}>
                        <Typography fontWeight={500}>{job.title}</Typography>
                    </Box>

                    <Box flex={1}>
                        <Chip
                            label={job.status}
                            size="small"
                            sx={{
                                background:
                                    job.status === "Hiring"
                                        ? "#E6F4EA"
                                        : "#ECEAFD",
                                color:
                                    job.status === "Hiring"
                                        ? "#2E7D32"
                                        : "#5E5CE6",
                                fontWeight: 500,
                            }}
                        />
                    </Box>

                    <Box flex={1}>
                        <Typography>{job.applications}</Typography>
                    </Box>

                    <Box flex={1}>
                        <Typography>{job.shortlisted}</Typography>
                    </Box>

                    <Box flex={1}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography fontSize={13} color="text.secondary">
                                {job.date}
                            </Typography>

                            <Button
                                size="small"
                                endIcon={<ChevronRightIcon />}
                                sx={{
                                    textTransform: "none",
                                    minWidth: "auto",
                                }}
                            >
                                View
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            ))}
        </>
    );
}