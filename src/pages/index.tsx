import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          m: 1,
          width: '97wh',
          height: '97vh'
        }}
      >
        <Typography variant="h3" color="primary" component="div" gutterBottom>
          {`MJ Wallet `}
          <AccountBalanceWalletIcon fontSize="large" />
        </Typography>
        <Button variant="outlined" color="primary" href="/login" size="medium">
          Fazer Login
        </Button>
      </Box>
    </main>
  );
}
