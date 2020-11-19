import { getSensorValue } from './../firebase-dmars-client';
import StateItem from "./StateItem";

export default class FirebaseStateItem extends StateItem {
    DataType: string;
    MesurementUnit: string;
    NodeId: string;
    Delay: Date;

    constructor(name: string, value: any, dataType: string, mesurementUnit: string, nodeId: string, delay: Date = new Date(0), manipulate?: (val:any) => any){
        super(name, value, manipulate);

        this.DataType = dataType;
        this.MesurementUnit = mesurementUnit;
        this.NodeId = nodeId;
        this.Delay = delay;
    }

    async Update(){
        this.Value = await getSensorValue(this.NodeId, this.DataType, this.MesurementUnit, this.Delay);
    }
};