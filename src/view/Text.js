import React from "react";
import { Box } from "@material-ui/core";

class Text extends React.Component {

    constructor(props) {
        super(props);
        this.label = props.label;
        this.fontWeight = props.fontWeight;
        this.fontSize = props.fontSize;
        this.color = props.color;
    }

    render() {
        return (
          <Box
            fontWeight={this.fontWeight}
            fontSize={this.fontSize}
            color={this.color}
          >
            {this.label}
          </Box>
        );
    }
}

export default Text;
