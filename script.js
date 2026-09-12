/* =========================================================
    COUNTRIES
========================================================= */

const countries = [
  {name:"Afghanistan",capital:"Kabul"},
  {name:"Albania",capital:"Tirana"},
  {name:"Algeria",capital:"Algiers"},
  {name:"Andorra",capital:"Andorra la Vella"},
  {name:"Angola",capital:"Luanda"},
  {name:"Antigua and Barbuda",capital:"Saint John's"},
  {name:"Argentina",capital:"Buenos Aires"},
  {name:"Armenia",capital:"Yerevan"},
  {name:"Australia",capital:"Canberra"},
  {name:"Austria",capital:"Vienna"},
  {name:"Azerbaijan",capital:"Baku"},
  {name:"Bahamas",capital:"Nassau"},
  {name:"Bahrain",capital:"Manama"},
  {name:"Bangladesh",capital:"Dhaka"},
  {name:"Barbados",capital:"Bridgetown"},
  {name:"Belarus",capital:"Minsk"},
  {name:"Belgium",capital:"Brussels"},
  {name:"Belize",capital:"Belmopan"},
  {name:"Benin",capital:"Porto-Novo"},
  {name:"Bhutan",capital:"Thimphu"},
  {name:"Bolivia",capital:"Sucre"},
  {name:"Bosnia and Herzegovina",capital:"Sarajevo"},
  {name:"Botswana",capital:"Gaborone"},
  {name:"Brazil",capital:"Brasília"},
  {name:"Brunei",capital:"Bandar Seri Begawan"},
  {name:"Bulgaria",capital:"Sofia"},
  {name:"Burkina Faso",capital:"Ouagadougou"},
  {name:"Burundi",capital:"Gitega"},
  {name:"Cabo Verde",capital:"Praia"},
  {name:"Cambodia",capital:"Phnom Penh"},
  {name:"Cameroon",capital:"Yaoundé"},
  {name:"Canada",capital:"Ottawa"},
  {name:"Central African Republic",capital:"Bangui"},
  {name:"Chad",capital:"N'Djamena"},
  {name:"Chile",capital:"Santiago"},
  {name:"China",capital:"Beijing"},
  {name:"Colombia",capital:"Bogotá"},
  {name:"Comoros",capital:"Moroni"},
  {name:"Congo",capital:"Brazzaville"},
  {name:"Costa Rica",capital:"San José"},
  {name:"Croatia",capital:"Zagreb"},
  {name:"Cuba",capital:"Havana"},
  {name:"Cyprus",capital:"Nicosia"},
  {name:"Czechia",capital:"Prague"},
  {name:"Democratic Republic of the Congo",capital:"Kinshasa"},
  {name:"Denmark",capital:"Copenhagen"},
  {name:"Djibouti",capital:"Djibouti"},
  {name:"Dominica",capital:"Roseau"},
  {name:"Dominican Republic",capital:"Santo Domingo"},
  {name:"Ecuador",capital:"Quito"},
  {name:"Egypt",capital:"Cairo"},
  {name:"El Salvador",capital:"San Salvador"},
  {name:"Equatorial Guinea",capital:"Malabo"},
  {name:"Eritrea",capital:"Asmara"},
  {name:"Estonia",capital:"Tallinn"},
  {name:"Eswatini",capital:"Mbabane"},
  {name:"Ethiopia",capital:"Addis Ababa"},
  {name:"Fiji",capital:"Suva"},
  {name:"Finland",capital:"Helsinki"},
  {name:"France",capital:"Paris"},
  {name:"Gabon",capital:"Libreville"},
  {name:"Gambia",capital:"Banjul"},
  {name:"Georgia",capital:"Tbilisi"},
  {name:"Germany",capital:"Berlin"},
  {name:"Ghana",capital:"Accra"},
  {name:"Greece",capital:"Athens"},
  {name:"Grenada",capital:"St. George's"},
  {name:"Guatemala",capital:"Guatemala City"},
  {name:"Guinea",capital:"Conakry"},
  {name:"Guinea-Bissau",capital:"Bissau"},
  {name:"Guyana",capital:"Georgetown"},
  {name:"Haiti",capital:"Port-au-Prince"},
  {name:"Honduras",capital:"Tegucigalpa"},
  {name:"Hungary",capital:"Budapest"},
  {name:"Iceland",capital:"Reykjavík"},
  {name:"India",capital:"New Delhi"},
  {name:"Indonesia",capital:"Jakarta"},
  {name:"Iran",capital:"Tehran"},
  {name:"Iraq",capital:"Baghdad"},
  {name:"Ireland",capital:"Dublin"},
  {name:"Israel",capital:"Jerusalem"},
  {name:"Italy",capital:"Rome"},
  {name:"Ivory Coast",capital:"Yamoussoukro"},
  {name:"Jamaica",capital:"Kingston"},
  {name:"Japan",capital:"Tokyo"},
  {name:"Jordan",capital:"Amman"},
  {name:"Kazakhstan",capital:"Astana"},
  {name:"Kenya",capital:"Nairobi"},
  {name:"Kiribati",capital:"South Tarawa"},
  {name:"Kuwait",capital:"Kuwait City"},
  {name:"Kyrgyzstan",capital:"Bishkek"},
  {name:"Laos",capital:"Vientiane"},
  {name:"Latvia",capital:"Riga"},
  {name:"Lebanon",capital:"Beirut"},
  {name:"Lesotho",capital:"Maseru"},
  {name:"Liberia",capital:"Monrovia"},
  {name:"Libya",capital:"Tripoli"},
  {name:"Liechtenstein",capital:"Vaduz"},
  {name:"Lithuania",capital:"Vilnius"},
  {name:"Luxembourg",capital:"Luxembourg"},
  {name:"Madagascar",capital:"Antananarivo"},
  {name:"Malawi",capital:"Lilongwe"},
  {name:"Malaysia",capital:"Kuala Lumpur"},
  {name:"Maldives",capital:"Malé"},
  {name:"Mali",capital:"Bamako"},
  {name:"Malta",capital:"Valletta"},
  {name:"Marshall Islands",capital:"Majuro"},
  {name:"Mauritania",capital:"Nouakchott"},
  {name:"Mauritius",capital:"Port Louis"},
  {name:"Mexico",capital:"Mexico City"},
  {name:"Micronesia",capital:"Palikir"},
  {name:"Moldova",capital:"Chișinău"},
  {name:"Monaco",capital:"Monaco"},
  {name:"Mongolia",capital:"Ulaanbaatar"},
  {name:"Montenegro",capital:"Podgorica"},
  {name:"Morocco",capital:"Rabat"},
  {name:"Mozambique",capital:"Maputo"},
  {name:"Myanmar",capital:"Naypyidaw"},
  {name:"Namibia",capital:"Windhoek"},
  {name:"Nauru",capital:"Yaren"},
  {name:"Nepal",capital:"Kathmandu"},
  {name:"Netherlands",capital:"Amsterdam"},
  {name:"New Zealand",capital:"Wellington"},
  {name:"Nicaragua",capital:"Managua"},
  {name:"Niger",capital:"Niamey"},
  {name:"Nigeria",capital:"Abuja"},
  {name:"North Korea",capital:"Pyongyang"},
  {name:"North Macedonia",capital:"Skopje"},
  {name:"Norway",capital:"Oslo"},
  {name:"Oman",capital:"Muscat"},
  {name:"Pakistan",capital:"Islamabad"},
  {name:"Palau",capital:"Ngerulmud"},
  {name:"Palestine",capital:"Ramallah"},
  {name:"Panama",capital:"Panama City"},
  {name:"Papua New Guinea",capital:"Port Moresby"},
  {name:"Paraguay",capital:"Asunción"},
  {name:"Peru",capital:"Lima"},
  {name:"Philippines",capital:"Manila"},
  {name:"Poland",capital:"Warsaw"},
  {name:"Portugal",capital:"Lisbon"},
  {name:"Qatar",capital:"Doha"},
  {name:"Romania",capital:"Bucharest"},
  {name:"Russia",capital:"Moscow"},
  {name:"Rwanda",capital:"Kigali"},
  {name:"Saint Kitts and Nevis",capital:"Basseterre"},
  {name:"Saint Lucia",capital:"Castries"},
  {name:"Saint Vincent and the Grenadines",capital:"Kingstown"},
  {name:"Samoa",capital:"Apia"},
  {name:"San Marino",capital:"San Marino"},
  {name:"Sao Tome and Principe",capital:"São Tomé"},
  {name:"Saudi Arabia",capital:"Riyadh"},
  {name:"Senegal",capital:"Dakar"},
  {name:"Serbia",capital:"Belgrade"},
  {name:"Seychelles",capital:"Victoria"},
  {name:"Sierra Leone",capital:"Freetown"},
  {name:"Singapore",capital:"Singapore"},
  {name:"Slovakia",capital:"Bratislava"},
  {name:"Slovenia",capital:"Ljubljana"},
  {name:"Solomon Islands",capital:"Honiara"},
  {name:"Somalia",capital:"Mogadishu"},
  {name:"South Africa",capital:"Pretoria"},
  {name:"South Korea",capital:"Seoul"},
  {name:"South Sudan",capital:"Juba"},
  {name:"Spain",capital:"Madrid"},
  {name:"Sri Lanka",capital:"Sri Jayawardenepura Kotte"},
  {name:"Sudan",capital:"Khartoum"},
  {name:"Suriname",capital:"Paramaribo"},
  {name:"Sweden",capital:"Stockholm"},
  {name:"Switzerland",capital:"Bern"},
  {name:"Syria",capital:"Damascus"},
  {name:"Tajikistan",capital:"Dushanbe"},
  {name:"Tanzania",capital:"Dodoma"},
  {name:"Thailand",capital:"Bangkok"},
  {name:"Timor-Leste",capital:"Dili"},
  {name:"Togo",capital:"Lomé"},
  {name:"Tonga",capital:"Nuku'alofa"},
  {name:"Trinidad and Tobago",capital:"Port of Spain"},
  {name:"Tunisia",capital:"Tunis"},
  {name:"Türkiye",capital:"Ankara"},
  {name:"Turkmenistan",capital:"Ashgabat"},
  {name:"Tuvalu",capital:"Funafuti"},
  {name:"Uganda",capital:"Kampala"},
  {name:"Ukraine",capital:"Kyiv"},
  {name:"United Arab Emirates",capital:"Abu Dhabi"},
  {name:"United Kingdom",capital:"London"},
  {name:"United States",capital:"Washington, D.C."},
  {name:"Uruguay",capital:"Montevideo"},
  {name:"Uzbekistan",capital:"Tashkent"},
  {name:"Vanuatu",capital:"Port Vila"},
  {name:"Vatican City",capital:"Vatican City"},
  {name:"Venezuela",capital:"Caracas"},
  {name:"Vietnam",capital:"Hanoi"},
  {name:"Yemen",capital:"Sana'a"},
  {name:"Zambia",capital:"Lusaka"},
  {name:"Zimbabwe",capital:"Harare"}
];


