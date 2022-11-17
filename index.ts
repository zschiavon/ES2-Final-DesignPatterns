import { Bike } from "./ES2-Final-DesignPatterns/classes/bikeClassExample";
import { ConcreteBuild250ccBike } from "./ES2-Final-DesignPatterns/classes/concrete-250cc-build-bike";
import { Director } from "./ES2-Final-DesignPatterns/classes/director-class";

const bike = new Bike('Street', 'Standart', '250cc', 'Single','Halogen','Halogen','Drum', 'Laced','15L', 13000)

const bike250 = new ConcreteBuild250ccBike().buildFrame().buildElectricWirering().buildEngine().buildBGasTank() //...getResult()


const bike250cc = new Director().Construct250ccBike()
const bike600cc = new Director().Construct600ccBike()
const bike1000cc = new Director().Construct1000ccBike()