import JobListingTable from "../components/jobListing/JobListingTable"
import JobFilters from "../components/jobListing/JobFilters"
import { Box } from "@mui/material"
import SalaryExperienceCard from "../components/jobListing/SalaryExperienceCard"
import RequirementsCard from "./Dashboard/components/RequirementsCard"

const JobListing = () => {
  return (
    <>
      <JobFilters />
      <JobListingTable />
      <Box display={'flex'} gap={2} justifyContent={'space-between'} mt={2}>
        <SalaryExperienceCard />
        <RequirementsCard />
      </Box>
    </>
  )
}

export default JobListing