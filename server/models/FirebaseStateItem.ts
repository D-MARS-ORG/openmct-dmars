import { getSensorValue } from './../firebase-dmars-client';
import StateItem from "./StateItem";

export default class FirebaseStateItem extends StateItem {
    DataType: string;
    MesurementUnit: string;
    NodeId: string;

    constructor(name: string, value: any, dataType: string, mesurementUnit: string, nodeId: string, manipulate?: (val:any) => any){
        super(name, value, manipulate);

        this.DataType = dataType;
        this.MesurementUnit = mesurementUnit;
        this.NodeId = nodeId;
    }

    async Update(){
        this.Value = await getSensorValue(this.NodeId, this.DataType, this.MesurementUnit);
    }
};