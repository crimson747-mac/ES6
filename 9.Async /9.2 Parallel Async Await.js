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
    const [moviesResponse, upcomingResponse] = await Promise.all([
      fetch("http://www.naver.com"),
      fetch("http://google.com")
    ]);

    const [movies, upcoming] = await Promise.all([
      moviesResponse.json(),
      upcomingResponse.json()
    ]);
    console.log(movies, upcoming);
  } catch (error) {
    console.log(e);
  } finally {
    console.log("We are done!");
  }
};

getMoviesAsync();
