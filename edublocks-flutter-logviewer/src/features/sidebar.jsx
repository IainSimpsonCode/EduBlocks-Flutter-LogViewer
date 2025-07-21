import { useState } from 'react';
import './sidebar.css';
import { TextField, Box, Button } from '@mui/material';

function Sidebar({ setPID, setAID }) {

    const [localPID, setLocalPID] = useState('');
    const [localAID, setLocalAID] = useState('');

    return <Box id="sidebar" sx={{
        p: 2,
        overflowY: "auto",
        height: "300px"        
    }}>
        <TextField 
            label="PID" 
            variant="outlined" 
            value={localPID}
            onChange={(e) => setLocalPID(e.target.value.toString())}
            slotProps={{
            input: {
            sx: {
                backgroundColor: '#fff',
                paddingX: 1,
                mb: 2
            },
            }
        }} />
        <TextField 
            label="Task" 
            variant="outlined" 
            value={localAID}
            onChange={(e) => setLocalAID(e.target.value.toString())}
            slotProps={{
            input: {
            sx: {
                backgroundColor: '#fff',
                paddingX: 1,
                mb: 2
            },
            }
        }} />
        <Button variant='contained' fullwidth 
        onClick={() => {
            setPID(localPID);
            setAID(localAID);
        }}
        slotProps={{
            input: {
            sx: {
                paddingX: 1,
                mb: 2
            },
            }
        }}>Sort</Button>
    </Box>
}

export default Sidebar;