  function updateTime(){

  
  let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    
    losAngelesDateElement.innerHTML = losAngelesTime.format ("MMM Do YYYY");
    losAngelesTimeElement.innerHTML =losAngelesTime.format("h:mm:ss[<small>]A[</small>]");

  let newyorkElement = document.querySelector("#new-york");
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");
    
    newyorkDateElement.innerHTML = newyorkTime.format ("MMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss[<small>]A[</small>]");


  }
updateTime();
setInterval(updateTime, 1000);

  






