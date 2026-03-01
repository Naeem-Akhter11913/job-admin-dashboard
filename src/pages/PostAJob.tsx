import { Grid, styled } from "@mui/material"
import Paper from "@mui/material/Paper"
import JobDetailsCard from "../components/jobDetails/JobDetailsCard";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const PostAJob = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Item><JobDetailsCard /></Item>
      </Grid>
      <Grid size={6}>
        <Item>item=6</Item>
      </Grid>
      <Grid size={6}>
        <Item>item=6</Item>
      </Grid>
      <Grid size={6}>
        <Item>item=6</Item>
      </Grid>
      <Grid size={6}>
        <Item>item=6</Item>
      </Grid>
    </Grid>
  )
}

export default PostAJob