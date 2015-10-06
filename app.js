
// min
// max
// random
// random * cookies per customer = cookie per hour
// //for each and store in an array..
// //display

var pikePlace = {
  location : 'Pike Place Market',
  minCustomers : 17,
  maxCustomers : 88,
  avgCookiesPerCust : 5.2,

  //Uses a method of that object to
// Generate a random number of CUSTOMERS PER HOUR.
  randCustHour: function(min,max) {
    // calculate our random num of custs/hour based on min/max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

console.log(" Pike Place-Random Custmer Per Hour "+ pikePlace.randCustHour(pikePlace.minCustomers,pikePlace.maxCustomers));
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// }
// Calculate simulated amounts of cookies purchased for each hour
// using average cookies purchased and  the random number of
// customers generated
function PikeCookiesPurchasedPerHour(){
  return Math.floor(pikePlace.avgCookiesPerCust * pikePlace.randCustHour(pikePlace.minCustomers,pikePlace.maxCustomers));
};

console.log("Cookies Purchased Per Hour " + PikeCookiesPurchasedPerHour());

////////////////////////////////////////////////////////////////////////////////////////////////////////////

PikeTotals = ["pike",
                    "At 10 AM " + PikeCookiesPurchasedPerHour() + " Cookies",
                   "At 11 AM " + PikeCookiesPurchasedPerHour() + " Cookies",
                   "At 12 PM " + PikeCookiesPurchasedPerHour() + " Cookies",
                   "At 1  PM " + PikeCookiesPurchasedPerHour() + " Cookies",
                   "At 2 PM " + PikeCookiesPurchasedPerHour() + " Cookies",
                   "At 3 PM " + PikeCookiesPurchasedPerHour() + " Cookies",
                   "At 4 PM " + PikeCookiesPurchasedPerHour() + " Cookies",
                   "At 5 PM " + PikeCookiesPurchasedPerHour() + " Cookies",
                   ];

// console.log(totalCookieHour[0]);
// console.log(totalCookieHour[1]);


function makeUL(array){
   //connect to the list to the JS;this is where ur list will appear
    var awesomeList = document.getElementById(array[0]);

  for (var i=1;i < array.length;i++){

    //Create the list item
    var item = document.createElement('li');

    //Set its content
    item.appendChild(document.createTextNode(array[i]));

    //Add it to the list
    awesomeList.appendChild(item);
  }

  return awesomeList;
}
// var stuff = ["this","that","another thing","Al","MArk"];
makeUL(PikeTotals);



///////////////////////////SeaTac Airport////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
var seaTacAirport   = {
  location :' SeaTac Airport' ,
  minCustomers : 6,
  maxCustomers : 44,
  avgCookiesPerCust : 1.2,

  //Uses a method of that object to
// Generate a random number of CUSTOMERS PER HOUR.
  randCustHour: function(min,max) {
    // calculate our random num of custs/hour based on min/max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log(" SeaTac Airport-Random Custmer Per Hour "+ seaTacAirport.randCustHour(seaTacAirport.minCustomers,seaTacAirport.maxCustomers));



function SeatacCookiesPurchasedPerHour(){
  return Math.floor(seaTacAirport.avgCookiesPerCust * seaTacAirport.randCustHour(seaTacAirport.minCustomers,seaTacAirport.maxCustomers));
}
console.log("Cookies Purchased Per Hour " + SeatacCookiesPurchasedPerHour());

seaTacCookieHour = ["seatac", "At 10 AM " + SeatacCookiesPurchasedPerHour() + " Cookies",
                   "At 11 AM " + SeatacCookiesPurchasedPerHour() + " Cookies",
                   "At 12 PM " + SeatacCookiesPurchasedPerHour() + " Cookies",
                   "At 1  PM " + SeatacCookiesPurchasedPerHour() + " Cookies",
                   "At 2 PM " + SeatacCookiesPurchasedPerHour() + " Cookies",
                   "At 3 PM " + SeatacCookiesPurchasedPerHour() + " Cookies",
                   "At 4 PM " + SeatacCookiesPurchasedPerHour() + " Cookies",
                   "At 5 PM " + SeatacCookiesPurchasedPerHour() + " Cookies",
                   ];



// function makeUL(seaTacCookieHour){
//   for (var i=0;i < seaTacCookieHour.length;i++){

//     //connect to the list to the JS;this is where ur list will appear
//     var awesomeList = document.getElementById('list2');

//     //Create the list item
//     var item = document.createElement('li');

//     //Set its content
//     item.appendChild(document.createTextNode(seaTacCookieHour[i]));

//     //Add it to the list
//     awesomeList.appendChild(item);
//   }

//   return awesomeList;
// var stuff = ["this","that","another thing","Al","MArk"];
makeUL(seaTacCookieHour);

///////////////////////////////////Southcenter Mall///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
var southcenterMall   = {
  location :'Southcenter Mall' ,
  minCustomers : 11,
  maxCustomers : 38,
  avgCookiesPerCust : 1.9,

  //Uses a method of that object to
  // Generate a random number of CUSTOMERS PER HOUR.
  randCustHour: function(min,max) {
    // calculate our random num of custs/hour based on min/max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function SouthCookiesPurchasedPerHour(){
  return Math.floor(southcenterMall.avgCookiesPerCust * southcenterMall.randCustHour(southcenterMall.minCustomers,southcenterMall.maxCustomers));
}
console.log("Southcenter Mall-Random Custmer Per Hour "+southcenterMall.randCustHour(southcenterMall.minCustomers,southcenterMall.maxCustomers));

southCookieHour = ["southcenterMall", "At 10 AM " + SouthCookiesPurchasedPerHour() + " Cookies",
                   "At 11 AM " + SouthCookiesPurchasedPerHour() + " Cookies",
                   "At 12 PM " + SouthCookiesPurchasedPerHour() + " Cookies",
                   "At 1  PM " + SouthCookiesPurchasedPerHour() + " Cookies",
                   "At 2 PM " + SouthCookiesPurchasedPerHour() + " Cookies",
                   "At 3 PM " + SouthCookiesPurchasedPerHour() + " Cookies",
                   "At 4 PM " + SouthCookiesPurchasedPerHour() + " Cookies",
                   "At 5 PM " + SouthCookiesPurchasedPerHour() + " Cookies",
                   ];

// function makeUL(totalCookieHour){
//   for (var i=0;i < totalCookieHour.length;i++){

//     //connect to the list to the JS;this is where ur list will appear
//     var awesomeList = document.getElementById('list3');

//     //Create the list item
//     var item = document.createElement('li');

//     //Set its content
//     item.appendChild(document.createTextNode(totalCookieHour[i]));

//     //Add it to the list
//     awesomeList.appendChild(item);
//   }

//   return awesomeList;
// }
// // var stuff = ["this","that","another thing","Al","MArk"];
makeUL(southCookieHour);

// ////////////////////////////////Bellevue Square ////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
var bellevueSquare    = {
  location :'Bellevue Square',
  minCustomers : 20,
  maxCustomers : 48,
  avgCookiesPerCust : 3.3,

  //Uses a method of that object to
// Generate a random number of CUSTOMERS PER HOUR.
  randCustHour: function(min,max) {
    // calculate our random num of custs/hour based on min/max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log("Bellevue Square-Random Custmer Per Hour "+bellevueSquare.randCustHour(bellevueSquare.minCustomers,bellevueSquare.maxCustomers));

function BellevueCookiesPurchasedPerHour(){
  return Math.floor(bellevueSquare.avgCookiesPerCust * bellevueSquare.randCustHour(bellevueSquare.minCustomers,bellevueSquare.maxCustomers));
}

bellevueCookieHour = ["belleSquare", "At 10 AM " + BellevueCookiesPurchasedPerHour() + " Cookies",
                   "At 11 AM " + BellevueCookiesPurchasedPerHour() + " Cookies",
                   "At 12 PM " + BellevueCookiesPurchasedPerHour() + " Cookies",
                   "At 1  PM " + BellevueCookiesPurchasedPerHour() + " Cookies",
                   "At 2 PM " + BellevueCookiesPurchasedPerHour() + " Cookies",
                   "At 3 PM " + BellevueCookiesPurchasedPerHour() + " Cookies",
                   "At 4 PM " + BellevueCookiesPurchasedPerHour() + " Cookies",
                   "At 5 PM " + BellevueCookiesPurchasedPerHour() + " Cookies",
                   ];

// function makeUL(totalCookieHour){
//   for (var i=0;i < totalCookieHour.length;i++){

//     //connect to the list to the JS;this is where ur list will appear
//     var awesomeList = document.getElementById('list4');

//     //Create the list item
//     var item = document.createElement('li');

//     //Set its content
//     item.appendChild(document.createTextNode(totalCookieHour[i]));

//     //Add it to the list
//     awesomeList.appendChild(item);
//   }

//   return awesomeList;
// }
// // var stuff = ["this","that","another thing","Al","MArk"];
makeUL(bellevueCookieHour);
// ////////////////////////////////////Alki/////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

var alki      = {
  location : 'Alki',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookiesPerCust : 2.6,

  //Uses a method of that object to
// Generate a random number of CUSTOMERS PER HOUR.
  randCustHour: function(min,max) {
    // calculate our random num of custs/hour based on min/max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
console.log("Alki-Random Custmer Per Hour "+ alki.randCustHour(alki.minCustomers,alki.maxCustomers));

function alkiCookiesPurchasedPerHour(){
  return Math.floor(alki.avgCookiesPerCust * alki.randCustHour(alki.minCustomers,alki.maxCustomers));
}

alkiCookieHour = ["alki", "At 10 AM " + alkiCookiesPurchasedPerHour() + " Cookies",
                   "At 11 AM " + alkiCookiesPurchasedPerHour() + " Cookies",
                   "At 12 PM " + alkiCookiesPurchasedPerHour() + " Cookies",
                   "At 1  PM " + alkiCookiesPurchasedPerHour() + " Cookies",
                   "At 2 PM " + alkiCookiesPurchasedPerHour() + " Cookies",
                   "At 3 PM " + alkiCookiesPurchasedPerHour() + " Cookies",
                   "At 4 PM " + alkiCookiesPurchasedPerHour() + " Cookies",
                   "At 5 PM " + alkiCookiesPurchasedPerHour() + " Cookies",
                   ];
// function makeUL(totalCookieHour){
//   for (var i=0;i < totalCookieHour.length;i++){

//     //connect to the list to the JS;this is where ur list will appear
//     var awesomeList = document.getElementById('list2');

//     //Create the list item
//     var item = document.createElement('li');

//     //Set its content
//     item.appendChild(document.createTextNode(totalCookieHour[i]));

//     //Add it to the list
//     awesomeList.appendChild(item);
//   }

//   return awesomeList;
// }
// // var stuff = ["this","that","another thing","Al","MArk"];
makeUL(alkiCookieHour);
