
import React from 'react';
import { Box, Button, Checkbox, RadioGroup, Select, TextField } from '@mui/material';

const PolicyDetails = () => (
  <Box sx={ padding: '20px' }>
    <TextField label="Path ID" name="pathId" variant="outlined" required=true fullWidth=true placeholder="Enter Path ID" />
    <Select label="Billing Frequency" name="billingFrequency" variant="outlined" fullWidth=true required=true />
    <Checkbox name="autoRenew" color="primary" /> Auto Renew
    <RadioGroup name="policyType" row=true />
    <Button color="primary" onClick={() => { /* navigate */ }}>Next</Button>
    <Button color="success" onClick={() => { /* submit */ }}>OK</Button>
    <Button color="error" onClick={() => { /* reset */ }}>Cancel</Button>
  </Box>
);

export default PolicyDetails;
