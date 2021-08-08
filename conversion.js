

//There are 12 inches to a foot. To convert inches to feet, simply divide the number of inches by 12.

//inch to feet
// function inchToFeet(inches){
//     var feet= inches/12;  // formula inch to feet
//     return feet;
    
// }
// var myInches = 132;
// var feet = inchToFeet(myInches);
// var feetResult = inchToFeet(125);
// console.log(feetResult)


// feet to inch
function feetToInch(feets){
    var inch =12*feets; //formula feet to inch
    return inch;
}
 var inchResult=feetToInch(32.12);//user input will be in feets.here the value of feets is 1.
 console.log(inchResult)// output will be in inches.






 

 // function kilometerToMeter(kilometers){
//     var meter=kilometers*1000;  // formula kilometer to meter
//     return meter;
// }
// var meterResult =kilometerToMeter(2);
// console.log(meterResult,'meter')


function meterToKilometer(meters){
    var kilometer =meters/1000; // formula meter to kilometer
    return kilometer;
}
var KilometerResult = meterToKilometer(2);// user input in meters. here meters is 2
console.log(KilometerResult,'kilometer') 








// meter to centimeter
// function meterToCentimeter(meters){
//     var centimeter=meters*100;
//     return centimeter;
// }
// var centimeterResult =meterToCentimeter(2);
// console.log(centimeterResult,'centimeter')



// centimeter to meter
function centimeterToMeter(centimeters){
    var meter=centimeters/100;
    return meter;
}
var meterResult =centimeterToMeter(500);
console.log(meterResult,'meter')