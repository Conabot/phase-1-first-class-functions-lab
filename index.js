// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    
    return drivers.slice (0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function (value) {
        return fareMultiplier * value;
    };
}
 const fareDoubler = createFareMultiplier(2);
 const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers) ;
}
