
///////////////////////Hours of Operation///////////////////////////////////////////////////////////

var hourOperation = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm']

////////////////////////CONSTRUCTOR//////////////////////////////////////////////////////

// Constructor variable CookiesStand starts with a CAPITAL Letter
var CookiesStand = function(place,minCustomers,maxCustomers,avgCookiesPerCust,id) {
  this.place = place;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.cookiesByHourList = [];
  this.id= id;

//////////////////////Random Customer Number Generated///////////////////////////////////////////////

  // calculate our random num of custs/hour based on min/max
  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  };

/////////////////////Total No. of Cookies Per Hour/////////////////Per Hour///////////////////

this.totalCookiesHour =function (){

  for (var i=0; i < hourOperation.length;i++){
    this.cookiesByHourList.push(Math.floor(this.avgCookiesPerCust * this.randCustHour()));
  }
};
////////////////////Total No. of Cookies Per Day///////////////////Per Day///////////////////

this.totalCookiesDay =function(){
  var sum = 0;
  for (var i=0;i < this.cookiesByHourList.length;i++){
    sum =sum + this.cookiesByHourList[i];
  }
  return sum;
};
//////////////Make Unordered List - Hours of Operation &  Total Cookies Day/////////////////////////////////////////////////////////////

this.makeUL = function(){
  this.totalCookiesHour();
  var list = document.getElementById(this.id);
   //connect to the list to the JS;this is where ur list will appear
   for (var i = 0; i < hourOperation.length; i++) {
      //Create the list item
      var item = document.createElement('li');
      //Set its content
      var text = document.createTextNode(hourOperation[i] + ' Cookies Per Day ' + this.cookiesByHourList[i]);
      //Add it to the list
      item.appendChild(text);
      list.appendChild(item);
    }

    var item = document.createElement('li');
    //Set its content
    var text =document.createTextNode("daily total: " + this.totalCookiesDay());
    //Add it to the list
    item.appendChild(text);
    list.appendChild(item);
  }
  this.makeUL();
};
//////////////////INSTANCES/////////////////////////////////////////
// creating instances
var pikePlace = new CookiesStand('Pike Place Market',17,88,5.2,"pike");
var seaTacAirport = new CookiesStand('SeaTac Airport',6,44,1.2,"seatac");
var southcenterMall = new CookiesStand('Southcenter Mall',11,38,1.9,"southcenterMall");
var bellevueSquare =new CookiesStand('Bellevue Square',20,48,3.3,"belleSquare");
var alki =new CookiesStand('Alki Beach',3,24,2.6,"alki");


// pikePlace.makeUL(hourOperation);


// console.log(dailyCookies());

// console.dir(pikePlace);
// console.dir(seaTacAirport);
// console.dir(southcenterMall);
// console.dir(bellevueSquare);
// console.dir(alki);




