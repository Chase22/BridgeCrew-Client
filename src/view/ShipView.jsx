import React from 'react';
import PropTypes from 'prop-types';
import ThirdsStackedBar from "../components/ThirdsStackedBar";
import Ship from "../data/Ship";
import ColorChangeBar from "../components/ColorChangeBar";

class ShipView extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.ship)
    }

    render() {
        const ship = this.props.ship;
        return (
            <div>
                Temperature:
                <ThirdsStackedBar max={ship.maxTemperature}
                                  now={ship.temperature}
                />
                Hull Status:
                <ColorChangeBar max={ship.maxHullPoints}
                                now={ship.hullPoints}
                                thresholds={[
                                    {variant: 'danger', threshold: ship.maxHullPoints * 0.3},
                                    {variant: 'warning', threshold: ship.maxHullPoints * 0.5},
                                    {variant: 'success', threshold: ship.maxHullPoints}
                                ]}

                />
            </div>
        );
    }

}

ShipView.propTypes = {
    ship: PropTypes.instanceOf(Ship).isRequired
};

ShipView.defaultProps = {
    ship: {
        temperature: 0,
        maxTemperature: 0
    }
};

export default ShipView