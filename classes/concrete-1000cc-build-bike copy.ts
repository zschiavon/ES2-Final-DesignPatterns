import { bikeBuilderInterface } from "../interfaces/bike-builder-interface";
import { FullBike } from "./bike-box";


export class ConcreteBuild1000ccBike implements bikeBuilderInterface{
    private _bike: FullBike[] = []

    
    buildFrame(): this {
        //constroiFrame
        //adicionoParte
        return this
    }
    buildElectricWirering(): this {
         //constroiElectricWireing
         //adicionoParte
         return this
    }
    buildEngine(): this {
         //constroiEngfine
         //adicionoParte
         return this
    }
    buildSeats(): this {
         //constroiSeats
         //adicionoParte
         return this;
    }
    buildHeadLamps(): this {
         //constroiLamps
         //adicionoParte
         return this;
    }
    buildBlinkers(): this {
         //constroiBlinkers
         //adicionoParte
         return this
    }
    buildBGasTank(): this {
        //constroiTank
        //adicionoParte
        return this
    }
    buildWheels(): this {
         //constroiWheels
         //adicionoParte
         return this
    }
    buildBreaks(): this {
         //constroiBreaks
         //adicionoParte
         return this
    }

    getResult(): FullBike[]{
        //retorna a Bike montada.
        return this._bike
    }
    
    
}