import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import {
  Box,
  Button,
  Heading,
  Grommet,
  Collapsible,
  Layer,
  Header,
  Footer,
  Avatar,
  Text,
  Nav,
  Anchor,
  ResponsiveContext,
} from "grommet"
import { Notification, FormClose, Logout } from "grommet-icons"
import { isAuthenticated } from "../../utils/"
const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
}
const handleLogout = async history => {
  window.localStorage.setItem(
    "loggedIn",
    JSON.stringify({
      isLoggedIn: false,
    })
  )
  history.push("/")
  try {
    const requestOptions = {
      method: "POST",
    }
    fetch("/api/users/logout", requestOptions).then(async response => {
      if (response.status === 200) {
        const data = await response.json()
        return { body: data, status: response.status }
      }
    })
  } catch (e) {}
}
const Layout = props => {
  let history = useHistory()
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <Header background="brand" pad="small">
              <Heading level="3" margin="none">
              Keshav
              </Heading>
              {isAuthenticated() && (
                <Nav direction="row" align="center">
                  <NavLink to="/daily" activeClassName="active">
                    Daily
                  </NavLink>
                  <NavLink to="/dashboard" activeClassName="active">
                    Dashboard
                  </NavLink>
                  {/* <Anchor href="/profile">
                    <Avatar src={gravatarLink} />
                  </Anchor>
                  <Button
                    icon={<Notification />}
                    onClick={() => setShowSidebar(!showSidebar)}
                  /> */}
                  <Button
                    icon={<Logout />}
                    onClick={() => handleLogout(history)}
                  />
                </Nav>
              )}
            </Header>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              {/* {isAuthenticated() &&
                showSidebar &&
                (size !== "small" ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      width="medium"
                      background="light-2"
                      flex
                      elevation="small"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background="light2"
                      align="center"
                      justify="center"
                    >
                      sidebar
                    </Box>
                  </Layer>
                ))} */}

              <Box flex align="start" justify="start" pad={"20px"}>
                {props.children}
              </Box>
            </Box>
            <Footer background="brand" pad="medium">
              <Text size="small">Copyright</Text>
            </Footer>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  )
}
export default Layout
