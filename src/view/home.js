import logo from "../eky_logo.svg"
import ig_logo from "../instagram.svg"
import gh_logo from "../github.svg"
import li_logo from "../linkedin.svg"
import fv_logo from "../fiverr.svg"
import fr_logo from "../freelancer.svg"
import pr_logo from "../project.svg";
import profile from "../profile.png"
import React from "react"
import {
  Tab,
  Tabs,
  Typography,
  Box,
  Button,
  ButtonBase,
} from "@material-ui/core";

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
              <img src={logo} width="50" height="50" alt="logo"></img>,
              <Tabs aria-label="simple tabs example">
                <Tab
                  label={
                    <Box fontWeight={700} fontSize={18} color="text.primary">
                      Skill
                    </Box>
                  }
                />
                <Tab
                  label={
                    <Box fontWeight={700} fontSize={18} color="text.primary">
                      Portfolio
                    </Box>
                  }
                />
                <Tab
                  label={
                    <Box fontWeight={700} fontSize={18} color="text.primary">
                      Contact
                    </Box>
                  }
                />
                <Tab
                  label={
                    <Box fontWeight={700} fontSize={18} color="text.primary">
                      Blog
                    </Box>
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
                    src={profile}
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
            mt={20}
            // bgcolor="grey.300"
            children={[
              <Box fontWeight={700} fontSize={36} color="text.primary">
                My Repo and My Offices
              </Box>,
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                alignItems="center"
                borderRadius="30px"
                boxShadow="5px 5px 30px 0px rgba(0,0,0,0.1)"
                bgcolor="common.white"
                p="50px"
                my="30px"
                children={[
                  <ButtonBase
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                    children={[
                      <Box
                        height={75}
                        width={75}
                        p="24px"
                        children={
                          <img
                            src={ig_logo}
                            width="75"
                            height="75"
                            alt="instagram"
                          />
                        }
                      />,
                      <Box
                        fontFamily="Roboto Mono"
                        fontWeight={700}
                        fontSize={16}
                        color="text.primary"
                        pb="24px"
                      >
                        Instagram
                      </Box>,
                    ]}
                  />,
                  <ButtonBase
                    style={{ display: "flex", flexDirection: "column" }}
                    children={[
                      <Box
                        height={75}
                        width={75}
                        p="24px"
                        children={
                          <img
                            src={gh_logo}
                            width="75"
                            height="75"
                            alt="github"
                          />
                        }
                      />,
                      <Box
                        fontFamily="Roboto Mono"
                        fontWeight={700}
                        fontSize={16}
                        color="text.primary"
                        pb="24px"
                      >
                        Github
                      </Box>,
                    ]}
                  />,
                  <ButtonBase
                    style={{ display: "flex", flexDirection: "column" }}
                    children={[
                      <Box
                        height={75}
                        width={75}
                        p="24px"
                        children={
                          <img
                            src={li_logo}
                            width="75"
                            height="75"
                            alt="linkedin"
                          />
                        }
                      />,
                      <Box
                        fontFamily="Roboto Mono"
                        fontWeight={700}
                        fontSize={16}
                        color="text.primary"
                        pb="24px"
                      >
                        Linkedin
                      </Box>,
                    ]}
                  />,
                  <ButtonBase
                    style={{ display: "flex", flexDirection: "column" }}
                    children={[
                      <Box
                        height={75}
                        width={75}
                        p="24px"
                        children={
                          <img
                            src={fv_logo}
                            width="75"
                            height="75"
                            alt="linkedin"
                          />
                        }
                      />,
                      <Box
                        fontFamily="Roboto Mono"
                        fontWeight={700}
                        fontSize={16}
                        color="text.primary"
                        pb="24px"
                      >
                        Fiverr
                      </Box>,
                    ]}
                  />,
                  <ButtonBase
                    style={{ display: "flex", flexDirection: "column" }}
                    children={[
                      <Box
                        height={75}
                        width={75}
                        p="24px"
                        children={
                          <img
                            src={fr_logo}
                            width="75"
                            height="75"
                            alt="linkedin"
                          />
                        }
                      />,
                      <Box
                        fontFamily="Roboto Mono"
                        fontWeight={700}
                        fontSize={16}
                        color="text.primary"
                        pb="24px"
                      >
                        Freelancer
                      </Box>,
                    ]}
                  />,
                  <ButtonBase
                    style={{ display: "flex", flexDirection: "column" }}
                    children={[
                      <Box
                        height={75}
                        width={75}
                        p="24px"
                        children={
                          <img
                            src={pr_logo}
                            width="75"
                            height="75"
                            alt="linkedin"
                          />
                        }
                      />,
                      <Box
                        fontFamily="Roboto Mono"
                        fontWeight={700}
                        fontSize={16}
                        color="text.primary"
                        pb="24px"
                      >
                        Project.co.id
                      </Box>,
                    ]}
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
