import React from "react";
import { Box } from "@material-ui/core";

class Text extends React.Component {

    constructor(props) {
        super(props);
        this.textAlign = props.textAlign;
        this.p = props.p;
        this.px = props.px;
        this.py = props.py;
        this.label = props.label;
        this.fontWeight = props.fontWeight;
        this.fontSize = props.fontSize;
        this.color = props.color;
    }

    render() {
        return (
          <Box
            textAlign={this.textAlign}
            p={this.p}
            px={this.px}
            py={this.py}
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
