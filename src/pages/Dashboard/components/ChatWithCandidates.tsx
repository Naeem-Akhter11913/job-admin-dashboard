import {
  Box,
  Typography,
  Avatar,
  Stack,
  TextField,
  Button,
  Link
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const chats = [
  {
    name: "Adam Johnson",
    role: "Frontend Developer",
    message:
      "Hi Adam, we reviewed your profile and we'd like to proceed forward with the application. Are you available for a quick call tomorrow?",
    time: "10 min ago",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jennifer Miller",
    role: "Backend Developer",
    message:
      "Could you please share more details about the backend tech-stack?",
    time: "1 hour ago",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    message:
      "I have sent the design case study as requested.",
    time: "1 day ago",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function ChatWithCandidates() {
  return (
    <Box
      sx={{
        background: "#f8f9ff",
        // borderRadius: 3,
        // p: 3,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        height: 500,
      }}
    >
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography fontWeight={600} fontSize={18}>
          Chat with Candidates
        </Typography>

        <Link underline="none" sx={{ cursor: "pointer", fontSize: 14 }}>
          View All Chats
        </Link>
      </Stack>

      {/* Chat List */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        {chats.map((chat, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={2}
            alignItems="flex-start"
            mb={3}
          >
            {/* Avatar */}
            <Box sx={{ position: "relative" }}>
              <Avatar
                src={chat.image}
                sx={{ width: 48, height: 48 }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 2,
                  right: 2,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#2ecc71",
                  border: "2px solid white",
                }}
              />
            </Box>

            {/* Message Content */}
            <Box flex={1}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontWeight={600}>
                  {chat.name}
                </Typography>

                <Typography fontSize={12} color="text.secondary">
                  {chat.time}
                </Typography>
              </Stack>

              <Typography
                fontSize={14}
                color="text.secondary"
                mb={1}
              >
                {chat.role}
              </Typography>

              {/* Message Bubble */}
              <Box
                sx={{
                  background: "#ffffff",
                  p: 1.5,
                  borderRadius: 2,
                  fontSize: 14,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                }}
              >
                {chat.message}
              </Box>
            </Box>
          </Stack>
        ))}
      </Box>

      {/* Input Section */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        mt={2}
      >
        <TextField
          fullWidth
          placeholder="Type a message..."
          size="small"
          sx={{
            background: "#ffffff",
            borderRadius: 2,
          }}
        />

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            textTransform: "none",
            borderRadius: 2,
            px: 3,
          }}
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
}