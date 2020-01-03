const wrapper = document.querySelector(".wrapper");

const friends = ["tree", "crimson", "black", "zero"];

const list = `
    <h1>People I Love</h1>
    <ul>
        ${friends.map(friend => `<li>${friend}</li>`).join("")}
    </ul>`;

wrapper.innerHTML = list;
