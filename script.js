var availLang = [
  "Yoda",
  "Pirate",
  "Valspeak",
  "Minion",
  "Ferb-latin",
  "Pig-latin",
  "Dothraki",
  "Valyrian",
  "Hodor",
  "Sindarin",
  "Quenya",
  "Orcish",
  "Sith",
  "Cheunh",
  "Gungan",
  "Mandalorian",
  "Huttese",
  "Chef",
  "Catalan",
  "Oldenglish",
  "Shakespeare",
  "Vulcan",
  "Klingon",
  "Romulan",
  "Dovahzul",
  "Thuum",
  "Aldmeris",
  "Groot",
  "Jive",
  "Ebonics",
  "Dolan",
  "Fudd",
  "Kraut",
  "Wow",
  "Cockney",
  "Norfolk",
  "Morse",
  "Us2uk",
  "Uk2us",
  "Leetspeak",
  "Brooklyn",
  "Ermahgerd",
  "Australian",
  "Boston",
  "Austrian",
  "Article_rewrite",
  "Braille",
  "Numbers",
  "Emoji",
  "Doge",
  "Navi",
  "Southern-accent",
  "Ubbi-dubbi",
  "Inflationary-english",
  "George-bush-dubya",
  "Post-modern",
  "Ayleidoon",
  "Redneck",
  "Roman-numerals",
  "Asian-accent",
  "Russian-accent",
  "English-contraction",
  "Irish",
  "British",
  "German-accent",
  "Draconic",
];
var beerInfo;
var favBeer = [];

// var subBut = $(".btn-primary");
// var prevDis = $(".lower-inputs");

// function translate(requestUrl) {
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }
// translate(langUrl(availLang, "coors"));

// function langUrl(arr, beer) {
//   let r = Math.floor(Math.random() * arr.length);
//   lang = arr[r];
//   console.log(lang);

//   langUrl = `https://api.funtranslations.com/translate/${lang}.json?text=Bartender,%20I%20would%20like%20to%20order%20a%20beer.%20Make%20it%20a%20${beer}`;
//   return langUrl;
// }
fetch("https://api.punkapi.com/v2/beers?page=2")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    beerInfo = data;
  });

function storeFav(obj) {
  var disArr = JSON.parse(localStorage.getItem("favBeer")) || [];
  disArr.unshift(obj);
  if (disArr.length > 3) {
    disArr.pop();
  }
  localStorage.setItem("favBeer", JSON.stringify(disArr));
}

var displayHist = function () {
  var disArr = JSON.parse(localStorage.getItem("favBeer")) || [];

  $(".card-deck").each(function (i) {
    $(this).append(
      `<div class="card">
        <div class="card-body">
        <h3>Beer Name: ${disArr[i].name}</h3>
        <p>${disArr[i].tagline}</p>
        <p>${disArr[i].abv}</p>
        </div>
      </div>`
    );
  });
};
function displayResult(data) {
  $("temp").text(data[0].image_url);
  $("temp").text(data[0].tagline);
  $("temp").text(data[0].description);
  $("temp").text(data[0].abv);
  $("temp").text(data[0].food_pairing[0]);
}
