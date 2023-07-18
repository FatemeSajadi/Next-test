'use client';
import * as React from 'react';
import Login from "../components/LoginForm";

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Logo from "../components/Logo";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";

const drawerWidth = 240
const navItems = ['Blog', 'About us', 'Pricing', 'Products'];

export default function DrawerAppBar(props) {

    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() =>{
      setMounted(true);
    },[])
  
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
  
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [lan, setLan] = React.useState('');
  
    const handleChange = (event) => {
      setLan(event.target.value);
    };
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
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
       
            <header className='bg-white shadow-sm dark:bg-zinc-700'>
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

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {/* <Logo /> */}
                {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#000' }}>
                    {item}
                    </Button>
                ))}
                </Box>
                <Divider orientation="vertical" variant="middle" flexItem />
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    value={lan}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="En">EN</MenuItem>
                        <MenuItem value="FA">FA</MenuItem>
                    </Select>
                </FormControl>
                
                </Box>
            </Toolbar>
            </header>
            <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            </Box>
            <Box component="main" sx={{ mt:5, p: 3 }}>
            
            <Login/>
            </Box>
            
      </>
 
    );
  }

  DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};