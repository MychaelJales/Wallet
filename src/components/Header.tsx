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
    state: { email }
  } = useContext(CambiosContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {`MJ Wallet `}
            <AccountBalanceWalletIcon />
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {`Olá, ${email}`}
          </Typography>
          <Typography variant="h6">{`Total XXX BRL`}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}