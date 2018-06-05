'use strict';

function Vehicle(Vname, Vwheels, Vdrive, Vignition) {
    this.Vname = Vname ? Vname : 'vehicle name';
    this.Vwheels = Vwheels ? Vwheels : 4;
    this.Vignition = Vignition ? Vignition : 'igniting the engines now ... \n'
    this.Vdrive = Vdrive ? Vdrive : 'driving now ... \n'
}
Vehicle.prototype.getName = function (){
    return this.Vname;
}
var car = new Vehicle('BMW X1',4,'driving the car here ...\n');
car.fuelType = 'electricity'
// console.log(car)
// console.log(car.getName())
var boat = new Vehicle('lawrence 2000',0,'sailing the boat here','igniting boat engines')
boat.fuelType = 'gasoline';
// console.log(boat)
console.log(Vehicle.prototype);