export default class SensorInfo {
    readonly Timestamp: number;
    readonly Value: any;
    readonly Name: string;

    constructor(name: string, value: any, timestamp: number) {
        this.Name = name;
        this.Timestamp = timestamp;
        this.Value = value;
    }
}