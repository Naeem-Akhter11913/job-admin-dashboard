import Paper from "@mui/material/Paper"
import ViewJobHeader from "../components/ViewApplication/ViewJobHeader"
import ApplicantFilterBar from "../components/ViewApplication/ApplicantFilterBar"
import CandidatesTable from "../components/ViewApplication/CandidatesTable"

const ViewJobApplication = () => {
  return (
    <Paper elevation={1} sx={{p:2}}>
      <ViewJobHeader />
      <ApplicantFilterBar />
      <CandidatesTable/>
    </Paper>
  )
}

export default ViewJobApplication