import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Home from '@mui/icons-material/Home';

export default function Header() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 4 }}
          >
            <Link to ="/">
              <Home />
            </Link>
          </IconButton>          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Country Info
          </Typography>
          <Link to='/countryinfo'>
          <Button color="inherit">Add </Button>
          </Link>
          <Link to='/adminCountryList'>
            <Button color="inherit">ViewList </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}
