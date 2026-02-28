import { Box, Typography } from "@mui/material";
import { LineChart } from '@mui/x-charts/LineChart';

const margin = { right: 24 };

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 2800, 3908, 1800, 3800, 4300];

const xLabels = [
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
];

export default function ActiveJobListings() {
  return (
    <Box>
      <Typography fontWeight={600} mb={2}>
        Active Job Listings
      </Typography>

      <LineChart
        height={160}
        series={[
          { data: pData, label: 'Applications', curve: "monotoneX" },
          { data: uData, label: 'Views', curve: "monotoneX" },
        ]}
        xAxis={[{ scaleType: 'point', data: xLabels }]}
        yAxis={[{ width: 40 }]}
        margin={margin}
      />
    </Box>
  );
}