/* =========================================================
   ALIASES FOR GEOJSON NAMES
========================================================= */

const aliases = {
  "united states of america": "United States",
  "usa": "United States",
  "us": "United States",

  "russian federation": "Russia",

  "republic of serbia": "Serbia",
  "serbia": "Serbia",

  "republic of korea": "South Korea",
  "korea republic of": "South Korea",
  "south korea": "South Korea",

  "democratic people's republic of korea": "North Korea",
  "korea democratic people's republic of": "North Korea",
  "north korea": "North Korea",

  "republic of turkey": "Türkiye",
  "turkey": "Türkiye",
  "türkiye": "Türkiye",

  "czech republic": "Czechia",
  "czechia": "Czechia",

  "republic of moldova": "Moldova",
  "moldova": "Moldova",

  "kingdom of belgium": "Belgium",
  "kingdom of denmark": "Denmark",
  "kingdom of spain": "Spain",
  "kingdom of norway": "Norway",
  "kingdom of sweden": "Sweden",
  "kingdom of the netherlands": "Netherlands",

  "the bahamas": "Bahamas",
  "bahamas": "Bahamas",

  "the gambia": "Gambia",
  "gambia": "Gambia",

  "brunei darussalam": "Brunei",
  "lao people's democratic republic": "Laos",
  "viet nam": "Vietnam",
  "syrian arab republic": "Syria",
  "united republic of tanzania": "Tanzania",
  "state of palestine": "Palestine",

  "republic of the congo": "Congo",
  "congo": "Congo",

  "democratic republic of the congo":
    "Democratic Republic of the Congo",

  "eswatini": "Eswatini",
  "swaziland": "Eswatini",

  "north macedonia": "North Macedonia",
  "macedonia": "North Macedonia",

  "cape verde": "Cabo Verde",

  "east timor": "Timor-Leste",

  "são tomé and príncipe": "Sao Tome and Principe",
  "sao tome and principe": "Sao Tome and Principe",

  "ivory coast": "Ivory Coast",
  
  "vatican": "Vatican City",
  "holy see": "Vatican City",
  "vatican city state": "Vatican City"
  ,"vatican city state": "Vatican City"
};


