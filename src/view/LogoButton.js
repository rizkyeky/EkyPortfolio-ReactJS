import React from "react"
import {
  Box,
  ButtonBase,
} from "@material-ui/core";

class LogoButton extends React.Component {

  constructor(props) {
    super();
    this.title = props.title;
    this.logo = props.logo;
    this.href = props.href;
  }

  render() {
    return (
      <div className="LogoButton">
        <ButtonBase
          href={this.href}
          target="_blank"
          children={
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              children={[
                <Box
                  height={75}
                  width={75}
                  p="24px"
                  children={
                    <img
                      src={this.logo}
                      width="75"
                      height="75"
                      alt={this.title}
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
                  {this.title}
                </Box>,
              ]}
            />
          }
        />
      </div>
    );
  }
}

export default LogoButton;