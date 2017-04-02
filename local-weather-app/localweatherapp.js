/* API key:

9887a4684d44ab8428308aee2e17bbe0
*/
$(document).ready(function() {

  //backgrounds
  
  var background = {
    sunny: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462739746/8ZCTTWTHS0_nh2l19.jpg)",
    clearNight: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1459880521/Q9I121V1WP_q7jy4z.jpg)",
    cloudyDay: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462739960/TPEXTHL5OP_bfjv5i.jpg)",
    brokenClouds:   "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462739814/AU29NJS2AN_yy1rni.jpg)",
    cloudyNight: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462739871/26D37D245B_dqegyj.jpg)",
    veryCloudy: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462739960/TPEXTHL5OP_bfjv5i.jpg)",
    rain: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462740003/TMULMQLOPW_r51xos.jpg)",
    rainSun:
"url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1463745972/XLZH9NMVAF_ooz6ru.jpg)",
    storm: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462739871/26D37D245B_dqegyj.jpg)",
    snow: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462740018/FWLQSWNRLP_vfu7pk.jpg)",
    snowNight:
"url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1463745116/C2T1SICGPF_e2gr4f.jpg)",
    mist: "url(http://res.cloudinary.com/melluvia/image/upload/c_scale,w_1500/v1462739787/7KCY6LKLE0_iaon8s.jpg)"    
  };
  
  //json location call
  
      $.getJSON("http://ip-api.com/json", function(json) { 
     var city = json.city;
     var country = json.countryCode; 
     var timezone = json.timezone;
      $("#city").html(city);
$("#country").html(country);
   
      
  //get OpenWeather API JSON call
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + ", " + country +"&appid=9887a4684d44ab8428308aee2e17bbe0", function(json) {
  var html = "";

//set appropriate background images
  
  switch(json.weather[0].icon) {
  case "01d":
          $("body").css("background", background.sunny);
          break;
        case "01n":
          $("body").css("background", background.clearNight);
          break;
        case "02d":
        
          $("body").css("background", background.cloudyDay);
          break;
      case "03d":
      
$("body").css("background", background.brokenClouds);
        case "02n":
        case "03n":
          $(".full").css("background", background.cloudyNight);
          break;
        case "04d":
        case "04n":
          $(".full").css("background", background.veryCloudy);
          break;
        case "09d":
        case "09n":
          $("body").css("background", background.rain);
          break;      
        case "10d":
        case "10n":
          $("body").css("background", background.rainSun);
          break;
        case "11d":
        case "11n":
          $("body").css("background", background.storm);
          break;
        case "13d":
          $("body").css("background", background.snow);
          break;
      case "13n":
          $("body").css("background", background.snowNight);
          break;
        case "50d":
        case "50n":
          $("body").css("background", background.mist);
          break;
      }
   //temperature 
          
   //convert to celcius
  var cel = Math.round(json.main.temp - 273.15);  
   var celSign = "&deg;C"; 
          
   //convert to fahrenheit
          
  var fahr = Math.round(json.main.temp * (9/5) - 459.67);
   var farSign = "&deg;F";   
 $("#temperature").html(fahr); 
 $("#temp-sign").html(farSign);
          
 //the toggle between C and F
          
  $(".btn").click(function() {
    if ($(this).hasClass("far")) {
      $(this).removeClass("far");
      $(this).addClass("cel");
      $(this).text("F\xB0");
      $(".temp").html(cel);
      $("#temp-sign").html(celSign);
    } else {
      $(this).removeClass("cel");
      $(this).addClass("far");
      $(this).text("C\xB0");
      $(".temp").html(fahr);
      $("#temp-sign").html(farSign);
    }
  });        
    
  //forecast
      $("#forecast").html(json.weather[0].description);
          
 //weather-icon

$(".icon").html('<img src="http://openweathermap.org/img/w/' + json.weather[0].icon + '.png" alt="Weather Icon">');         
          
//get current date
          
var today = new Date();
          
//day of the week array
          
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!


today = n+', '+mm+'/'+dd;
$("#date").html(today);
      
        })
    
      });
    });
    
  
 
