import React from "react";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
import ProTip from "./components/ProTip";
// import SignIn from './components/login/SignIn'
import Daily from "./components/daily";
// import Dashboard from "./components/dasboard";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Copyright() {
  return (
    // <Typography variant="body2" color="textSecondary" align="center">
    //   {"Copyright © "}
    //   <Link color="inherit" href="https://material-ui.com/">
    //     Your Website
    //   </Link>{" "}
    //   {new Date().getFullYear()}
    //   {"."}
    // </Typography>
    <h1>Hello</h1>
  );
}

export default function App() {
  return (
    <div>
      <Daily />
      <ProTip />
      <Copyright />
    </div>
  );
}