/* =========================================================
   CAPITAL ALIASES
========================================================= */

const capitalAliases = {
  "washington dc": "Washington, D.C.",
  "washington d c": "Washington, D.C.",
  "washington": "Washington, D.C.",
  "sao tome": "São Tomé",
  "nuku alofa": "Nuku'alofa",
  "nukualofa": "Nuku'alofa",
  "sanaa": "Sana'a",
  "sana a": "Sana'a",
  "kiev": "Kyiv",
  "reykjavik": "Reykjavík",
  "male": "Malé",
  "chisinau": "Chișinău",
  "new delhi": "New Delhi"
};


/* =========================================================
   AFRICAN COUNTRIES
========================================================= */

const africanCountries = new Set([
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Congo",
  "Democratic Republic of the Congo",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Ivory Coast",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "Sao Tome and Principe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe"
]);


/* =========================================================
   ISLAND COUNTRIES
========================================================= */

const islandCountries = new Set([
  "Antigua and Barbuda",
  "Bahamas",
  "Bahrain",
  "Barbados",
  "Cabo Verde",
  "Comoros",
  "Cuba",
  "Cyprus",
  "Dominica",
  "Dominican Republic",
  "Fiji",
  "Grenada",
  "Haiti",
  "Iceland",
  "Indonesia",
  "Ireland",
  "Jamaica",
  "Japan",
  "Kiribati",
  "Madagascar",
  "Maldives",
  "Malta",
  "Marshall Islands",
  "Mauritius",
  "Micronesia",
  "Nauru",
  "New Zealand",
  "Palau",
  "Papua New Guinea",
  "Philippines",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "Sao Tome and Principe",
  "Seychelles",
  "Singapore",
  "Solomon Islands",
  "Sri Lanka",
  "Timor-Leste",
  "Tonga",
  "Trinidad and Tobago",
  "Tuvalu",
  "United Kingdom",
  "Vanuatu"
]);


/* =========================================================
   REGIONAL COUNTRIES
========================================================= */

const middleEastCountries = new Set([
  "Bahrain", "Cyprus", "Egypt", "Iran", "Iraq", "Israel", "Jordan",
  "Kuwait", "Lebanon", "Oman", "Palestine", "Qatar", "Saudi Arabia",
  "Syria", "Türkiye", "United Arab Emirates", "Yemen"
]);

const asianCountries = new Set([
  "Afghanistan", "Armenia", "Azerbaijan", "Bangladesh", "Bhutan", "Brunei",
  "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran",
  "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan",
  "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal",
  "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar",
  "Russia", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria",
  "Tajikistan", "Thailand", "Timor-Leste", "Turkmenistan", "Türkiye",
  "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"
]);

const europeanCountries = new Set([
  "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina",
  "Bulgaria", "Croatia", "Czechia", "Denmark", "Estonia", "Finland", "France",
  "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Latvia",
  "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco",
  "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal",
  "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain",
  "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"
]);

const northAmericanCountries = new Set([
  "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica",
  "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala",
  "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
  "Trinidad and Tobago", "United States"
]);

const southAmericanCountries = new Set([
  "Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana",
  "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
]);

const importantCountries = new Set([
  "Argentina", "Australia", "Bangladesh", "Belgium", "Brazil",
  "Canada", "Chile", "China", "Colombia", "Czechia", "Denmark", "Egypt",
  "Finland", "France", "Germany", "Greece", "Hungary", "India", "Indonesia",
  "Iran", "Ireland", "Israel", "Italy", "Japan", "Malaysia", "Mexico",
  "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
  "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden",
  "Switzerland", "Thailand", "Türkiye", "United Arab Emirates", "United Kingdom",
  "United States"
]);


