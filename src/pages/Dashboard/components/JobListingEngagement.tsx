import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

interface ChartItem {
    id: number;
    label: string;
    value: number;
    color: string;
}

const data: ChartItem[] = [
    {
        id: 0,
        label: "Frontend Developer",
        value: 40,
        color: "#7C8CF8"
    },
    {
        id: 1,
        label: "Backend Developer",
        value: 25,
        color: "#7ED1C2"
    },
    {
        id: 2,
        label: "UX/UI Designer",
        value: 20,
        color: "#B48CFF"
    },
    {
        id: 3,
        label: "Digital Marketing Manager",
        value: 15,
        color: "#FF8FA3"
    }
];

const totalApplications = 250;

const JobListingEngagement: React.FC = () => {
    return (
        <>
            <Typography fontWeight={600} mb={2} textAlign={'start'}>
                Job Listing Engagement
            </Typography>

            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                }}
                
            >
                <PieChart
                    width={171}
                    height={171}
                    slotProps={{
                        legend: {
                            sx: { display: "none" }
                        }
                    }}
                    series={[
                        {
                            innerRadius: 45,
                            outerRadius: 65,
                            paddingAngle: 2,
                            cornerRadius: 4,
                            data: data
                        }
                    ]}
                />

                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        pointerEvents: "none"
                    }}
                >
                    <Typography fontSize={11} color="text.secondary">
                        Total Applications
                    </Typography>
                    <Typography fontWeight={700} fontSize={22}>
                        {totalApplications}
                    </Typography>
                </Box>
            </Box>

            <Stack spacing={1.2} mt={2} mb={3}>
                {data.map((item) => (
                    <Stack
                        key={item.id}
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    backgroundColor: item.color
                                }}
                            />
                            <Typography fontSize={12}>
                                {item.label}
                            </Typography>
                        </Stack>

                        <Typography fontSize={12} color="text.secondary">
                            {item.value}%
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </>
    );
};

export default JobListingEngagement;