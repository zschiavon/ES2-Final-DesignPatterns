export class Bike {
    
    constructor(
        private _frame: string,
        private _electricWireing: string,
        private _engine: string,
        private _seats: string,
        private _headLamps: string,
        private _blinkers: string,
        private _breaks: string,
        private _Wheels: string,
        private _gasTank: string,
        private _price: number
    ){}

    
    public getPrice() : number {
        return this._price
    }
    
    
}