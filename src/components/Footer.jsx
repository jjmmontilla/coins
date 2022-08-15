import * as React from 'react';
import Box from '@mui/material/Box';

export default function Footer() {
  return (
    <div className='footer'>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
        <div>
          © 2022 CoinMarketCap. All rights reserved
        </div>
      </Box>
    </div>
  );
}
