import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import "./NavBar.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Music App
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="login-box">
        <TextField
          required
          id="outlined-required"
          placeholder="User Name"
          className="text-field"
        />
        <TextField
          required
          id="outlined-password-input"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="text-field"
        />
        <Link to="/SecondPage">
          <Button className="login-button">Log In</Button>
        </Link>
      </div>
    </Box>
  );
}
