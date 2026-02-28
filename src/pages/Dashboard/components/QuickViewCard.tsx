import { Box, Paper, Typography } from "@mui/material";
import ListAltIcon from '@mui/icons-material/ListAlt';

const QuickViewCard = () => {
    return (
        <Paper elevation={1} sx={{
            p: 1, display: 'flex', gap: 2, width: '100%', background: "linear-gradient(135deg, #9F87FA 0%, #D2C4FB 100%)",
            color: "#fff"
        }}>
            <ListAltIcon />
            <Box>
                <Typography component={'p'} whiteSpace={'nowrap'}> Total Jobs</Typography>
                <Typography component={'p'} whiteSpace={'nowrap'} >8</Typography>
                <Typography component={'p'} whiteSpace={'nowrap'}>12% in this month</Typography>
            </Box>
        </Paper>
    )
}

export default QuickViewCard