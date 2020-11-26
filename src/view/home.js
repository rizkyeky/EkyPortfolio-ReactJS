import eky_logo from "../assets/logo/eky_logo.svg"
import ig_logo from "../assets/logo/instagram.svg";
import gh_logo from "../assets/logo/github.svg";
import li_logo from "../assets/logo/linkedin.svg";
import fv_logo from "../assets/logo/fiverr.svg";
import fr_logo from "../assets/logo/freelancer.svg";
import pr_logo from "../assets/logo/project.svg";

import eky_profile from "../assets/profile.png";

import React from "react"

import {
  Tab,
  Tabs,
  Typography,
  Box,
  Button,
} from "@material-ui/core";

import LogoButton from "./LogoButton"
import Text from "./Text"

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff73ad",
      main: "#f4397e",
      dark: "#bc0052",
      contrastText: "#fff",
    },
    secondary: {
      light: "#69ffe8",
      main: "#19d9b6",
      dark: "#00a686",
      contrastText: "#000",
    },
    text: {
      primary: "#424B54",
      secondary: "#fff",
    },
    // common: {
    //   white
    // }
  },
  typography: {
    fontFamily: ["Roboto Mono", "monospace"].join(","),
  },
});

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <ThemeProvider theme={theme}>
          <Box
            height={120}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mx="10%"
            children={[
              <img src={eky_logo} width="50" height="50" alt="logo"></img>,
              <Tabs>
                <Tab
                  label={
                    <Text fontWeight={700} fontSize={18} color="text.primary" label="Skill"/>
                  }
                />
                <Tab
                  label={
                    <Text fontWeight={700} fontSize={18} color="text.primary" label="Portfolio"/>
                  }
                />
                <Tab
                  label={
                    <Text fontWeight={700} fontSize={18} color="text.primary" label="Contact"/>
                  }
                />
                <Tab
                  label={
                    <Text fontWeight={700} fontSize={18} color="text.primary" label="Blog"/>
                  }
                />
              </Tabs>,
            ]}
          />
          <Box
            borderRadius="30px"
            mx="10%"
            boxShadow="5px 5px 30px 0px rgba(0,0,0,0.1)"
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            alignContent="stretch"
            children={[
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                alignItems="flex-start"
                height={240}
                children={[
                  <Typography
                    component="div"
                    align="left"
                    children={[
                      <Box fontWeight={300} fontSize={24} color="text.primary">
                        Hi There !
                      </Box>,
                      <Box fontSize={36} fontWeight={700} color="text.primary">
                        I'm Rizky Eky
                      </Box>,
                      <Box fontWeight={400} fontSize={36} color="text.primary">
                        Mobile Development
                      </Box>,
                    ]}
                  />,
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ borderRadius: 30 }}
                    children={
                      <Box fontWeight={700} fontSize={18}>
                        View CV
                      </Box>
                    }
                  />,
                ]}
              />,
              <Box
                p={0}
                m={0}
                alignSelf="stretch"
                children={
                  <img
                    src={eky_profile}
                    width="300"
                    height="400"
                    alt="profile"
                  ></img>
                }
              />,
            ]}
          />
          <Box
            height={500}
            mx="10%"
            children={[
              <Box
                my="30px"
                fontWeight={700}
                fontSize={36}
                color="text.primary"
              >
                My Offices
              </Box>,
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="30px"
                boxShadow="5px 5px 30px 0px rgba(0,0,0,0.1)"
                p="24px"
                children={[
                  <LogoButton
                    title="Instagram"
                    logo={ig_logo}
                    href="https://www.instagram.com/riz.eky/"
                  />,
                  <LogoButton
                    title="Github"
                    logo={gh_logo}
                    href="https://github.com/rizkyeky"
                  />,
                  <LogoButton
                    title="Linkedin"
                    logo={li_logo}
                    href="https://www.linkedin.com/in/rizky-eky-980839171"
                  />,
                  <LogoButton
                    title="Fiverr"
                    logo={fv_logo}
                    href="https://www.fiverr.com/rizkyeky"
                  />,
                  <LogoButton
                    title="Freelancer"
                    logo={fr_logo}
                    href="https://www.freelancer.co.id/u/rizeky"
                  />,
                  <LogoButton
                    title="Projects"
                    logo={pr_logo}
                    href="https://projects.co.id/public/browse_users/view/87101e/rizky-eky"
                  />,
                ]}
              />,
            ]}
          />
          <Box
            height={500}
            mx="10%"
            children={[
              <Box fontWeight={700} fontSize={36} color="text.primary">
                My Skill
              </Box>,
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                children={[
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    borderRadius="30px"
                    boxShadow="5px 5px 30px 0px rgba(0,0,0,0.1)"
                    bgcolor="common.white"
                    children={[
                      <Box fontWeight={700} fontSize={24} color="text.primary">
                        Programming Theory
                      </Box>,
                      <Box fontWeight={700} fontSize={24} color="text.primary">
                        Programming Theory
                      </Box>,
                    ]}
                  />,
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    borderRadius="30px"
                    boxShadow="5px 5px 30px 0px rgba(0,0,0,0.1)"
                    bgcolor="common.white"
                    // children={}
                  />,
                ]}
              />,
            ]}
          />
        </ThemeProvider>
      </div>
    );
  }
}

export default Home;
