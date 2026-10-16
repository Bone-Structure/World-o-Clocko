  function updateTime(){

  
  let losAngelesElement = document.querySelector("#los-angeles");
  if(losAngelesElement){
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    
    losAngelesDateElement.innerHTML = losAngelesTime.format ("MMM Do YYYY");
    losAngelesTimeElement.innerHTML =losAngelesTime.format("h:mm:ss[<small>]A[</small>]");
  }
  let newyorkElement = document.querySelector("#new-york");
  if(newyorkElement){
    let newyorkDateElement = newyorkElement.querySelector(".date");
    let newyorkTimeElement = newyorkElement.querySelector(".time");
    let newyorkTime = moment().tz("America/New_York");
    
    newyorkDateElement.innerHTML = newyorkTime.format ("MMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTime.format("h:mm:ss[<small>]A[</small>]");

 }
}
function updateCity(event){
  let cityTimeZone= event.target.value;
  if(cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split ("/")[1];
  let cityTime= moment().tz(cityTimeZone);
  let citiesSelectElement= document.querySelector("#cities");
  citiesSelectElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date"> ${cityTime.format("MMM Do YYYY")}</div>
        </div>
        <div class="time"> ${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
          </div>
          <a href="index.html">All cities</a>
`
;}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
  




