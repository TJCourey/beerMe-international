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

// fetch to show all availible data from return from PunkedAPI

fetch("https://api.punkapi.com/v2/beers")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    var name = [];
    var abv = [];
    var ibu = [];
    var ebc = [];
    var description = [];
    var image = [];

    // populate variable arrays
    for (var i = 0; i < data.length; i++) {
      name.push(data[i].name);
      abv.push(data[i].abv);
      ibu.push(data[i].ibu);
      ebc.push(data[i].ebc);
      description.push(data[i].description);
      image.push(data[i].image_url);
    }

    //determine percentage match to array content
    var abvSliderNumber = 5;
    var a;
    var b;

    var abvMatches = [];
    var ibuMatches = [];

    for (var i = 0; i < data.length; i++) {
      var abvN = abv[i];
      if (abvSliderNumber < abv[i]) {
        a = abvSliderNumber;
        b = abv[i];
      } else {
        a = abv[i];
        b = abvSliderNumber;
      }

      console.log((a / b) * 100);
      if ((a / b) * 100 >= 75) {
        console.log("75% match or more! ABV");
        var abvIndex = abv.indexOf(abvN);
        abvMatches.push(abvIndex);
      }
    }

    var ibuSliderNumber = 50;
    var a;
    var b;

    for (var i = 0; i < data.length; i++) {
      var ibuN = ibu[i];
      if (ibuSliderNumber < ibu[i]) {
        a = ibuSliderNumber;
        b = ibu[i];
      } else {
        a = ibu[i];
        b = ibuSliderNumber;
      }

      console.log((a / b) * 100);
      if ((a / b) * 100 >= 75) {
        console.log("75% match or more! IBU");

        var ibuIndex = ibu.indexOf(ibuN);
        ibuMatches.push(ibuIndex);
      }

      console.log("ABV matches: " + abvMatches);
      console.log("IBU matches: " + ibuMatches);
    }

    var lArrary;
    var sArray;

    if (abvMatches.length > ibuMatches.length) {
      lArrary = abvMatches;
      sArray = ibuMatches;
    } else {
      lArrary = ibuMatches;
      sArray = abvMatches;
    }

    // var matches = [];

    // for (var i = 0; i < lArrary.length; i++) {
    //   for (var j = 0; j < sArray.length; j++) {
    //     if (lArrary[i] === sArray[j]) {
    //       matches.push(lArrary[i]);
    //       console.log("Final matches: " + matches);
    //     }
    //   }
    // }
  });
