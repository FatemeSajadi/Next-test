'use client';

import * as React from 'react';
import {Button, Link, Box, Typography, Divider, Container, OutlinedInput} from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import {Lock, Email, QrCode2} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { yellow, grey,white} from '@mui/material/colors';
import { FcGoogle } from 'react-icons/fc';


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[700]),
    fontWeight: 500,
    '&:hover': {
      backgroundColor: yellow[900],
    },
}));

const GoogleButton = styled(Button)(({ theme }) => ({
color: theme.palette.getContrastText(grey[200]),
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
        <Container component="main"  >

            <Box
            className="rounded shadow-md mt-3 p-3 md:p-5 
            bg-zinc-50 dark:bg-zinc-900 grid gap-4"

            >
                <Box className="col-start-1 col-end-7">
                    <Typography component="h1" variant="h5">
                        Log in to Iran source
                    </Typography> 
                </Box>

                <Box className="col-start-1 col-end-7 md:col-start-1 md:col-end-4">
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
                        <FormControl className='dark:outline-gray-500' fullWidth sx={{ mt: 1, mb:1 }}>
                            <InputLabel className='dark:text-gray-500' htmlFor="outlined-adornment-email">Email Address or Username</InputLabel>
                            <OutlinedInput
                                className='dark:text-gray-500'
                                id="outlined-adornment-email"
                                startAdornment={<InputAdornment className='dark:text-gray-500' position="start"><Email/></InputAdornment>}
                                label="Email Address or Username"
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{ mt: 1, mb:1 }} variant="outlined">
                            <InputLabel className='dark:text-gray-500' htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                className='dark:text-gray-500'
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock className='dark:text-gray-500' />
                                    </InputAdornment>
                                }
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    className='dark:text-gray-500'
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
                            <FormHelperText
                                className="text-slate-400 dark:text-slate-500"
                                id="outlined-adornment-password-helper-text"
                            >
                                At least 8 caractere
                            </FormHelperText>

                        </FormControl>
                        <ColorButton 
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                            className="bg-amber-400"
                        >
                            Log in
                        </ColorButton>

                        <Link 
                            href="#" 
                            variant="body2" 
                            underline="none" 
                            fontWeight={500} 
                            className="text-slate-400 dark:text-slate-500"
                        >
                            Forgot your password?
                        </Link>
                        <Divider className='dark:bg-gray-500' sx={{ mt: 2}} fullWidth />
                        <GoogleButton
                            className='bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50'
                            type="submit"
                            fullWidth
                            variant="contained"
                            startIcon={<FcGoogle/>}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log in with google
                        </GoogleButton>
                        <Typography
                            className='text-slate-400 dark:text-slate-500'
                            sx={{fontSize:15}}>
                            Don't have an account?
                            <Link className='text-gray-950 dark:text-gray-50' href="#" variant="body2" underline="none" fontWeight={600} color={grey[900]}>
                                {"Sign Up"}
                            </Link>
                        </Typography>

                    </Box>
                </Box>

                <Box 
                className=" col-start-1 col-end-7 md:col-end-7 md:col-span-3
                 flex flex-col justify-end items-center
                 border rounded dark:border-gray-500	"
                sx={{ p:3, textAlign: 'center'}} 
                >
                    <QrCode2 className='text-9xl' />
                    <Typography variant="h5" >
                        Log in with QR code
                    </Typography>
                    <Typography variant="h6" >
                        Scan this code your mobile to login.
                    </Typography>
                </Box>
            </Box>
        
        </Container>
    </ThemeProvider>
  );
}