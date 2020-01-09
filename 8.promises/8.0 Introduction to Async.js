const amISexy = new Promise((res, rej) => {
  setTimeout(rej, 3000, "You are ugly");
});

amISexy.then(result => console.log(result)).catch(error => console.log(error));
