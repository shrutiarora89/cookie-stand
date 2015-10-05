var pikePlace = {
  location : 'Pike Place Market',
  minCustomers : 17,
  maxCustomers : 88,
  avgCookiesCust : 5.2,
    //ranCustHour : function(){
    //calculate our random num of custs/hour based on min/max
    // Math.floor(Math.random() * (max - min + 1)) + min;
//   }
                        0.2 * (88 - 17 + 1) + 17

  // totalCookieHour = [];
  makeUL = function(){

  }

}

// min
// max
// random
// random * cookies per customer = cookie per hour
// //for each and store in an array..
// //display

function makeUL(array=totalCookieHour){
  for var i=0; i < array.length;i++{

    //connect to the list to the JS
    var awesomList = document.getElementById('list');

    var item = document.createElementById('li');

    item.appendChild(document.createTextNode(array[i]));

    awesomeList.appendChild(item);
  }

  return awesomeList;
}
var stuff = ["this","that","another thing","Al","MArk"];
makeUL(stuff)
