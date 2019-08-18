import Subsystem from "./Subsystem";

export default class Ship {
    energy: number;
    temperature: number;
    maxTemperature: number;
    hullPoints: number;
    maxHullPoints: number;
    subsystems: Subsystem[];

    constructor(energy: number, temperature: number, maxTemperature: number, hullPoints: number, maxHullPoints: number, subsystems: Subsystem[]) {
        this.energy = energy;
        this.temperature = temperature;
        this.maxTemperature = maxTemperature;
        this.hullPoints = hullPoints;
        this.maxHullPoints = maxHullPoints;
        this.subsystems = subsystems;
    }

    getSubSystemIds(): String[] {
        return this.subsystems.map(value => value.id);
    }
}