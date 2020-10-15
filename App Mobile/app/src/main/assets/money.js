var callBackgetSuccess = function(data){
    console.log("donnees api",data)
  

    
   var element = document.getElementById("pp");    

//element.innerHTML = "<select><option> "+data.rates.EUR *document.getElementById("queryLoc").value+" EUR </option>"+
//"<option  selected> "+data.rates.USD*document.getElementById("queryLoc").value +" USD </option>"+
//"<option > "+data.rates.CAD*document.getElementById("queryLoc").value +" CAD </option>"+
//"<option > "+data.rates.ZAR*document.getElementById("queryLoc").value +" DA </option>"+
//"</select><br> ";
element.innerHTML = data.currency[0].value+"  "+data.currency[0].currency;
}


function buttonClickGET(){
    var queryLoc1 = queryLoc2=document.querySelector('#s1').value;
var queryLoc2=document.querySelector('#s2').value;


  var url = "https://currencydatafeed.com/api/data.php?token=7lgyjmygooe3v6ohwe0n&currency="+queryLoc1+"/"+queryLoc2
//var url="https://api.exchangeratesapi.io/latest?base="+queryLoc1
// url ="http://api.aladhan.com/v1/timingsByCity?city="+queryLoc+"&country="+queryLoc1+"&method=8"
  // var url ="http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017"
 //var url = "http://api.aladhan.com/v1/calendarByCity?city=mekka&country=sau&method=2&month=03&year=2020"
   // var url="http://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=bad4be976681e859f0a45833d6076773"
  // var url = "http://api.aladhan.com/v1/calendarByCity?city="+queryLoc+"&country="+queryLoc1+"&method=2&month"+queryLoc2+"&year=2020"
$.get(url,callBackgetSuccess).done(function(){
//alert("mawaqit ssalat sont : " +data.data.timings);
})
.fail(function(){
alert("ERROR!");
})
.always(function(){

})

}




