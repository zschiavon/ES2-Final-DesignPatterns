import { bikeBuilderInterface } from "../interfaces/bike-builder-interface";
import { ConcreteBuild1000ccBike } from "./concrete-1000cc-build-bike copy";
import { ConcreteBuild250ccBike } from "./concrete-250cc-build-bike";
import { ConcreteBuild600ccBike } from "./concrete-600cc-build-bike";

export class Director {

    Construct250ccBike(){
        const newBike = new ConcreteBuild250ccBike()
        newBike.buildFrame()
        newBike.buildElectricWirering()
        newBike.buildEngine()
        newBike.buildBGasTank()
        newBike.buildWheels()
        newBike.buildBreaks()
        newBike.buildBlinkers()
        newBike.buildHeadLamps()
        newBike.buildSeats()
        return newBike.getResult()
    }
    Construct600ccBike(){
        const newBike = new ConcreteBuild600ccBike()
        //...
        return newBike.getResult()
    }
    Construct1000ccBike(){
        const newBike = new ConcreteBuild1000ccBike()
        //...
        return newBike.getResult()
    }
}