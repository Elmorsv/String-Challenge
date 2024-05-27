"use strict";
/*
const airLine = "TAP Air Portagle";
const address = "";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log("Goku"[0]);
console.log("Goku".length);

// String Methods

console.log(airLine.indexOf("r")); // "TAP Air<= Portagle"
console.log(airLine.lastIndexOf("r")); // "TAP Air Por<=tagle" give the index of last element.

// if you get -1 the element hasn't exist.
console.log(airLine.indexOf("Portagle"));

console.log(airLine.slice(4));
console.log(airLine.slice(4, 7));

// to store new string because it's cannot be mutate
const newStr = airLine.slice(4, 7);
console.log(newStr);

// Dynamic way

// TAP

console.log(airLine.slice(0, airLine.indexOf(" ")));
// Portagle
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1, -1));
*/

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
  
  //   console.log(
  //     type.replaceAll("_", " "),
  //     from.slice(0, 3).toUpperCase(),
  //     to.slice(0, 3).toUpperCase(),
  //     time.replace(":", "h")
  //   );
}
