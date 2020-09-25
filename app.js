//Title : Assignment #2 part a : Landscape Calculator
//Author : Clay Bowser
//Date Last Modified : 2020/09/24
/// Notes :
/// Switches are cool but if statements work better in some places
///
/// 

//ENABLE MODULE
var readlineSync = require('readline-sync');

//GLOBAL VARIABLES
var houseNumber;
var baseCharge;
var length;
var width;
var surfaceArea;
var grassType;
var fescue;
var bentgrass;
var campus;
var trees;
var totalCharge;

//Assign numbers to variables
baseCharge = 1000;
fescue = 0.05;
bentgrass = 0.02;
campus = 0.01;

//GET INPUT FROM USER
 houseNumber = readlineSync.question('Enter House Number: ');
    //VALIDATE
    while (houseNumber > 10000 || houseNumber < .999 || isNaN(houseNumber)){
        houseNumber = readlineSync.question("Enter a valid House Number: ");
    }
length = readlineSync.question('\nEnter property length (feet): ');
    while (length > 100000 || length < 0.1 || isNaN(length)){
        length = readlineSync.question('Enter a valid length in square feet: ');
    }
width = readlineSync.question('\nEnter property width (feet): ');
    while (width > 100000 || width < 0.1 || isNaN(width)){
        width = readlineSync.question('Enter a valid width in square feet: ');
    }
grassType = readlineSync.question('\nEnter type of grass (fescue, bentgrass, campus): ');
    while (grassType != "fescue" && grassType != "bentgrass" && grassType != "campus"){
        grassType = readlineSync.question('Please enter a valid grass type: ');
    }

trees = readlineSync.question('\nEnter the number of trees: ');
    while (trees > 10000 || trees < 0 || isNaN(trees)){
        trees = readlineSync.question('Please enter a valid number of trees: ');
    }

//Turn string into number (float)
length = parseFloat(length);
width = parseFloat(width);
trees = parseInt(trees);

//CALCULATE SURFACE AREA
surfaceArea = length * width;

//Add base charge and apply extra charge if applicable
totalCharge = baseCharge;
if (surfaceArea > 5000){
    totalCharge += 500;
} 

// if (grassType="fescue"){
//     totalCharge +=  surfaceArea * fescue;
// } else if (grassType="bentgrass"){
//     totalCharge += surfaceArea * bentgrass;
// } else if (grassType="campus"){
//     totalCharge += surfaceArea * campus;
// } Clay discovered a better way haha ;) down below

//Check grass type, calculate and add to total charge
switch(grassType){
    case "fescue":
        totalCharge += surfaceArea * fescue;
        break;
    case "bentgrass":
        totalCharge += surfaceArea * bentgrass;
        break;
    case "campus":
        totalCharge += surfaceArea * campus;
}

//Calculate and add trees to total
trees *= 100;
totalCharge += trees;

//Display to user
console.log("\nThe Total cost for house "+ houseNumber + " is: $" + totalCharge.toFixed(2));