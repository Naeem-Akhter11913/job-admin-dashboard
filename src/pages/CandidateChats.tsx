import Paper from "@mui/material/Paper"
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  InputBase,
  Stack,
  Tab,
  Tabs,
  Typography,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SendIcon from "@mui/icons-material/Send";
import MoreVertIcon from "@mui/icons-material/MoreVert";


const CandidateChats = () => {
  const [tab, setTab] = useState(0);

  const chats = [
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      time: "2 min ago",
      active: true,
      unread: true,
    },
    {
      name: "Jennifer Miller",
      role: "Backend Developer",
      time: "1 hour ago",
    },
    {
      name: "Adam Johnson",
      role: "Frontend Developer",
      time: "4 hours ago",
    },
    {
      name: "Nidhi Sharma",
      role: "Marketing Executive",
      time: "Yesterday",
    },
    {
      name: "Rahul Verma",
      role: "Frontend Developer",
      time: "2 days ago",
    },
  ];

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Box display="flex" height="100vh" bgcolor="#f5f3fb">
        <Box
          width={320}
          bgcolor="#fff"
          borderRight="1px solid #eee"
          display="flex"
          flexDirection="column"
        >
          <Box p={2}>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 0.5,
                borderRadius: 3,
                backgroundColor: "#f4f1fb",
              }}
            >
              <SearchIcon sx={{ color: "#888" }} />
              <InputBase placeholder="Search..." sx={{ ml: 1, flex: 1 }} />
            </Paper>
          </Box>

          <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
            variant="fullWidth"
            sx={{
              "& .MuiTab-root": { textTransform: "none" },
              "& .Mui-selected": { color: "#6C5DD3" },
              "& .MuiTabs-indicator": { backgroundColor: "#6C5DD3" },
            }}
          >
            <Tab label="All Chats" />
            <Tab label="Shortlisted" />
            <Tab label="Archived" />
          </Tabs>

          <Divider />

          {/* Chat List */}
          <Box flex={1} overflow="auto">
            {chats.map((chat, index) => (
              <Box
                key={index}
                px={2}
                py={1.5}
                sx={{
                  cursor: "pointer",
                  backgroundColor: chat.active ? "#f1edff" : "transparent",
                  "&:hover": { backgroundColor: "#f6f3ff" },
                }}
              >
                <Stack direction="row" spacing={2}>
                  <Badge
                    variant="dot"
                    color="success"
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  >
                    <Avatar />
                  </Badge>

                  <Box flex={1}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography fontWeight={600}>
                        {chat.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {chat.time}
                      </Typography>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                      {chat.role}
                    </Typography>
                  </Box>

                  {chat.unread && (
                    <Box
                      width={8}
                      height={8}
                      borderRadius="50%"
                      bgcolor="red"
                      mt={1}
                    />
                  )}
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= RIGHT CHAT AREA ================= */}
        <Box flex={1} display="flex" flexDirection="column">
          {/* Profile Header */}
          <Box
            p={3}
            bgcolor="#fff"
            borderBottom="1px solid #eee"
          >
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ width: 56, height: 56 }} />
                <Box>
                  <Typography fontWeight={600} fontSize={18}>
                    Priya Sharma
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Frontend Developer • Delhi, India
                  </Typography>

                  <Stack direction="row" spacing={1} mt={1}>
                    <Chip label="JavaScript" size="small" />
                    <Chip label="Vue.js" size="small" />
                    <Chip label="Bootstrap" size="small" />
                  </Stack>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1}>
                <IconButton>
                  <PhoneOutlinedIcon />
                </IconButton>
                <IconButton>
                  <NotificationsNoneOutlinedIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Box>

          {/* Messages */}
          <Box
            flex={1}
            p={3}
            overflow="auto"
            display="flex"
            flexDirection="column"
            gap={2}
          >
            {/* Received */}
            <Stack direction="row" spacing={1}>
              <Avatar sx={{ width: 32, height: 32 }} />
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "#f1edff",
                  maxWidth: 450,
                }}
              >
                <Typography variant="body2">
                  Hi Priya, we reviewed your application for the Frontend
                  Developer position and would like to schedule a call.
                </Typography>
              </Paper>
            </Stack>

            {/* Sent */}
            <Stack direction="row" justifyContent="flex-end" spacing={1}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "#e2dcff",
                  maxWidth: 450,
                }}
              >
                <Typography variant="body2">
                  Yes, I'm available tomorrow at 3 PM. Looking forward!
                </Typography>
              </Paper>
              <Avatar sx={{ width: 32, height: 32 }} />
            </Stack>

            {/* Received */}
            <Stack direction="row" spacing={1}>
              <Avatar sx={{ width: 32, height: 32 }} />
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "#f1edff",
                  maxWidth: 450,
                }}
              >
                <Typography variant="body2">
                  Great! Here is the meeting link for today.
                </Typography>

                <Box
                  mt={1}
                  px={2}
                  py={0.5}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: "#dcd3ff",
                    display: "inline-block",
                    cursor: "pointer",
                  }}
                >
                  <Typography fontSize={13} color="#4b3bbd">
                    Meeting Link
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </Box>

          {/* Input */}
          <Box p={2} bgcolor="#fff" borderTop="1px solid #eee">
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                px: 2,
                py: 0.5,
                borderRadius: 3,
                backgroundColor: "#f4f1fb",
              }}
            >
              <InputBase
                placeholder="Type a message..."
                sx={{ flex: 1 }}
              />
              <IconButton sx={{ color: "#6C5DD3" }}>
                <SendIcon />
              </IconButton>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}

export default CandidateChats