/* =========================================================
   FLAGS
========================================================= */

const flagEmoji = {
  "Afghanistan":"🇦🇫","Albania":"🇦🇱","Algeria":"🇩🇿","Andorra":"🇦🇩",
  "Angola":"🇦🇴","Antigua and Barbuda":"🇦🇬","Argentina":"🇦🇷","Armenia":"🇦🇲",
  "Australia":"🇦🇺","Austria":"🇦🇹","Azerbaijan":"🇦🇿","Bahamas":"🇧🇸",
  "Bahrain":"🇧🇭","Bangladesh":"🇧🇩","Barbados":"🇧🇧","Belarus":"🇧🇾",
  "Belgium":"🇧🇪","Belize":"🇧🇿","Benin":"🇧🇯","Bhutan":"🇧🇹",
  "Bolivia":"🇧🇴","Bosnia and Herzegovina":"🇧🇦","Botswana":"🇧🇼",
  "Brazil":"🇧🇷","Brunei":"🇧🇳","Bulgaria":"🇧🇬","Burkina Faso":"🇧🇫",
  "Burundi":"🇧🇮","Cabo Verde":"🇨🇻","Cambodia":"🇰🇭","Cameroon":"🇨🇲",
  "Canada":"🇨🇦","Central African Republic":"🇨🇫","Chad":"🇹🇩",
  "Chile":"🇨🇱","China":"🇨🇳","Colombia":"🇨🇴","Comoros":"🇰🇲",
  "Congo":"🇨🇬","Costa Rica":"🇨🇷","Croatia":"🇭🇷","Cuba":"🇨🇺",
  "Cyprus":"🇨🇾","Czechia":"🇨🇿","Democratic Republic of the Congo":"🇨🇩",
  "Denmark":"🇩🇰","Djibouti":"🇩🇯","Dominica":"🇩🇲",
  "Dominican Republic":"🇩🇴","Ecuador":"🇪🇨","Egypt":"🇪🇬",
  "El Salvador":"🇸🇻","Equatorial Guinea":"🇬🇶","Eritrea":"🇪🇷",
  "Estonia":"🇪🇪","Eswatini":"🇸🇿","Ethiopia":"🇪🇹","Fiji":"🇫🇯",
  "Finland":"🇫🇮","France":"🇫🇷","Gabon":"🇬🇦","Gambia":"🇬🇲",
  "Georgia":"🇬🇪","Germany":"🇩🇪","Ghana":"🇬🇭","Greece":"🇬🇷",
  "Grenada":"🇬🇩","Guatemala":"🇬🇹","Guinea":"🇬🇳",
  "Guinea-Bissau":"🇬🇼","Guyana":"🇬🇾","Haiti":"🇭🇹",
  "Honduras":"🇭🇳","Hungary":"🇭🇺","Iceland":"🇮🇸","India":"🇮🇳",
  "Indonesia":"🇮🇩","Iran":"🇮🇷","Iraq":"🇮🇶","Ireland":"🇮🇪",
  "Israel":"🇮🇱","Italy":"🇮🇹","Ivory Coast":"🇨🇮","Jamaica":"🇯🇲",
  "Japan":"🇯🇵","Jordan":"🇯🇴","Kazakhstan":"🇰🇿","Kenya":"🇰🇪",
  "Kiribati":"🇰🇮","Kuwait":"🇰🇼","Kyrgyzstan":"🇰🇬","Laos":"🇱🇦",
  "Latvia":"🇱🇻","Lebanon":"🇱🇧","Lesotho":"🇱🇸","Liberia":"🇱🇷",
  "Libya":"🇱🇾","Liechtenstein":"🇱🇮","Lithuania":"🇱🇹",
  "Luxembourg":"🇱🇺","Madagascar":"🇲🇬","Malawi":"🇲🇼",
  "Malaysia":"🇲🇾","Maldives":"🇲🇻","Mali":"🇲🇱","Malta":"🇲🇹",
  "Marshall Islands":"🇲🇭","Mauritania":"🇲🇷","Mauritius":"🇲🇺",
  "Mexico":"🇲🇽","Micronesia":"🇫🇲","Moldova":"🇲🇩","Monaco":"🇲🇨",
  "Mongolia":"🇲🇳","Montenegro":"🇲🇪","Morocco":"🇲🇦",
  "Mozambique":"🇲🇿","Myanmar":"🇲🇲","Namibia":"🇳🇦","Nauru":"🇳🇷",
  "Nepal":"🇳🇵","Netherlands":"🇳🇱","New Zealand":"🇳🇿",
  "Nicaragua":"🇳🇮","Niger":"🇳🇪","Nigeria":"🇳🇬","North Korea":"🇰🇵",
  "North Macedonia":"🇲🇰","Norway":"🇳🇴","Oman":"🇴🇲","Pakistan":"🇵🇰",
  "Palau":"🇵🇼","Palestine":"🇵🇸","Panama":"🇵🇦",
  "Papua New Guinea":"🇵🇬","Paraguay":"🇵🇾","Peru":"🇵🇪",
  "Philippines":"🇵🇭","Poland":"🇵🇱","Portugal":"🇵🇹","Qatar":"🇶🇦",
  "Romania":"🇷🇴","Russia":"🇷🇺","Rwanda":"🇷🇼",
  "Saint Kitts and Nevis":"🇰🇳","Saint Lucia":"🇱🇨",
  "Saint Vincent and the Grenadines":"🇻🇨","Samoa":"🇼🇸",
  "San Marino":"🇸🇲","Sao Tome and Principe":"🇸🇹",
  "Saudi Arabia":"🇸🇦","Senegal":"🇸🇳","Serbia":"🇷🇸",
  "Seychelles":"🇸🇨","Sierra Leone":"🇸🇱","Singapore":"🇸🇬",
  "Slovakia":"🇸🇰","Slovenia":"🇸🇮","Solomon Islands":"🇸🇧",
  "Somalia":"🇸🇴","South Africa":"🇿🇦","South Korea":"🇰🇷",
  "South Sudan":"🇸🇸","Spain":"🇪🇸","Sri Lanka":"🇱🇰",
  "Sudan":"🇸🇩","Suriname":"🇸🇷","Sweden":"🇸🇪","Switzerland":"🇨🇭",
  "Syria":"🇸🇾","Tajikistan":"🇹🇯","Tanzania":"🇹🇿",
  "Thailand":"🇹🇭","Timor-Leste":"🇹🇱","Togo":"🇹🇬","Tonga":"🇹🇴",
  "Trinidad and Tobago":"🇹🇹","Tunisia":"🇹🇳","Türkiye":"🇹🇷",
  "Turkmenistan":"🇹🇲","Tuvalu":"🇹🇻","Uganda":"🇺🇬","Ukraine":"🇺🇦",
  "United Arab Emirates":"🇦🇪","United Kingdom":"🇬🇧",
  "United States":"🇺🇸","Uruguay":"🇺🇾","Uzbekistan":"🇺🇿",
  "Vanuatu":"🇻🇺","Vatican City":"🇻🇦","Venezuela":"🇻🇪",
  "Vietnam":"🇻🇳","Yemen":"🇾🇪","Zambia":"🇿🇲","Zimbabwe":"🇿🇼"
};


