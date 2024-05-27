"use strict";


const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const flightsArr = flights.split("+");

for (const flight of flights.split("+")) {
  //   console.log(flight);
  const [type, from, to, time] = flight.split(";");
  const str = `${type.split("_").join(" ")} ${from
    .slice(0, 3)
    .toUpperCase()} ${to.slice(0, 3).toUpperCase()} (${time.replace(
    ":",
    "h"
  )})`.padStart(40, " ");

  console.log(str);
  
  // => test data
  //   console.log(
  //     type.replaceAll("_", " "),
  //     from.slice(0, 3).toUpperCase(),
  //     to.slice(0, 3).toUpperCase(),
  //     time.replace(":", "h")
  //   );
}
