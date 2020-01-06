//1. Swapping values by using array
let mon = "Sat";
let sat = "Mon";

[set, mon] = [mon, sat];

console.log(mon);
console.log(sat);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const [,,,thu, fri] = days;

console.log(thu, fri);