/* =========================================================
   MAP
========================================================= */

const map = L.map("map", {
  zoomControl: true,
  attributionControl: true,
  worldCopyJump: false
}).setView([20, 0], 2);

const originalMapView = {
  center: [20, 0],
  zoom: 2
};

L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "&copy; OpenStreetMap contributors"
  }
).addTo(map);


/* =========================================================
   GAME STATE
========================================================= */

let geojsonLayer = null;

let currentCountry = null;
let queue = [];
let questionIndex = 0;

let mapAnswered = false;
let capitalAnswered = false;

let score = 0;
let streak = 0;
let countriesCorrect = 0;
let capitalsCorrect = 0;

let advanceTimer = null;
let audioContext = null;
let mapResponseSoundPlayed = false;
let capitalResponseSoundPlayed = false;


/* =========================================================
   DOM
========================================================= */

const countryNameEl = document.getElementById("countryName");
const capitalInput = document.getElementById("capitalInput");
const checkCapital = document.getElementById("checkCapital");
const feedback = document.getElementById("feedback");

const decisionButtons = document.getElementById("decisionButtons");
const acceptAnyway = document.getElementById("acceptAnyway");
const markCapitalWrong = document.getElementById("markCapitalWrong");

const nextCountry = document.getElementById("nextCountry");

const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const countriesCorrectEl = document.getElementById("countriesCorrect");
const capitalsCorrectEl = document.getElementById("capitalsCorrect");

const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const excludeAfrica = document.getElementById("excludeAfrica");
const excludeIslands = document.getElementById("excludeIslands");
const excludeMiddleEast = document.getElementById("excludeMiddleEast");
const excludeAsia = document.getElementById("excludeAsia");
const excludeEurope = document.getElementById("excludeEurope");
const excludeNorthAmerica = document.getElementById("excludeNorthAmerica");
const excludeSouthAmerica = document.getElementById("excludeSouthAmerica");
const onlyImportantCountries = document.getElementById("onlyImportantCountries");
const restartButton = document.getElementById("restart");

const mapPreferencesStorageKey = "world-capitals-quiz-map-preferences";


/* =========================================================
    TEXT NORMALIZATION
========================================================= */

function norm(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}


function countMatchingLetters(answer, expected) {
  const expectedLetters = expected.split("");
  let matchingLetters = 0;

  for (const letter of answer) {
    const matchingIndex = expectedLetters.indexOf(letter);

    if (matchingIndex !== -1) {
      matchingLetters++;
      expectedLetters.splice(matchingIndex, 1);
    }
  }

  return matchingLetters;
}


function saveMapPreferences() {
  const preferences = {
    excludeAfrica: excludeAfrica.checked,
    excludeIslands: excludeIslands.checked,
    excludeMiddleEast: excludeMiddleEast.checked,
    excludeAsia: excludeAsia.checked,
    excludeEurope: excludeEurope.checked,
    excludeNorthAmerica: excludeNorthAmerica.checked,
    excludeSouthAmerica: excludeSouthAmerica.checked,
    onlyImportantCountries: onlyImportantCountries.checked
  };

  localStorage.setItem(
    mapPreferencesStorageKey,
    JSON.stringify(preferences)
  );
}


function loadMapPreferences() {
  const savedPreferences = localStorage.getItem(
    mapPreferencesStorageKey
  );

  if (!savedPreferences) {
    return;
  }

  try {
    const preferences = JSON.parse(savedPreferences);

    excludeAfrica.checked = preferences.excludeAfrica === true;
    excludeIslands.checked = preferences.excludeIslands === true;
    excludeMiddleEast.checked = preferences.excludeMiddleEast === true;
    excludeAsia.checked = preferences.excludeAsia === true;
    excludeEurope.checked = preferences.excludeEurope === true;
    excludeNorthAmerica.checked = preferences.excludeNorthAmerica === true;
    excludeSouthAmerica.checked = preferences.excludeSouthAmerica === true;
    onlyImportantCountries.checked =
      preferences.onlyImportantCountries === true;

    if (onlyImportantCountries.checked) {
      regularFilters.forEach(filter => {
        filter.checked = false;
      });
    }
  } catch (error) {
    localStorage.removeItem(mapPreferencesStorageKey);
  }
}


