import PropTypes from "prop-types";
import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

class ColorChangeBar extends React.Component {
    constructor(props) {
        super(props);
        this.thresholds = this.props.thresholds.sort((a, b) => a.threshold - b.threshold);
    }


    render() {
        console.log(this.thresholds);
        const variant= this.thresholds.find(value => value.threshold >= this.props.now).variant;
        return (
            <ProgressBar variant={variant}
                         now={this.props.now}
                         max={this.props.max}/>
        )
    }
}

ColorChangeBar.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    now: PropTypes.number.isRequired,
    thresholds: PropTypes.arrayOf(
        PropTypes.shape(
            {
                threshold: PropTypes.number,
                variant: PropTypes.string
            }
        )
    ).isRequired

};

ColorChangeBar.defaultProps = {
    min: 0
};

export default ColorChangeBar