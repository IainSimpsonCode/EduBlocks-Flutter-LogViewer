import { Paper, Box, Typography } from '@mui/material';

function DocCard({ activity, value, time }) {
    const valueWithLineBreaks = value.split('\n').map((line, index) => (
            <span key={index}>
                {line}
                <br />
            </span>
            ))

    return <Box //elevation={3}
        sx={{
            minHeight: "200px",
            height: "auto",
            width: '90%',
            p: 2,
            mb: 2,
            boxSizing: 'border-box',
            overflowWrap: 'break-word' 
        }}>
            <Typography><strong>Activity:</strong> {activity}</Typography>
            <Typography><strong>Value:</strong> {valueWithLineBreaks}</Typography>
            <Typography><strong>Time:</strong> {new Date(time).toLocaleString()}</Typography>
        </Box>
    
}

export default DocCard;