export default abstract class Sensor {
    Name: string;
    Value: any;
    Manipulate?: (val:any) => any;

    constructor(name: string, value: any, manipulate?: (val:any) => any){
        this.Name = name;
        this.Value = value;
        this.Manipulate = manipulate || null;
    }

    abstract Update(): void;
};