function currentDate(){
  var date = new Date();
  var dd = date.getDate();
  var mo = date.getMonth();
  var yy = date.getFullYear();
  var dy = date.getDay();
  
  if(dd<=9){
    dd="0"+dd;
  }
  
  var months =["Jan","Feb",'Mar','Apr',"May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  mo = months[mo];
  var days =["ఆదివారం","సోమవారం","మంగళవారం"," బుధవారం","గురువారం","శుక్రవారం","శనివారం"];
  dy = days[dy];
  var curDate = dd+"/"+mo+"/"+yy;
  document.getElementById("date").innerHTML=curDate;
  document.getElementById("day").innerHTML=dy;
}
setInterval(currentDate,1000);

function dateOutput(){
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();
  var am_pm = "Am";
  if(hh>=12){
    am_pm = "Pm";
    if(hh>=13){
      hh-=12;
    }
  }
  if(hh==0){
    hh=12;
  }
  if(hh<=9){
    hh = "0"+hh;
  }
  if(mm<=9){
    mm = "0"+mm;
  }

  if(ss<=9){
    ss = "0"+ss;
  }
  var time = hh+":"+mm+" "+am_pm;
  document.getElementById("hours12").innerHTML=time;
  document.getElementById("sec").innerHTML=ss;
}
setInterval(dateOutput,1000);

function dateOutput24(){
  var date = new Date();
  var hh = date.getHours();
  var mm = date.getMinutes();
  if(hh<=9){
    hh = "0" + hh
  }
  if(mm<=9){
    mm = "0" + mm
  }

  var currentHr = hh+":"+mm;
  document.getElementById("hours24").innerHTML=currentHr;
}
setInterval(dateOutput24,1000);

var num = 0;
function toggleBut(){
  num++;
  if(num%2==0){
    document.getElementById("button").style.left="0px";
    document.getElementById("hours24").style.display="none";
    document.getElementById("hours12").style.display="block";
    document.getElementById("toggle").style.background="white";
    document.getElementById("button").style.backgroundColor="blue";
  }
  else{
    document.getElementById("button").style.left="3vw";
    document.getElementById("hours24").style.display="block";
    document.getElementById("hours12").style.display="none";
    document.getElementById("toggle").style.background="blue";
    document.getElementById("button").style.backgroundColor="white";
  }
}

// function bgImage(){
//   var date = new Date();
//   var dy = date.getDay();
//   let imgarr = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg"];
//   document.body.style.backgroundImage=`url(../../DigitalClock/asset/imgs/${imgarr[dy]})`;
// }

function closedAlarm(){
  document.querySelector("#alarmContainer").style.display="none"
}

function openAlarm(){
  document.querySelector("#alarmContainer").style.display="flex"
}

var audio = new Audio("../DigitalClock/asset/epic-trap-intro.mp3");
var allInp = document.querySelectorAll(".inp");
function setAlarm(){
    
  var date = new Date();
  var date1 = date.getDate();
  var mon = date.getMonth()+1;
  var year = date.getFullYear();

  var hr = date.getHours();
  var min = date.getMinutes();

  if(mon<=9){
    mon ="0"+mon;
  }

  if(date1<=9){
    date1 ="0"+date1;
  }

  if(min<=9){
    min ="0"+min;
  }

  if(hr<=9){
    hr ="0"+hr;
  }
  
  var finaldate = `${year}-${mon}-${date1}`;
  var finaltime = `${hr}:${min}`;
  
  var dat = allInp[0].value;
  var time = allInp[1].value;
 
  if(finaldate==dat && finaltime==time){
    audio.play();
  }
} 
setInterval(setAlarm,1000)

function pauseAlarm(){
  audio.pause();
}