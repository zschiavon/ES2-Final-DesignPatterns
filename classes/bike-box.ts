

export class FullBike {
 private _parts: [] = [] 
 

 getBikePrice(): number{
    return this._parts.reduce((sum, part) => sum + part, 0)
 }

 addPart(...part: []): void{
 part.forEach((part) => this._parts.push(part))
 }
}