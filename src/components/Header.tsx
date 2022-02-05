import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { CambiosContext } from '../context/Context';

export default function Header() {
  const {
    state: { email, totalExpenses }
  } = useContext(CambiosContext);
  return (
    <Box sx={{ flexGrow: 1, borderRadius: '10px' }}>
      <AppBar position="static" sx={{ borderRadius: '5px' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {`MJ Wallet `}
            <AccountBalanceWalletIcon />
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`Olá, ${email}`}
          </Typography>
          <Typography variant="h6">{`Total ${totalExpenses} BRL`}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
