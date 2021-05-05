fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
