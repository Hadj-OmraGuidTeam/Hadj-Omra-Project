var callBackgetSuccess = function(data){
    console.log("donnees api",data)
  

    
   var element = document.getElementById("pp");    

element.innerHTML = "<br><h2> "+data.data.date.hijri.weekday.ar+" "+data.data.date.hijri.day+" "+data.data.date.hijri.month.ar+" "+data.data.date.hijri.year+
  " </h3><br><table><tr><td>الفجر:   &nbsp  &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp  "+data.data.timings.Fajr+"</td></tr>"+
  "<tr><td>شروق الشمس : &nbsp&nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp "+data.data.timings.Sunrise+"</td></tr>"+
 "<tr><td  > الظهر :  &nbsp&nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp"+data.data.timings.Dhuhr+"</td></tr>"+
 "<tr><td> العصر:     &nbsp &nbsp&nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp"+data.data.timings.Asr+"</td></tr>"+
 "<tr><td> غروب الشمس :     &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp" +data.data.timings.Sunset+"</td></tr>"+
 "<tr><td> المغرب :   &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp" +data.data.timings.Maghrib+"</td></tr>"+
"<tr><td>  العشاء:   &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp" +data.data.timings.Isha+"</td></tr>"+
 " </table>";

}


function buttonClickGET(){
  var queryLoc = document.getElementById("queryLoc").value;
  var queryLoc1 = document.getElementById("queryLoc1").value;
var url ="http://api.aladhan.com/v1/timingsByCity?city="+queryLoc+"&country="+queryLoc1+"&method=8"
  // var url ="http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017"
 //var url = "http://api.aladhan.com/v1/calendarByCity?city=mekka&country=sau&method=2&month=03&year=2020"
   // var url="http://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=bad4be976681e859f0a45833d6076773"
  // var url = "http://api.aladhan.com/v1/calendarByCity?city="+queryLoc+"&country="+queryLoc1+"&method=2&month"+queryLoc2+"&year=2020"
$.get(url,callBackgetSuccess).done(function(){
//alert("mawaqit ssalat sont : " +data.data.timings);
})
.fail(function(){
alert("الرجاء إدخال اسم المدينة متبوعًا بالدولة ");
})
.always(function(){

})

}




