import React from "react"
import Login from "../login"
import { Box } from "grommet"
const Home = () => {
  return (
    <Box fill align="center" justify="center">
      <Login />
    </Box>
  )
}
Home.whyDidYouRender = true
export default Home