/* =========================================================
    COUNTRY NAME RESOLUTION
========================================================= */

function canonicalName(value) {
  if (!value) return "";

  const raw = String(value).trim();
  const normalized = norm(raw);

  if (aliases[normalized]) {
    return aliases[normalized];
  }

  const found = countries.find(
    country => norm(country.name) === normalized
  );

  if (found) {
    return found.name;
  }

  return raw;
}


/*
  Console helper:
  forceRequest("Serbia")
*/
function forceRequest(countryName) {
  const canonicalCountryName = canonicalName(countryName);
  const requestedCountry = countries.find(
    country => country.name === canonicalCountryName
  );

  if (!requestedCountry) {
    console.warn("Unknown country:", countryName);
    return null;
  }

  clearAdvanceTimer();

  const remainingCountries = queue
    .slice(questionIndex + 1)
    .filter(country => country.name !== requestedCountry.name);

  queue = [requestedCountry, ...remainingCountries];
  questionIndex = 0;
  currentCountry = null;

  loadQuestion();

  console.info("Forced country request:", requestedCountry.name);
  return requestedCountry;
}

window.forceRequest = forceRequest;


/*
  IMPORTANT:

  The GeoJSON used by this quiz has country names under
  properties.name in the current dataset.

  We still check several other common GeoJSON property names
  so that the map keeps working if the source changes.
*/
function getFeatureCountryName(feature) {
  if (!feature || !feature.properties) {
    return "";
  }

  const p = feature.properties;

  return (
    p.name ||
    p.ADMIN ||
    p.NAME_EN ||
    p.NAME ||
    p.NAME_LONG ||
    p.SOVEREIGNT ||
    p.BRK_NAME ||
    p.FORMAL_EN ||
    p.ADMIN_EN ||
    ""
  );
}


/* =========================================================
    EXCLUSIONS
========================================================= */

function isCountryExcluded(countryName) {
  if (onlyImportantCountries.checked) {
    return !importantCountries.has(countryName);
  }

  if (excludeAfrica.checked && africanCountries.has(countryName)) {
    return true;
  }

  if (excludeIslands.checked && islandCountries.has(countryName)) {
    return true;
  }

  if (excludeMiddleEast.checked && middleEastCountries.has(countryName)) {
    return true;
  }

  if (excludeAsia.checked && asianCountries.has(countryName)) {
    return true;
  }

  if (excludeEurope.checked && europeanCountries.has(countryName)) {
    return true;
  }

  if (excludeNorthAmerica.checked && northAmericanCountries.has(countryName)) {
    return true;
  }

  if (excludeSouthAmerica.checked && southAmericanCountries.has(countryName)) {
    return true;
  }

  return false;
}


function getAvailableCountries() {
  return countries.filter(country => {
    return !isCountryExcluded(country.name);
  });
}


/* =========================================================
    SHUFFLE
========================================================= */

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}


/* =========================================================
    FEEDBACK
========================================================= */

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = "feedback " + type;
}


function hideFeedback() {
  feedback.textContent = "";
  feedback.className = "feedback";
}


function playResponseSound(responseType, responseKind) {
  const soundAlreadyPlayed = responseKind === "map"
    ? mapResponseSoundPlayed
    : capitalResponseSoundPlayed;

  if (soundAlreadyPlayed) {
    return;
  }

  if (responseKind === "map") {
    mapResponseSoundPlayed = true;
  } else {
    capitalResponseSoundPlayed = true;
  }

  audioContext ||= new AudioContext();

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;
  const isCorrect = responseType === "correct";

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(isCorrect ? 660 : 220, now);
  oscillator.frequency.setValueAtTime(isCorrect ? 880 : 160, now + 0.12);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.22);
}


/* =========================================================
    ADVANCE TIMER
========================================================= */

function clearAdvanceTimer() {
  if (advanceTimer !== null) {
    clearTimeout(advanceTimer);
    advanceTimer = null;
  }
}


function scheduleNextQuestion(delay) {
  clearAdvanceTimer();

  nextCountry.disabled = true;

  advanceTimer = setTimeout(() => {
    advanceTimer = null;

    questionIndex++;
    loadQuestion();
  }, delay);
}


/* =========================================================
    MAP STYLING
========================================================= */

function resetMapStyles() {
  if (!geojsonLayer) return;

  geojsonLayer.eachLayer(layer => {
    layer.setStyle({
      fillColor: "#dcecf7",
      fillOpacity: 0.9,
      color: "#ffffff",
      weight: 1
    });

    layer.options.className = "country-shape";
  });
}


function setCountryStyle(layer, color) {
  layer.setStyle({
    fillColor: color,
    fillOpacity: 0.9,
    color: "#ffffff",
    weight: 1
  });
}


function highlightCorrectCountry() {
  if (!geojsonLayer || !currentCountry) return;

  geojsonLayer.eachLayer(layer => {
    const layerCountry = canonicalName(
      getFeatureCountryName(layer.feature)
    );

    if (layerCountry === currentCountry.name) {
      setCountryStyle(layer, "#43a047");
    }
  });
}


/* =========================================================
    ENABLE CAPITAL
========================================================= */

function enableCapital() {
  capitalInput.disabled = false;
  checkCapital.disabled = false;

  capitalInput.focus();
}


/* =========================================================
    COUNTRY CLICK
========================================================= */

