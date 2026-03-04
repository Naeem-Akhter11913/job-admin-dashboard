import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";

import JobDetailsCard from "../components/jobDetails/JobDetailsCard";
import SalaryExperience from "../components/postJob/SalaryExperience";
import CompanyInfo from "../components/postJob/CompanyInfo";
import Requirements from "../components/postJob/Requirements";
import ApplicationSettings from "../components/postJob/ApplicationSettings";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  borderRadius: 8
}));

const PostAJob = () => {
  return (
    <Box>
      <Item sx={{ mb: 2 }}>
        <JobDetailsCard />
      </Item>

      <Masonry columns={2} spacing={2}>
        <Item>
          <SalaryExperience />
        </Item>

        <Item>
          <CompanyInfo />
        </Item>

        <Item>
          <Requirements />
        </Item>

        <Item>
          <ApplicationSettings />
        </Item>
      </Masonry>
    </Box>
  );
};

export default PostAJob;