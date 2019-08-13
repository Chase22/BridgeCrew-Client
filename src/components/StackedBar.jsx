import PropTypes from 'prop-types';
import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

class StackedBar extends React.Component {

    render() {
        let prevThreshold = 0;
        console.log(this.props);
        return (
            <div className="stackedBar">
                <ProgressBar>
                    {this.props.thresholds.map((value, index) => {
                        const now = this.getThreshold(this.props.now, value.threshold, prevThreshold);
                        prevThreshold = value.threshold;
                        console.log(now);

                        return <ProgressBar
                            variant={value.variant}
                            now={now}
                            key={index + 1} min={this.props.min}
                            max={this.props.max}
                        />
                    })}
                </ProgressBar>
            </div>
        );
    }

    getThreshold = (value, threshold, prevThreshold) => {
        if (value > threshold) {
            return threshold - prevThreshold;
        } else {
            return Math.max(value - prevThreshold, 0);
        }
    }
}

StackedBar.propTypes = {
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
export default StackedBar