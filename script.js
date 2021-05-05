fetch("https://https://api.punkapi.com/v2/beers?page=2&per_page=100")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
