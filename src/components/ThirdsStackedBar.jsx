import React from "react";
import StackedBar from "./StackedBar";
import PropTypes from "prop-types";

class ThirdsStackedBar extends React.Component {

    render() {
        let variants = ["success", "warning", "danger"];
        if (this.props.invert) {
            variants = variants.reverse()
        }

        return (<StackedBar min={this.props.min} max={this.props.max} now={this.props.now} thresholds={
                    [
                        {variant: variants[0], threshold: this.props.max/2},
                        {variant: variants[1], threshold: this.props.max/2+this.props.max/4},
                        {variant: variants[2], threshold: this.props.max}
                    ]
                }/>
        );
    }

}

ThirdsStackedBar.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    now: PropTypes.number.isRequired,
    invert: PropTypes.bool.isRequired
};

ThirdsStackedBar.defaultProps= {
    invert: false,
    min: 0
};

export default ThirdsStackedBar