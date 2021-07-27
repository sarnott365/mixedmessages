// random weather forecast
const cities = ["Toronto","Los Angeles","New York","London","Vancouver","Seattle","Tokyo"];
const conditions = ["wet","overcast","sunny"];
const precipTypes = ["snow","rain","showers","hail","thunderstorms","snow"];

let city = cities[Math.floor(Math.random()*cities.length)];
let condition = conditions[Math.floor(Math.random()*conditions.length)];
let precipList = "No Precipitation is expected";

if (condition === "wet" || condition === "overcast"){
  // assign details of wet weather
  precipList = "Expect the following precipitation: ";
  let typeCnt = Math.floor(Math.random()*precipTypes.length) + 1;
  typeCnt = Math.min(typeCnt,3);

  for (let i = 1; i <= typeCnt ; i++){
    let newType = precipTypes[Math.floor(Math.random()*precipTypes.length)];
    if (precipList.indexOf(newType) !== -1) continue;
    precipList +=  (i>1 && i<typeCnt)? "," : "";
    precipList += (typeCnt > 1 && i===typeCnt )? " and " : "";
    precipList +=  newType;
  }
}

// set temperatures between Low: -40 to +100 F, High -40 to 11F
let lowTemp = Math.floor(Math.random()*140) - 40;
let highTemp = 0;
do {
  highTemp = Math.floor(Math.random()*155) -40;
} while (highTemp < lowTemp);

let wackyWeather = `Today's forecast for ${city} expects a(n) ${condition} day \n`;
wackyWeather = wackyWeather + `${precipList} \n`;
wackyWeather = wackyWeather + `Expect a low of ${lowTemp}F and a high of ${highTemp}F\n \n`;
wackyWeather = wackyWeather + `Enjoy your Day!`;


console.log(wackyWeather);