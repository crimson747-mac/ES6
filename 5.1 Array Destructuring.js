const days = ["Mon", "Tue", "Wed"];

const [mon, tue, wed, add = "added"] = days;

console.log(mon, tue, wed, add);

const days2 = () => ["Mon2", "Tue2", "Wed2"];

const [mon2, tue2, wed2, add2 = "added"] = days2();

console.log(mon2, tue2, wed2, add2);
