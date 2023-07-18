'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import {Lock, Email, QrCode2} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { yellow, grey} from '@mui/material/colors';
import { FcGoogle } from 'react-icons/fc';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[700]),
    backgroundColor: yellow[700],
    fontWeight: 500,
    '&:hover': {
      backgroundColor: yellow[900],
    },
}));

const GoogleButton = styled(Button)(({ theme }) => ({
color: theme.palette.getContrastText(grey[200]),
backgroundColor: grey[200],
fontWeight: 500,
'&:hover': {
    backgroundColor: grey[300],
},
}));

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" backgroundColor={grey[300]} >

      <Box
            sx={{
                marginTop: 8,
                boxShadow: 1,
                p:5,
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `"header header header header"
            "loginform loginform . qrcode"
            `,
            }}
            >
                <Box sx={{ gridArea: 'header' }}>
                    <Typography component="h1" variant="h5">
                        Log in to Iran source
                    </Typography> 
                </Box>

  
            <Box sx={{ gridArea: 'loginform'}}>


                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>

                    <FormControl fullWidth sx={{ mt: 1, mb:1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Email Address or Username</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start"><Email/></InputAdornment>}
                            label="Email Address or Username"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 1, mb:1 }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Lock />
                                </InputAdornment>
                            }
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                            <FormHelperText id="outlined-adornment-password-helper-text">At least 8 caractere</FormHelperText>

                    </FormControl>
                    <ColorButton 
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}
                    >
                        Log in
                    </ColorButton>

                    <Link href="#" variant="body2" underline="none" fontWeight={500} color={grey[900]}>
                        Forgot your password?
                    </Link>
                    <Divider sx={{ mt: 2}} fullWidth />
                    <GoogleButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        startIcon={<FcGoogle/>}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Log in with google
                    </GoogleButton>
                    <Typography color={grey[600]} sx={{fontSize:15}}>
                    Don't have an account?
                    <Link href="#" variant="body2" underline="none" fontWeight={600} color={grey[900]}>
                        {"Sign Up"}
                    </Link>
                    </Typography>

                </Box>
            </Box>
            <Box sx={{ gridArea: 'qrcode', p:3, textAlign: 'center'}} border={1} borderColor={grey[300]} borderRadius={5}>
                <QrCode2 sx={{ fontSize: 100}}/>
                <Typography variant="h5" >
                    Log in with QR code
                </Typography>
                <Typography variant="h6" >
                    Scan this code your mobile to login.
                </Typography>
            </Box>
        </Box>
        {/* <Box
          sx={{
            marginTop: 8,
            boxShadow: 1,
            p:5
           
          }}
          xs={{p:0}}
        >
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography component="h1" variant="h5">
                        Log in to Iran source
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>

                        <FormControl fullWidth sx={{ mt: 1, mb:1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Email Address or Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start"><Email/></InputAdornment>}
                                label="Email Address or Username"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mt: 1, mb:1 }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                }
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                                <FormHelperText id="outlined-adornment-password-helper-text">At least 8 caractere</FormHelperText>

                        </FormControl>
                        <ColorButton 
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Log in
                        </ColorButton>

                        <Link href="#" variant="body2" underline="none" fontWeight={500} color={grey[900]}>
                            Forgot your password?
                        </Link>
                        <Divider sx={{ mt: 2}} fullWidth />
                        <GoogleButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            startIcon={<FcGoogle/>}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log in with google
                        </GoogleButton>
                        <Typography color={grey[600]} sx={{fontSize:15}}>
                        Don't have an account?
                        <Link href="#" variant="body2" underline="none" fontWeight={600} color={grey[900]}>
                            {"Sign Up"}
                        </Link>
                        </Typography>

                    </Box>
                </Grid>
                <Grid item border={1} borderColor={grey[300]} borderRadius={10}>
                    <QrCode2/>
                    <Typography variant="h5" >
                        Log in with QR code
                    </Typography>
                    <Typography variant="h6" >
                        Scan this code your mobile to login.
                    </Typography>
                </Grid>
            </Grid>

        </Box> */}
      </Container>
    </ThemeProvider>
  );
}