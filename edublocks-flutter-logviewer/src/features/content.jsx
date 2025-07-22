import { useEffect, useState } from 'react';
import './sidebar.css';
import { TextField, Box, Button, Typography } from '@mui/material';
import { getParticipantInfo } from "../services/getParticipantInfo.js"
import DocCard from '../components/docCard.jsx';
import { format } from 'date-fns';

function Content({ PID, AID }) {

    const [participantInfo, setParticipantInfo] = useState("");

    useEffect(() => {
        getParticipantInfo(PID, AID)
            .then(data => {
                // Find the index of the first "start_activity"
                const startIndex = data.findIndex(doc => doc.activity === "start_activity");

                // If found, slice the array to keep only entries from start_activity onward
                const filteredData = startIndex !== -1 ? data.slice(startIndex) : data;

                setParticipantInfo(filteredData);
            });
    }, [PID, AID]);

    return <Box 
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="stretch"
        sx={{
            p: 2,
            overflowY: "auto",
            height: "100%",     
            width: "100%"
    }}>

        {Array.isArray(participantInfo) && participantInfo.length > 0 ? (
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Feature: {participantInfo[0].FID}</Typography>
        ) : (
            <Typography>Loading...</Typography>
        )}

        {Array.isArray(participantInfo) && participantInfo.length > 0 ? (
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Interactions: {participantInfo.length}</Typography>
        ) : (
            <Typography>Loading...</Typography>
        )}

        {Array.isArray(participantInfo) && participantInfo.length > 1 ? (() => {
            const startTime = new Date(participantInfo[1].time);
            const endTime = new Date(participantInfo[participantInfo.length - 1].time);
            const diffMs = endTime - startTime;

            const minutes = Math.floor(diffMs / 60000);
            const seconds = Math.floor((diffMs % 60000) / 1000);

            return (
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Time on task: {minutes}m {seconds}s
                </Typography>
            );
        })() : (
            <Typography>Loading...</Typography>
        )}

        {Array.isArray(participantInfo) && participantInfo.length > 0 ? (
            participantInfo.map((doc, index) => (
                
                <Typography sx={{ mb: 1 }}>
                    <span style={{ color: 'green' }}>{format(new Date(doc.time), 'HH:mm:ss')}</span>{' '}
                    <span style={{ color: 'red' }}>{doc.activity}</span>: <strong>{String(doc.value)}</strong>
                </Typography>
            ))
        ) : (
            <Typography>Loading...</Typography>
        )}
    </Box>
}

export default Content;