const wrapper = document.querySelector(".wrapper");

const addWelcom = () => {
  const div = `
  <div class="hello">
    <h1>hello</h1>
  </div>
  `;
  wrapper.innerHTML = div;
};

setTimeout(addWelcom, 2000);
