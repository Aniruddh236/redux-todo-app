import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export default function Header(){

    return(
    <AppBar position="sticky">
    <Toolbar>
    <Typography variant="h6" sx={{ 
            flexGrow: 1, 
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Change font here
            fontWeight: 700, // Example: bold font
            fontSize: '1.5rem' // Example: adjust font size
          }}>
          One Day
        </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
    </Toolbar>
  </AppBar>
  )

}