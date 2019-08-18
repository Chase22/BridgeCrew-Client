export default class Subsystem {
    id: string;
    subsystemName: String;
    subsystemType: String;


    constructor(id: string, subsystemName: String, subsystemType: String) {
        this.id = id;
        this.subsystemName = subsystemName;
        this.subsystemType = subsystemType;
    }
}