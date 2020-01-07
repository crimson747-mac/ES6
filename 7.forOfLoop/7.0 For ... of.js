//1. forEach => onln for Array
const friends = ["tree", "crimson", "zero"];

friends.forEach((friend, index) => {
    console.log(`${index}: ${friend}`);
})

//2. for of => iterables like array like object can work
// let friend => is posible
for(const friend of friends) {
    console.log(friend);

    if(friend === "crimson") break;
}

for(const word of "Hello") {
    console.log(word);
}