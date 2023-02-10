import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading=()=> {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="success" />
    </Stack>
  );
}