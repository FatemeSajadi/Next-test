'use client';
import * as React from 'react';
import Login from "../components/LoginForm";
import LanguageSwitcher from "../components/LanguageSwitcher";
import PropTypes from 'prop-types';
import {
  Box,
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar,
  Typography,
  Button,
 } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";
import { useTranslation } from "next-i18next";
import {i18n } from '../next-i18next.config'
import { useRouter } from "next/router";


interface Props {

  window?: () => Window;
}
const drawerWidth = 240

export default function DrawerAppBar(props: Props) {

    const router = useRouter();
    const {t} =  useTranslation('common')
    const navItems = [t('blog'), t('about'), t('pricing'), t('products')];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);
    
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    useEffect(() =>{
      setMounted(true);
    },[])

    useEffect(() => {
      let dir = router.locale == "fa" ? "rtl" : "ltr";
      let lang = router.locale == "fa" ? "fa" : "en";
      document.querySelector("html").setAttribute("dir", dir);
      document.querySelector("html").setAttribute("lang", lang);
    }, [router.locale]);
  
     const renderThemeChanger= () => {
        if(!mounted) return null;
  
        const currentTheme = theme === "system" ? systemTheme : theme ;
  
        if(currentTheme ==="dark"){
          return (
            <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }
  
        else {
          return (
            <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
          )
        }
     };
  
    const drawer = (
      <Box className='text-black dark:text-gray-50 dark:bg-zinc-900' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Logo place
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
        <>
       
            <header className='bg-white shadow-sm dark:bg-zinc-900'>
              <Toolbar>

                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>

                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                  Logo places
                </Typography>

                <Box>
                  {renderThemeChanger()}
                </Box>

                <Box  sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {navItems.map((item) => (
                    <Button color="inherit" key={item} >
                    {item}
                    </Button>
                  ))}
                </Box>

                <Divider className='dark:bg-gray-500' orientation="vertical" variant="middle" flexItem />

                <Box>
                  <LanguageSwitcher />
                </Box>
              </Toolbar>
            </header>
            <header className='bg-white shadow-sm dark:bg-zinc-900'>
            <Drawer
              className='dark:bg-zinc-900'
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true,
                }}
                sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            </header>
            <Box component="main" sx={{ mt:5, p: 3 }}>
              <Login/>
            </Box>
            
      </>
 
    );
  }

  DrawerAppBar.propTypes = {
    window: PropTypes.func,
  };