const getMoviesPromise = () => {
  fetch("http://google.com")
    .then(response => {
      console.log(resopnse);
      return response.json();
    })
    .then(json => console.log(json))
    .catch(error => console.log(error));
};

const getMoviesAsync = async () => {
  try {
    const response = await fetch("http://google.com");
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(e);
  } finally {
    console.log("We are done!");
  }
};

getMoviesAsync();
