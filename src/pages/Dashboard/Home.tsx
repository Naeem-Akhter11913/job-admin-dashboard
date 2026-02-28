import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import QuickViewCard from './components/QuickViewCard';
import RecentActivities from './components/RecentActivities';
import JobListingEngagement from './components/JobListingEngagement';
import ActiveJobListings from './components/ActiveJobListings';
import ActiveJobListingsTable from './components/ActiveJobListingsTable';
import TopCandidates from './components/TopCandidates';
import ChatWithCandidates from './components/ChatWithCandidates';

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


const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={7}>
          <Box display={'flex'} sx={{ gap: '15px' }} alignItems={'center'}>
            <QuickViewCard />
            <QuickViewCard />
            <QuickViewCard />
          </Box>
          <Item sx={{ mt: 2 }}>
            <ActiveJobListings />
          </Item>
          <Item sx={{ mt: 2 }}>
            <ActiveJobListingsTable />
          </Item>
          <Item sx={{ mt: 2 }}>
            <TopCandidates />
          </Item>
        </Grid>
        <Grid size={5}>
          <Grid container spacing={2}>
            <Grid size={5} >
              <QuickViewCard />
              <Item sx={{ mt: 2 }}>
                <RecentActivities />
              </Item>
            </Grid>
            <Grid size={7}><Item>
              <JobListingEngagement />
              </Item>
              </Grid>
            <Grid size={12}><Item>
              <ChatWithCandidates />
              </Item>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home