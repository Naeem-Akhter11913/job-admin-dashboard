import * as React from "react";
import {
  Avatar,
  Box,
  Paper,
  Stack,
  Typography,
  Badge
} from "@mui/material";

type ActivityStatus = "online" | "offline" | "shortlisted";

interface Activity {
  id: number;
  name: string;
  role: string;
  time: string;
  status: ActivityStatus;
  avatar: string;
}

const activities: Activity[] = [
  {
    id: 1,
    name: "Adam Johnson",
    role: "Frontend Developer",
    time: "2 hours ago",
    status: "online",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "UX/UI Designer",
    time: "5 hours ago",
    status: "offline",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: 3,
    name: "Rachel Green",
    role: "Shortlisted",
    time: "1 day ago",
    status: "shortlisted",
    avatar: "https://i.pravatar.cc/150?img=47"
  }
];

const getStatusColor = (status: ActivityStatus) => {
  switch (status) {
    case "online":
      return "#22c55e"; // green
    case "shortlisted":
      return "#3b82f6"; // blue
    default:
      return "#9ca3af"; // gray
  }
};

const RecentActivities: React.FC = () => {
  return (
    <>
      <Typography fontWeight={600} mb={2} textAlign={'start'}>
        Recent Activities
      </Typography>

      <Stack spacing={2} mb={3}>
        {activities.map((item) => (
          <Stack
            key={item.id}
            direction="row"
            spacing={1.5}
            alignItems="center"
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: getStatusColor(item.status),
                  boxShadow: "0 0 0 2px white",
                  width: 10,
                  height: 10,
                  borderRadius: "50%"
                }
              }}
            >
              <Avatar src={item.avatar} sx={{ width: 40, height: 40 }} />
            </Badge>

            <Box textAlign={'start'}>
              <Typography fontSize={14} fontWeight={600} lineHeight={1.2}>
                {item.name}
              </Typography>

              <Typography fontSize={12} color="text.secondary">
                {item.role}
              </Typography>

              <Typography fontSize={11} color="text.secondary">
                {item.time}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default RecentActivities;