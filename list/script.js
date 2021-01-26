class User{
    constructor(firstName, lastName, id, dob, dCity, aCity, dateL, dateR, bagNum){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.dob = dob;
        this.dCity = dCity;
        this.aCity = aCity;
        this.dateL = dateL;
        this.dateR = dateR;
        this.bagNum = bagNum;
    }
}

let userList = [];
let idCount = 0;

let firstName;
let lastName;
let dob;
let dCity;
let aCity;
let dateL;
let dateR;
let bagNum;


//checkbox vars
let chicken;
let fish;
let veg;
let meal;

let extras;
let extraLeg;
let windowSeat;
let headphones;
let secondMeal;

let cost = 300;
function checkBox(){
    //chicken = document.getElementById('chicken').checked;
    //fish = document.getElementById('fish');
    //veg = document.getElementById('veg');
    if(document.getElementById('chicken').checked){
        meal = "Chicken";
    } else if(document.getElementById('fish').checked){
        meal = "Fish";
    } else if(document.getElementById('veg').checked){
        meal = "Vegitarian";
    } else{
        console.log(`Didn't Select a meal`)
    }

    if(document.getElementById('extraLeg').checked){
        extraLeg = true;
        cost = cost + 10;
    } else {
        extraLeg = false;
    }

    if(document.getElementById('windowSeat').checked){
        windowSeat = true;
        cost = cost + 10;
    } else {
        windowSeat = false;
    }

    if(document.getElementById('headphones').checked){
        headphones = true;
        cost = cost + 10;
    } else {
        headphones = false;
    }

    if(document.getElementById('secondMeal').checked){
        secondMeal = true;
        cost = cost + 10;
    } else {
        secondMeal = false;
    }
}


function addToList(){
    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    dob = document.getElementById('DOB').value;
    dCity = document.getElementById('dCity').value;
    aCity = document.getElementById('aCity').value;
    dateL = document.getElementById('dateL').value;
    dateR = document.getElementById('dateR').value;
    bagNum = document.getElementById('bagNum').value;
    
    if(firstName != "" && lastName != "" && dob != ""){
        let user = new User(firstName, lastName, idCount, dob, dCity, aCity, dateL, dateR, bagNum);
        idCount++;
        userList.push(user);
        document.getElementById('firstName').value = "";
        document.getElementById('lastName').value = "";
        document.getElementById('DOB').value = "";
        document.getElementById('dCity').value = "";
        document.getElementById('aCity').value = "";
        document.getElementById('dateL').value = "";
        document.getElementById('dateR').value = "";
        document.getElementById('bagNum').value = "";
    }
    checkBox();
    //console.log(`${firstName}${lastName} was born on ${dob}`);

}

let firstNameNew;
let lastNameNew;
let dobNew;
let dCityNew;
let aCityNew;
let dateLNew;
let dateRNew;
let bagNumNew;

let canDrink;

//let user = new User(firstNameNew, lastNameNew, dobNew, dCityNew, aCityNew, dateLNew, dateRNew, bagNumNew);


function print(){
    for(let i = 0; i < userList.length; i++){
        //console.log(userList[i].firstName);
        firstNameNew = userList[i].firstName;
        lastNameNew = userList[i].lastName;
        dobNew = userList[i].dob;
        dCityNew = userList[i].dCity;
        aCityNew = userList[i].aCity;
        dateLNew = userList[i].dateL;
        dateRNew = userList[i].dateR;
        bagNumNew = userList[i].bagNum;
        id = i;
        console.log(` Hello ${firstNameNew} ${lastNameNew} \n DOB: ${dobNew} \n Departure City: ${dCityNew} \n Arriving City: ${aCityNew} \n Date Leaving:${dateLNew} \n Date Returning: ${dateRNew} \n Bag #: ${bagNumNew} \n Meal: ${meal} \n Extra Leg Room: ${extraLeg} \n Window Seat: ${windowSeat} \n Headphones: ${headphones} \n Second Meal: ${secondMeal} \n Cost($): ${cost} \n ID: ${id}`)
    }
} 

let totalTrip;

