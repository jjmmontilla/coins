import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Logo } from '../utils'

export default function Header() {
  return (
    <div className='header px-5'>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
        <div>
            {Logo}
        </div>
        <Tooltip title="Josefina Montilla">
          <IconButton
              size="small"
              sx={{ ml: 2 }}
          >
            <Avatar sx={{ width: 32, height: 32 }}>JM</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
}
