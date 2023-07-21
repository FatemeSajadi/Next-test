'use client';

import * as React from 'react';
import {Button, Link, Box, Typography, Divider, Container, OutlinedInput} from '@mui/material';
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
import { yellow, grey} from '@mui/material/colors';
import { FcGoogle } from 'react-icons/fc';
import { useTranslation } from "next-i18next";

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
    const { t } =  useTranslation('common')

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
                            {t('formtitle')}
                        </Typography> 
                    </Box>

                    <Box className="col-start-1 col-end-7 md:col-start-1 md:col-end-4">
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
                            <FormControl className='w-full dark:outline-gray-500 my-2'>
                                <InputLabel className='dark:text-gray-500' htmlFor="outlined-adornment-email">{t('emaillabel')}</InputLabel>
                                <OutlinedInput
                                    className='dark:text-gray-500'
                                    id="outlined-adornment-email"
                                    startAdornment={<InputAdornment className='dark:text-gray-500' position="start"><Email/></InputAdornment>}
                                    label={t('emaillabel')}
                                />
                            </FormControl>
                            <FormControl className='w-full my-2' variant="outlined">
                                <InputLabel className='dark:text-gray-500' htmlFor="outlined-adornment-password">{t('passlabel')}</InputLabel>
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
                                    label={t('passlabel')}
                                />
                                <FormHelperText
                                    className="text-slate-400 dark:text-slate-500"
                                    id="outlined-adornment-password-helper-text"
                                >
                                    {t('helpertext')}
                                </FormHelperText>

                            </FormControl>
                            <ColorButton 
                                type="submit"
                                variant="contained"
                                className="my-3 w-full bg-amber-400"
                            >
                                {t('login')}
                            </ColorButton>

                            <Link 
                                href="#" 
                                variant="body2" 
                                underline="none" 
                                className="font-medium text-slate-400 dark:text-slate-500"
                            >
                                {t('forgot')}
                            </Link>
                            <Divider className='mt-3 mb-3 dark:bg-gray-500 w-full mt-2' />
                            <GoogleButton
                                className='mb-3 w-full bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50'
                                type="submit"                              
                                variant="contained"
                                startIcon={<FcGoogle/>}
                            >
                                {t('google')}
                            </GoogleButton>
                            <Typography className='text-base text-slate-400 dark:text-slate-500'>
                                {t('acount')}
                                <Link className='font-semibold text-gray-950 dark:text-gray-50' href="#" variant="body2" underline="none">
                                    {t('signup')}
                                </Link>
                            </Typography>
                        </Box>
                    </Box>

                    <Box 
                    className=" col-start-1 col-end-7 md:col-end-7 md:col-span-3
                    flex flex-col justify-end items-center
                    border rounded dark:border-gray-500	text-center p-4"
                    >
                        <QrCode2 className='text-9xl' />
                        <Typography variant="h5" >
                            {t('qrcode')}
                        </Typography>
                        <Typography variant="h6" >
                            {t('scan')}.
                        </Typography>
                    </Box>
                </Box>
            
            </Container>
        </ThemeProvider>
    );
}