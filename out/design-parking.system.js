"use strict";
/*

design-parking.system.ts

https://leetcode.com/problems/design-parking-system/
*/
var ParkingSystem = /** @class */ (function () {
    function ParkingSystem(big, medium, small, currentlyParked) {
        if (currentlyParked === void 0) { currentlyParked = [0, 0, 0]; }
        this.big = big;
        this.medium = medium;
        this.small = small;
        this.currentlyParked = currentlyParked;
    }
    ParkingSystem.prototype.addCar = function (carType) {
        var max;
        switch (carType) {
            case 1:
                max = this.big;
                break;
            case 2:
                max = this.medium;
                break;
            case 3:
                max = this.small;
                break;
            default:
                max = 0;
                break;
        }
        if ((this.currentlyParked[carType - 1]) + 1 <= max) {
            this.currentlyParked[carType - 1] += 1;
            debugger;
            return true;
        }
        debugger;
        return false;
    };
    return ParkingSystem;
}());
var butts = new ParkingSystem(1, 1, 0);
butts.addCar(1);
butts.addCar(2);
butts.addCar(3);
butts.addCar(1);
/**
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/ 
//# sourceMappingURL=design-parking.system.js.map