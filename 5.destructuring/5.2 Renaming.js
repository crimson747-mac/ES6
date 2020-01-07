const settings = {
    color: {
        chosen_color: "dark"
    }
};

let chosenColor = "blue";
console.log(chosenColor);

//updating chosenColor(blue => light)
({color:{chosen_color : chosenColor = 'light'}} = settings);
console.log(chosenColor);