function handleCountryClick(layer) {

  /*
    This is deliberately the first check.

    Once the user has clicked a country, mapAnswered becomes true.
    This guarantees only ONE map attempt.
  */
  if (mapAnswered) {
    return;
  }

  mapAnswered = true;

  const clickedRawName = getFeatureCountryName(layer.feature);
  const clickedCountry = canonicalName(clickedRawName);

  if (!clickedCountry) {
    setCountryStyle(layer, "#e3a008");
    highlightCorrectCountry();

    showFeedback(
      "This map area could not be identified. The quiz will continue.",
      "wrong"
    );

    capitalInput.disabled = true;
    checkCapital.disabled = true;

    scheduleNextQuestion(1000);
    return;
  }

  if (clickedCountry === currentCountry.name) {

    setCountryStyle(layer, "#43a047");

    countriesCorrect++;
    streak++;

    updateStats();

    showFeedback(
      "Correct! Now enter the capital of " +
      currentCountry.name + ".",
      "correct"
    );

    enableCapital();

  } else {

    setCountryStyle(layer, "#d64545");
    highlightCorrectCountry();
    playResponseSound("wrong", "map");

    /*
      WRONG MAP CLICK:

      The user cannot click again.
      The capital is disabled.
      After exactly 1 second, the next country loads.
    */
    capitalInput.disabled = true;
    checkCapital.disabled = true;

    showFeedback(
      "Not quite — you clicked " +
      clickedCountry +
      ". The next country will load automatically.",
      "wrong"
    );

    streak = 0;
    updateStats();

    scheduleNextQuestion(1000);
  }
}


/* =========================================================
    CAPITAL CHECK
========================================================= */

function checkCapitalAnswer() {

  if (!currentCountry) return;

  if (capitalAnswered) {
    return;
  }

  /*
    If the country has not been selected yet,
    do not allow the capital to be checked.
  */
  if (!mapAnswered) {
    return;
  }

  /*
    A wrong map answer immediately advances,
    so this prevents any capital interaction.
  */
  if (capitalInput.disabled) {
    return;
  }

  capitalAnswered = true;

  const answer = capitalInput.value.trim();

  capitalInput.disabled = true;
  checkCapital.disabled = true;

  const answerNormalized = norm(answer);
  const expectedNormalized = norm(currentCountry.capital);

  let isCorrect =
    answerNormalized === expectedNormalized;

  const expectedWords = expectedNormalized.split(" ");
  if (
    !isCorrect &&
    expectedWords.length >= 2 &&
    expectedWords.includes("city")
  ) {
    isCorrect =
      answerNormalized ===
      expectedWords.filter(word => word !== "city").join(" ");
  }

  /*
    Check capital aliases as well.
  */
  if (!isCorrect && capitalAliases[answerNormalized]) {
    isCorrect =
      norm(capitalAliases[answerNormalized]) ===
      expectedNormalized;
  }

  if (isCorrect) {

    playResponseSound("correct", "capital");

    capitalsCorrect++;
    streak++;

    updateStats();

    showFeedback(
      "Correct! " +
      currentCountry.capital +
      " is the capital of " +
      currentCountry.name +
      ".",
      "correct"
    );

    decisionButtons.style.display = "none";

    scheduleNextQuestion(1000);

  } else {
    const matchingLetters = countMatchingLetters(
      answerNormalized,
      expectedNormalized
    );

    if (matchingLetters <= 2) {
      playResponseSound("wrong", "capital");

      streak = 0;
      updateStats();

      showFeedback(
        "Incorrect. The correct capital is " +
        currentCountry.capital + ".",
        "wrong"
      );

      decisionButtons.style.display = "none";
      scheduleNextQuestion(1000);
      return;
    }

    showFeedback(
      "Not quite. The correct capital is " +
      currentCountry.capital +
      ".",
      "partial"
    );

    /*
      IMPORTANT:
      A wrong capital does NOT automatically advance.

      The player must decide:
      - Mark capital as correct
      - Mark capital as wrong
    */
    decisionButtons.style.display = "flex";
  }
}


/* =========================================================
    MARK CAPITAL AS CORRECT
========================================================= */

function acceptCapitalAnyway() {

  if (!capitalAnswered) {
    return;
  }

  if (decisionButtons.style.display === "none") {
    return;
  }

  playResponseSound("correct", "capital");

  capitalsCorrect++;
  streak++;

  updateStats();

  decisionButtons.style.display = "none";

  showFeedback(
    "Capital accepted as correct.",
    "correct"
  );

  scheduleNextQuestion(800);
}


/* =========================================================
    MARK CAPITAL AS WRONG
========================================================= */

function markCapitalAsWrong() {

  if (!capitalAnswered) {
    return;
  }

  if (decisionButtons.style.display === "none") {
    return;
  }

  playResponseSound("wrong", "capital");

  streak = 0;
  updateStats();

  decisionButtons.style.display = "none";

  showFeedback(
    "Capital marked as wrong. The correct answer was " +
    currentCountry.capital + ".",
    "wrong"
  );

  scheduleNextQuestion(800);
}


/* =========================================================
    PASS COUNTRY
========================================================= */

function passCountry() {

  if (!currentCountry) {
    return;
  }

  playResponseSound("wrong", "map");

  /*
    Cancel any automatic advance that may be waiting.
  */
  clearAdvanceTimer();

  streak = 0;
  updateStats();

  nextCountry.disabled = true;

  questionIndex++;
  loadQuestion();
}


/* =========================================================
    UPDATE STATS
========================================================= */