function findTripDurration(){
    let splitDateLeave = dateLNew.split("-");
    let dateLeaveJoin  = splitDateLeave.join("");
    let splitDateReturn = dateRNew.split("-");
    let dateReturnJoin  = splitDateReturn.join("");

    //finds the year left;
    let yearLeaveArr = [];
    //console.log(`${dateLeaveJoin} and ${dateReturnJoin}`);
    for(let i = 0; i < 4; i++){
        yearLeaveArr.push(dateLeaveJoin[i]);
    }
    //Finds the year returned;
    let yearReturnArr = [];
    for(let i = 0; i < 4; i++){
        yearReturnArr.push(dateReturnJoin[i]);
    }
    let combinedYearLeft = yearLeaveArr[0] + yearLeaveArr[1] + yearLeaveArr[2] + yearLeaveArr[3];
    let combinedYearReturned = yearReturnArr[0] + yearReturnArr[1] + yearReturnArr[2] + yearReturnArr[3];
    //console.log(`Year left: ${combinedYearLeft}\n Year Returned: ${combinedYearReturned}`);
    //Finds the month left;
    let monthLeaveArr = [];
    for(let i = 4; i < 6; i++){
        monthLeaveArr.push(dateLeaveJoin[i]);
    }
    //finds the month returned
    let monthReturnArr = [];
    for(let i = 4; i < 6; i++){
        monthReturnArr.push(dateReturnJoin[i]);
    }
    let combinedMonthLeft = monthLeaveArr[0] + monthLeaveArr[1];
    let combinedMonthReturned = monthReturnArr[0] + monthReturnArr[1];
    //console.log(`The month left was: ${combinedMonthLeft}\n The month returned was: ${combinedMonthReturned}`)


    //finds the day left
    let dayLeaveArr = [];
    for(let i = 6; i < 8; i++){
        dayLeaveArr.push(dateLeaveJoin[i]);
    }
    //finds the returned returned
    let dayReturnArr = [];
    for(let i = 6; i < 8; i++){
        dayReturnArr.push(dateReturnJoin[i]);
    }
    let combinedDayLeft = dayLeaveArr[0] + dayLeaveArr[1];
    let combinedDayReturn = dayReturnArr[0] + dayReturnArr[1];
    //console.log(`The day left was: ${combinedDayLeft}\n The dat returned was: ${combinedDayReturn}`)

    let totalYearDurration = combinedYearReturned - combinedYearLeft;
    let totalMonthDurration = combinedMonthReturned - combinedMonthLeft;
    let totalDayDurration = combinedDayReturn - combinedDayLeft;
    if(totalMonthDurration < 0){
        totalMonthDurration = Math.abs(totalMonthDurration);
    }
    totalTrip = `The Trip Durration was: ${totalYearDurration} years, ${totalMonthDurration} months, and ${totalDayDurration} days.`;
    console.log(`The Trip Durration was: ${totalYearDurration} years, ${totalMonthDurration} months, and ${totalDayDurration} days.`);
}


function checkBirthDay(){
    let birthdaySplit = dobNew.split("-");
    let birthdayJoin = birthdaySplit.join("");
    let birthArr = [];
    for(let i = 0; i < 4; i++){
        birthArr.push(birthdayJoin[i]);
    }
    let totalBirthday = birthArr[0] + birthArr[1] + birthArr[2] + birthArr[3];
    //console.log(totalBirthday);
    let today = new Date();
    console.log(today.getFullYear());
    let yearDiff = today.getFullYear() - totalBirthday;
    console.log(`You are ${yearDiff} years old.`);
    if(yearDiff >= 21){
        canDrink = true;
        console.log(`Can Drink: ${canDrink}`);
    } else if(yearDiff <= 20) {
        canDrink = false;
        console.log(`Can Drink: ${canDrink}`);
    } else {
        canDrink = false;
        console.log('age undefinded, try again')
    }
}

function displayData(){
    let outputInfo = document.getElementById('output-info');
    outputInfo.innerHTML = "";
    outputInfo.innerHTML += `<div class="output-info"> <ul> <li>First Name: ${firstNameNew}</li> <li>Last Name: ${lastNameNew}</li> <li>DOB: ${dobNew}</li> <li>Departure City: ${dCityNew}</li> <li>Arrival City: ${aCityNew}</li> <li>Date Leaving: ${dateL}</li> <li>Date Returning: ${dateRNew}</li> <li>Bag #: ${bagNumNew}</li> <li>Meal: ${meal}</li> <li>Extra Leg Room: ${extraLeg}</li> <li>Window Seat: ${windowSeat}</li> <li>Headphones: ${headphones}</li> <li>Second Meal: ${secondMeal}</li> <li>Trip Durration: ${totalTrip}</li> <li>Can Drink: ${canDrink}</li> <li>Cost($): $${cost}</li> </ul> </div>`
}

function submitPass(){
    addToList();
    print();
    findTripDurration();
    checkBirthDay();
    let space = document.getElementById('output');
    space.innerHTML = "";
    for(user in userList){
        space.innerHTML +=`<div onclick="displayData()" style="display:block"><span>${id}</span>${firstNameNew} ${lastNameNew}</div>`;    
    }
    console.log(userList.length);
}