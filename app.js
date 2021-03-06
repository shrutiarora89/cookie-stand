
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

this.addToTable = function(){
  this.totalCookiesHour();
  var table = document.getElementById('table');
  var row = document.createElement('tr');
  table.appendChild(row);

  var th = document.createElement('th');
  th.innerHTML = this.place;
  row.appendChild(th);
//make a th, give it text for the value of the store's name
//append it to the row
//make all the tds with the actual numnbers, and append those to the row

   //connect to the list to the JS;this is where ur list will appear
   for (var i = 0; i < hourOperation.length; i++) {
      //Create the list item
      var item = document.createElement('td');
      //Set its content
      var text = document.createTextNode(this.cookiesByHourList[i]);// + 'Cookies Per Day'
      //Add it to the list
      item.appendChild(text);
      row.appendChild(item);
    }

    var item = document.createElement('td');
    // //Set its content
    var text =document.createTextNode(this.totalCookiesDay());
    // //Add it to the list
    item.appendChild(text);
    row.appendChild(item);
  }

  this.addToTable();
};
//////////////////INSTANCES/////////////////////////////////////////
// creating instances
var pikePlace = new CookiesStand('Pike Place Market',17,88,5.2,"pike");
var seaTacAirport = new CookiesStand('SeaTac Airport',6,44,1.2,"seatac");
var southcenterMall = new CookiesStand('Southcenter Mall',11,38,1.9,"southcenterMall");
var bellevueSquare =new CookiesStand('Bellevue Square',20,48,3.3,"belleSquare");
var alki =new CookiesStand('Alki Beach',3,24,2.6,"alki");

//////////////////////////////FORMS/////////////////////////////////////////

//A reference to the DOM element Node is stored in a variable submit
var submit = document.getElementById("submit");

// Connecting HTML and JS through IDs
var formCookieInfo = function(event){
  event.preventDefault();
  var location = document.getElementById("location").value;
  var min = parseInt(document.getElementById("min").value);
  var max = parseInt(document.getElementById("max").value);
  var avg = parseInt(document.getElementById("avg").value);

//---------------Adding Row to Table --------------------------

  console.log(location);
  console.log(min);
  console.log(max);
  console.log(avg);
  var newStore = new CookiesStand(location,min,max,avg,"newStore");

}

//--------------------------------------------------------------


// target.event('user_action', function);
//DOMelement.addEventListener('event',functionName[,Boolean]);
submit.addEventListener('click', formCookieInfo);
//'click'-The event name is enclosed in quotation marks