function updateStats() {
  const total = queue.length;
  const answeredCountries = Math.min(
    questionIndex + (mapAnswered ? 1 : 0),
    total
  );

  score = answeredCountries > 0
    ? Math.round(
        ((countriesCorrect + capitalsCorrect) / (answeredCountries * 2)) * 10 * 10
      ) / 10
    : 0;

  scoreEl.textContent = score;
  streakEl.textContent = streak;
  countriesCorrectEl.textContent = countriesCorrect;
  capitalsCorrectEl.textContent = capitalsCorrect;

  if (total > 0) {
    const completed = Math.min(questionIndex, total);

    progressText.textContent =
      completed + " / " + total;

    progressFill.style.width =
      Math.min((completed / total) * 100, 100) + "%";
  } else {
    progressText.textContent = "0 / 0";
    progressFill.style.width = "0%";
  }
}


/* =========================================================
    LOAD QUESTION
========================================================= */

function loadQuestion() {

  clearAdvanceTimer();
  map.setView(originalMapView.center, originalMapView.zoom, { animate: false });

  /*
    Quiz finished
  */
  if (questionIndex >= queue.length) {

    currentCountry = null;

    countryNameEl.innerHTML = `
      <div class="finished">
        <h2>🎉 Quiz complete!</h2>
        <p>You scored <strong>${score}</strong> points.</p>
        <p>
          Countries correct:
          <strong>${countriesCorrect}</strong>
        </p>
        <p>
          Capitals correct:
          <strong>${capitalsCorrect}</strong>
        </p>
      </div>
    `;

    capitalInput.disabled = true;
    checkCapital.disabled = true;
    nextCountry.disabled = true;

    decisionButtons.style.display = "none";

    if (geojsonLayer) {
      geojsonLayer.eachLayer(layer => {
        setCountryStyle(layer, "#dcecf7");
      });
    }

    updateStats();

    return;
  }

  currentCountry = queue[questionIndex];

  mapAnswered = false;
  capitalAnswered = false;
  mapResponseSoundPlayed = false;
  capitalResponseSoundPlayed = false;

  countryNameEl.innerHTML =
    `<span class="flag">${flagEmoji[currentCountry.name] || "🌍"}</span>` +
    currentCountry.name;

  capitalInput.value = "";
  capitalInput.disabled = true;
  checkCapital.disabled = true;

  decisionButtons.style.display = "none";

  nextCountry.disabled = false;

  hideFeedback();

  resetMapStyles();

  updateStats();
}


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz() {

  clearAdvanceTimer();

  const available = getAvailableCountries();

  queue = shuffle(available);

  questionIndex = 0;

  currentCountry = null;

  mapAnswered = false;
  capitalAnswered = false;

  score = 0;
  streak = 0;
  countriesCorrect = 0;
  capitalsCorrect = 0;

  nextCountry.disabled = false;

  updateStats();

  loadQuestion();
}


/* =========================================================
   GEOJSON
========================================================= */

async function loadGeoJSON() {

  try {

    const response = await fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
    );

    if (!response.ok) {
      throw new Error("Could not load GeoJSON");
    }

    const data = await response.json();

    /*
      Remove an old layer if one exists.
    */
    if (geojsonLayer) {
      map.removeLayer(geojsonLayer);
    }

    /*
      IMPORTANT:
      We attach the click listener directly to EVERY feature
      through onEachFeature.

      There is NO tooltip.
      Therefore hovering does not display the country name.
    */
    geojsonLayer = L.geoJSON(data, {

      style: function(feature) {

        return {
          fillColor: "#dcecf7",
          fillOpacity: 0.9,
          color: "#ffffff",
          weight: 1,
          className: "country-shape"
        };

      },

      onEachFeature: function(feature, layer) {

        /*
          NO bindTooltip here.
          This is what prevents country names appearing
          when hovering.
        */

        layer.on("click", function() {
          handleCountryClick(layer);
        });

      }

    }).addTo(map);

    /*
      Make sure the map is visually ready.
    */
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    startQuiz();

  } catch (error) {

    console.error(error);

    countryNameEl.textContent =
      "Error loading the world map.";

    feedback.textContent =
      "The map could not be loaded. Please check your internet connection.";

    feedback.className = "feedback wrong";
  }
}


/* =========================================================
   EVENT LISTENERS
========================================================= */

checkCapital.addEventListener(
  "click",
  checkCapitalAnswer
);

capitalInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      event.preventDefault();

      if (!checkCapital.disabled) {
        checkCapitalAnswer();
      }
    }

  }
);


acceptAnyway.addEventListener(
  "click",
  acceptCapitalAnyway
);


markCapitalWrong.addEventListener(
  "click",
  markCapitalAsWrong
);


nextCountry.addEventListener(
  "click",
  passCountry
);


/*
  Only one filter mode can be active at a time.
*/
const regularFilters = [
  excludeAfrica,
  excludeIslands,
  excludeMiddleEast,
  excludeAsia,
  excludeEurope,
  excludeNorthAmerica,
  excludeSouthAmerica
];

function handleFilterChange(event) {
  if (event.target === onlyImportantCountries && onlyImportantCountries.checked) {
    regularFilters.forEach(filter => {
      filter.checked = false;
    });
  } else if (event.target !== onlyImportantCountries && event.target.checked) {
    onlyImportantCountries.checked = false;
  }

  saveMapPreferences();
  startQuiz();
}

regularFilters.forEach(filter => {
  filter.addEventListener("change", handleFilterChange);
});

onlyImportantCountries.addEventListener("change", handleFilterChange);


restartButton.addEventListener(
  "click",
  startQuiz
);


/* =========================================================
   START
========================================================= */

loadMapPreferences();
loadGeoJSON();