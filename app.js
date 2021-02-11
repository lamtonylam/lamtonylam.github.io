/*=============================
    Made With ♥ By Al Nahian
  ============================*/
// Start Code
// 05 Sep July 2020
// Al Nahian | https://alnahian.xyz

// global variables
var yourName = document.getElementById("yourname"),
  theirName = document.getElementById("theirname"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveScore = Math.random() * 100,
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

//capitalize input values
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Love Score Counter
function love() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function () {
    var i = 0;
    while (i < loveScore) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
    }
  })();
}

// Add eventlistener to button
calcBtn.addEventListener("click", function (e) {
  loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
  e.preventDefault();
  if (yourName.value == "" && theirName.value == "") {
    alert("You can't leave fields empty");
  }
  if (yourName.value == "") {
    alert("Syötä sinun nimesi");
  }
  if (theirName.value == "") {
    alert("Syötä hänen nimensä");
  }

  //lovescore conditions
  else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " Huonolta näyttää, kymmenyksen verran rakastatte. Saattaa crushi jo jättää, parempi mennä itse maate.";
  } else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " Kevyttä intoa, pieni kipinä yössä. Rakkautta löytyy, mutta silti vähän syrjässä.";
  } else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " Ei paras mut’ ei huono, kolmanneksen yli tai alle. Rakastatte silti, yhteiselle taivasalle.";
  } else if (loveScore <= 40) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " Löytyy jo Hellusta, parit uudet. Teillä yhdessä, suuret mahdollisuudet.";
  } else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " Puolimatkas’ tai enemmän, ystävyyteenne lempeemmän. Kysy rakkautes ulos, ja kerro hieno tulos.";
  } else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " rakastavat toisiaan kuin maapallo ja kuu, jotka vetävät toisiaan yhteen.";
  } else if (loveScore <= 70) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " sopivat yhteen kuin Ikea ja lihapullat.";
  } else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " ovat yhteensopivia kuin Erikeeper ja kuvisluokka.";
  } else if (loveScore <= 90) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>Sinä</b> ja " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " ne yhteen sopii. Huomenna mennään pussauskoppiin. Sieltä kuuluu riks raks.";
  } else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
    "<b>Sinä</b> ja " +
    "<b>" +
    capitalize_Words(theirName.value) +
    "</b>" +
    " sopivat yhteen kuin Tuhkimo ja lasikenkä.";
  }
});
