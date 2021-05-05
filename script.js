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

function translate(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
translate(langUrl(availLang, "coors"));

function langUrl(arr, beer) {
  let r = Math.floor(Math.random() * arr.length);
  lang = arr[r];
  console.log(lang);

  langUrl = `https://api.funtranslations.com/translate/${lang}.json?text=Bartender,%20I%20would%20like%20to%20order%20a%20beer.%20Make%20it%20a%20${beer}`;
  return langUrl;
}
fetch("https://https://api.punkapi.com/v2/beers?page=2&per_page=100");
fetch("https://https://api.punkapi.com/v2/beers")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
