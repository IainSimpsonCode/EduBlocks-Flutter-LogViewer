import Sidebar from '../features/sidebar';
import App from '../app/App';
import Content from '../features/content';
import { Box } from '@mui/material';
import { useState } from 'react';

function LogViewPage() {

  const [PID, setPID] = useState(null);
  const [AID, setAID] = useState(null);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw', // ensure full width
      overflow: 'hidden' // prevent scrollbars unless needed
    }}>
      <Sidebar setPID={ setPID } setAID={ setAID } />
      <Box
        display="flex"
        justifyContent="center"  // Horizontal center
        alignItems="center"      // Vertical center
        minHeight="100%"        // Full viewport height
        width="100%"
        >
        <Content PID={ PID } AID={ AID } />
      </Box>
    </div>
  );
}

export default LogViewPage;

