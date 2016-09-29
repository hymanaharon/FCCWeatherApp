$(document).ready(function(){
//location
   
    var lat;
    var long;
    var city;
    var countryCode;
    var weatherType;    
        $.getJSON("http://ip-api.com/json", function(data) {
                  lat=data.lat;
                  long=data.lon;
                  
           
            var api ='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=20a5ca4f642080493675e573392c7e03';    
            $.getJSON(api, function(data2){
                weatherType= data2.weather[0].description;
                city=data2.name;
                countryCode=data2.sys.country;
                var kTemp= data2.main.temp;
                var fTemp= (kTemp*(9/5)-459.67).toFixed(0); //toFixed rounds the number to the decimal places in the bracket
                var cTemp= (kTemp-273.15).toFixed(0);
                var toggleTemp=true;
                var bgWeather = data2.weather[0].id;
                $('#location').html(city +"," + " " + countryCode);
                $('#description').html(weatherType);
                $('#temp').html(cTemp + " &#8451;");
                $('#button').click(function(){
                                        if(toggleTemp===false){
                        $('#temp').html(cTemp + " &#8451;");
                    toggleTemp=true;
                        $('#button').html('Change to Fahrenheit');
                    }
                    else{
                        $('#temp').html(fTemp + " &#8457;");
                        toggleTemp=false;
                        $('#button').html('Change to Celcius');
                    }    
                })
                if(bgWeather<300){
                    $('#bg').attr("src","images/thunderstorm.jpg");  
                }
                else if(bgWeather>=300 && bgWeather<600){
                    $('#bg').attr("src","images/rain.jpg");
                }
                else if(bgWeather>=600 && bgWeather<700){
                    $('#bg').attr("src","images/snow1.jpg");
                }
                else if(bgWeather>=700 && bgWeather<800){
                    $('#bg').attr("src","images/duststorm.jpeg");
                }
                else if(bgWeather===800){
                    $('#bg').attr("src","images/clear%20skies.jpg");
                }
                else if(bgWeather>800 && bgWeather<900){
                    $('#bg').attr("src","images/clouds.jpg");
                }
                else if(900<= bgWeather){
                    $('#bg').attr("src","images/tornado.jpg");
                };
                
            });
        }); 
 
    
        
//Date    
function startTime(){
var today=new Date();
var hours=today.getHours();
var minutes=today.getMinutes();
var seconds=today.getSeconds();

if(minutes<=9){
minutes="0" +minutes;
}
 
 
 if(seconds<=9){
seconds="0" +seconds;
}


if(hours>=13){
hours=hours-12;
document.getElementById("time").innerHTML=hours + ":" +minutes + ":" + seconds + " PM" ;
}
else if(hours<=0){
hours=12;
document.getElementById("time").innerHTML=hours + ":" +minutes + ":" + seconds + " AM" ;
}

else{document.getElementById("time").innerHTML=hours + ":" +minutes + ":" + seconds + " AM" ;
}
var t=setTimeout(function(){startTime()},1000);
}
  
  //Date


function makeArray() {
for (i = 0; i<makeArray.arguments.length; i++)
this[i + 1] = makeArray.arguments[i];
}

var months = new makeArray('January','February','March','April','May',
'June','July','August','September','October','November','December');
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;

$('#date').html(day + " " + months[month] + " " + year);
startTime();  
    
$('#bg').click(function(){
    $(this).attr("src","images/snowing-005.jpg");
 });
});
