import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TextField from '@mui/material/TextField';
import { useContext, useEffect, useState } from 'react';
import { CambiosContext } from '../context/Context';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { state, setState } = useContext(CambiosContext);
  const router = useRouter();

  interface MinhaInterface {
    target: {
      name: string;
      value: string;
    };
  }
  const { email, password } = loginData;

  const handleChange = ({ target: { name, value } }: MinhaInterface) => {
    if (name === 'email') {
      setLoginData({
        ...loginData,
        email: value
      });
    } else if (name === 'password') {
      setLoginData({
        ...loginData,
        password: value
      });
    }
  };

  const LoginButtonAble = () => {
    const MIN_LENGTH_PASSWORD = 6;
    const re = /\S+@\S+\.\S+/;
    if (re.test(email) && password.length >= MIN_LENGTH_PASSWORD) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  };

  const onClickBtnLogin = () => {
    setState({
      ...state,
      email
    });
    router.push('/wallet');
  };

  useEffect(() => {
    LoginButtonAble();
  }, [loginData]);

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
            /*  m: 1,
            width: '97wh',
            height: '97vh' */
          }}
        >
          <TextField
            required
            id="outlined-required"
            helperText="Please enter your email"
            label="E-mail"
            /* defaultValue="nome@mail.com" */
            value={email}
            name="email"
            onChange={handleChange}
            /* sx={{ paddingTop: 1 }} */
          />
          <TextField
            id="demo-helper-text-misaligned"
            helperText="Please enter your password"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            margin="normal"
            value={password}
            onChange={handleChange}
            /* sx={{ paddingTop: 1 }} */
          />
        </Box>
        <Button
          disabled={btnDisabled}
          variant="outlined"
          color="primary"
          size="medium"
          onClick={onClickBtnLogin}
        >
          Fazer Login
        </Button>
      </Box>
    </main>
  );
}
