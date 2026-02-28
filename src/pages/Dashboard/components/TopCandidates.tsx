import {
  Box,
  Typography,
  Avatar,
  Chip,
  Stack,
  Grid,
  Link
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const candidates = [
  {
    name: "Adam Johnson",
    role: "Frontend Developer",
    salary: "₹8–12 LPA",
    skills: "React, Node.js",
    status: "Hiring",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Arjun Patel",
    role: "Frontend Developer",
    salary: "₹8–12 LPA",
    skills: "Django, SQL",
    status: "Hiring",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Jennifer Miller",
    role: "Backend Developer",
    salary: "₹8–16 LPA",
    skills: "MongoDB, Mongoose",
    status: "Closed",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Sophia Brown",
    role: "Backend Developer",
    salary: "₹8–10 LPA",
    skills: "AWS, S3",
    status: "Closed",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
];

export default function TopCandidates() {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Typography fontWeight={600} fontSize={18}>
          Top Candidates
        </Typography>

        <Link
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          View All <ChevronRightIcon fontSize="small" />
        </Link>
      </Stack>

      {/* Grid (MUI v6 syntax) */}
      <Grid container spacing={3}>
        {candidates.map((candidate, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              
              {/* Avatar */}
              <Box sx={{ position: "relative" }}>
                <Avatar
                  src={candidate.image}
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

              {/* Info */}
              <Box flex={1}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight={600}>
                    {candidate.name}
                  </Typography>

                  <Chip
                    label={candidate.status}
                    size="small"
                    sx={{
                      background:
                        candidate.status === "Hiring"
                          ? "#E6F4EA"
                          : "#ECEAFD",
                      color:
                        candidate.status === "Hiring"
                          ? "#2E7D32"
                          : "#5E5CE6",
                      fontWeight: 500,
                    }}
                  />
                </Stack>

                <Typography fontSize={14} color="text.secondary" mt={0.5}  textAlign={'start'}>
                  {candidate.role}
                </Typography>

                <Typography fontSize={13} mt={1}  textAlign={'start'}>
                  {candidate.salary} &nbsp; {candidate.skills}
                </Typography>
              </Box>    

            </Stack>
          </Grid>
        ))}
      </Grid>
    </>
  );
}