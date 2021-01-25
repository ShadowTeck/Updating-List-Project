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

//ERROR to fix: Make an object for each user so that their data is seperate!!!

function submitPass(){
    addToList();
    print();
    let space = document.getElementById('output');
    space.innerHTML = "";
    space.innerHTML +=`<div><span>${firstNameNew}</div>`;
}