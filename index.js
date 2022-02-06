// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwoDrivers = drivers.splice(0,2)
const lastTwoDrivers = drivers.splice(drivers.length-2, drivers.length);

const returnFirstTwoDrivers = function (drivers){
    return firstTwoDrivers;
}
const returnLastTwoDrivers = function (drivers){
    return lastTwoDrivers;
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(price){
    return function(){
        return price * price;

    }
}
const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier*2;
}
const fareTripler = function(createFareMultiplier){
    return createFareMultiplier*3;
}
function selectDifferentDrivers(arrayOfDrivers, whichDrivers){
    return whichDrivers();
}