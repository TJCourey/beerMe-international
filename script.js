console.log("Hello World");
var userInput2 = $("#userInput2");
var submitBtn = $("#sumbitButton");
var deck = $(".card-deck");
var randomBtn = $("#randomButton");

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

// The following local variables are created for output:
// minAbv type INT, stores minimum abv of all beers recived from response
// maxAbv type INT, stores maximum abv of all beers recived from response
// minIbu type INT, stores minimum ibu of all beers received from response
// maxIbu type INT, stores maximum ibu of all beers received from response
// abvSlider type INT, should recieve user selection of abv
// ibuSlider type INT, should recieve user selection of ibu
// finalMatches type ARRAY, should contain INDEX NUMBER for use in response (cont'd)
// object that are a CERTAIN PERCENTAGE match for both ABV and IBU user selected
// submitPressed type bool, if true matches are searched for if false matches are not found

// fetch to show all availible data from return from PunkedAPI

var finalMatchesArr = [];
var submitPressed = true;
var checkFalse = false;

function fetchData(condition) {
  fetch("https://api.punkapi.com/v2/beers")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      console.log("DETERMINE MIN MAX");

      //These arrays store data extracted from the original response object so there's minimal data to work on
      var name = [];
      var abv = [];
      var ibu = [];
      var ebc = [];
      var description = [];
      var image = [];

      // populate storage arrays

      if (!condition) {
        for (var i = 0; i < data.length; i++) {
          name.push(data[i].name);
          abv.push(data[i].abv);
          ibu.push(data[i].ibu);
          ebc.push(data[i].ebc);
          description.push(data[i].description);
          image.push(data[i].image_url);
        }
      } else {
        console.log("submit was true, arrays should already be populated");
      }

      //Determine min and max of abv:
      var maxAbv = Math.max(...abv);
      var minAbv = Math.min(...abv);
      console.log("Max abv: " + maxAbv);
      console.log("Min abv: " + minAbv);

      //Determine min and max of ibu:
      var maxIbu = Math.max(...ibu);
      var minIbu = Math.min(...ibu);
      console.log("Max ibu: " + maxIbu);
      console.log("Min abv: " + minIbu);

      console.log("FIND MATCHES");

      //determine percentage match to array content ABV
      var abvSliderNumber = 5;
      var a;
      var b;

      var abvMatches = [];
      var ibuMatches = [];

      for (var i = 0; i < data.length; i++) {
        console.log("ABV[i}: " + abv[i]);
        var abvN = abv[i];
        //comparison to determain which is bigger, the number the user chooses on the slider or the value of alcohol by volume
        //necessary for computing percentage correctly, smallest number is divided by larger one
        if (abvSliderNumber < abv[i]) {
          a = abvSliderNumber;
          b = abv[i];
        } else {
          a = abv[i];
          b = abvSliderNumber;
        }

        //console log to determine output of percentage operation
        console.log((a / b) * 100);

        //CHANGE MATCH PERCENTAGE HERE!!!
        //evaluate if the percentage match is  75% or greater, change 75 to whatever percentage accuracy we want
        if ((a / b) * 100 >= 75) {
          console.log("75% match or more! ABV");
          //abvIndex stores the index number of the result from the abv array
          var abvIndex = abv.indexOf(abvN);
          //pushes the INDEX NUMBER of the result to a new array
          abvMatches.push(abvIndex);
        }
      }

      //determine percentage match to array content IBU
      var ibuSliderNumber = 50;
      var a;
      var b;

      for (var i = 0; i < data.length; i++) {
        var ibuN = ibu[i];
        //comparison to determain which is bigger, the number the user chooses on the slider or the value of alcohol by volume
        //necessary for computing percentage correctly, smallest number is divided by larger one
        if (ibuSliderNumber < ibu[i]) {
          a = ibuSliderNumber;
          b = ibu[i];
        } else {
          a = ibu[i];
          b = ibuSliderNumber;
        }

        //console log to determine output of percentage operation
        //console.log((a / b) * 100);

        //CHANGE MATCH PERCENTAGE HERE!!!
        //evaluate if the percentage match is  75% or greater, change 75 to whatever percentage accuracy we want
        if ((a / b) * 100 >= 75) {
          console.log("75% match or more! IBU");

          //ibuIndex stores the index number of the result from the abv array
          var ibuIndex = ibu.indexOf(ibuN);
          //pushes the INDEX NUMBER of the result to a new array
          ibuMatches.push(ibuIndex);
        }

        //console log the content of the match arrays
        console.log("ABV matches: " + abvMatches);
        console.log("IBU matches: " + ibuMatches);

        var abvMatchesUnique = [...new Set(abvMatches)];
        var ibuMatchesUnique = [...new Set(ibuMatches)];

        //remove duplicates
        console.log(abvMatchesUnique + " abvSET");
        console.log(ibuMatchesUnique + " ibuSET");
      }

      //conditionals to determin matches between BOTH match arrays for final results
      var lArray;
      var sArray;
      var finalMatches = [];

      if (abvMatchesUnique.length > ibuMatchesUnique.length) {
        lArray = abvMatchesUnique;
        sArray = ibuMatchesUnique;
      } else {
        lArray = ibuMatchesUnique;
        sArray = abvMatchesUnique;
      }

      //this for loop should itterate though all of the contents of the larger array,
      //determin if there is a match,
      //push that match to the finalMatches array
      for (var i = 0; i < lArray.length; i++) {
        var n = sArray.includes(lArray[i]);

        if (n) {
          console.log("found a match between the matches arrays!");
          finalMatchesArr.push(sArray[i]);
        }
      }

      getFinalBeer();

      //This outputs the list of final matches between both criteria!!!  use array "finalMatches" to select beers
      //from object using the numbers in finalMatches as index numbers in the original return object!
      console.log(
        "The following index numbers are a match for both user criteria: " +
          finalMatchesArr
      );
    });
}

fetchData(checkFalse);

fetchData(submitPressed);

var beer = finalMatchesArr;

//selection for beer choosen!!!
function getFinalBeer() {
  console.log(beer + " this is the final beer");

  let r = beer[Math.floor(Math.random() * beer.length)];
  console.log("this is the index of the final beer" + r);
  var selection = beer[r];

  console.log("This is the beer selected: " + selection);

  return selection;
}

//end of Peter's code

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

//submit click listener
$("#submitButton").click(function () {});

//Random button click listener
$("#randomButton").click(function () {});

// abv Slider listener
$(".abv-slider").on({
  change: function () {
    var abvRequest = $(".abv-slider").val();
    console.log(abvRequest, "requested abv");
  },
});
// ibu slider listener
$(".ibu-slider").on({
  change: function () {
    var ibuRequest = $(".ibu-slider").val();
    console.log(ibuRequest, "requested ibu");
  },
});

function getRandomBeer() {
  fetch("https://api.punkapi.com/v2/beers?per_page=50")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var randomBeer = Math.floor(Math.random() * data.length);
      console.log(randomBeer + " Are we getting this?");
      console.log("Name: " + data[randomBeer - 1].name);
      console.log("description: " + data[randomBeer - 1].description);
      console.log("Tagline: " + data[randomBeer - 1].tagline);
    });
}

getRandomBeer();
