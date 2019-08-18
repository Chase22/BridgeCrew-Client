import SubsystemView from "./SubsystemWrapper";
import * as React from "react";
import {ReactNode} from "react";

class SolarPanelView extends SubsystemView {
    getContent(): ReactNode {
        return <div>SolarPanel</div>;
    }

    getSubsystemId(): String {
        return "solarPanel";
    }
}

export default SolarPanelView