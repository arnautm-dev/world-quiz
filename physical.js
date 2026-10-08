const features = [];

function point(name, lat, lon, toleranceKm = 180, water = false) {
  features.push({ name, type: "point", coordinates: [[lat, lon]], toleranceKm, water });
}

function area(name, lat, lon, toleranceKm) {
  features.push({ name, type: "area", coordinates: [[lat, lon]], toleranceKm, water: false });
}

function sea(name, lat, lon, toleranceKm) {
  features.push({ name, type: "area", coordinates: [[lat, lon]], toleranceKm, water: true });
}

function landArea(name, lat, lon, toleranceKm) {
  features.push({ name, type: "area", coordinates: [[lat, lon]], toleranceKm, water: false });
}

function line(name, toleranceKm, coordinates) {
  features.push({ name, type: "line", coordinates, toleranceKm });
}

// Mountains and mountain ranges
line("Atlas Mountains", 230, [[30.5, -9], [31.8, -6], [32.5, -2], [33.2, 1], [34, 5]]);
line("Drakensberg Mountains", 170, [[-27, 29], [-29, 29.5], [-31, 29.3]]);
point("Mount Kilimanjaro", -3.07, 37.35, 130);
point("Mount Kenya", -0.15, 37.3, 110);
line("Alps", 240, [[44.2, 6.5], [45.5, 8], [46.5, 10], [47.5, 12.5]]);
line("Pyrenees", 130, [[42.4, -2], [42.7, 0], [42.6, 2], [42.5, 3]]);
line("Carpathian Mountains", 260, [[47.5, 18], [48.8, 22], [48.5, 25], [46.5, 25], [45, 22]]);
line("Apennine Mountains", 130, [[44.5, 10.5], [42.5, 13], [40, 15], [38, 16]]);
line("Ural Mountains", 260, [[68, 66], [62, 60], [56, 59], [50, 59]]);
line("Caucasus Mountains", 160, [[43, 40], [42.5, 43], [42.5, 46]]);
line("Himalayas", 360, [[35, 74], [32, 79], [29, 85], [28, 91], [28, 97]]);
line("Karakoram Range", 170, [[37, 74], [35.5, 76], [35, 78]]);
line("Hindu Kush", 180, [[36, 67], [35, 69], [34, 71]]);
line("Tian Shan", 270, [[42, 70], [42, 76], [41, 82], [43, 88]]);
line("Altai Mountains", 250, [[50, 84], [49, 89], [50, 94], [49, 98]]);
line("Andes Mountains", 260, [[8, -72], [0, -77], [-10, -77], [-20, -68], [-32, -70], [-45, -73], [-55, -70]]);
point("Aconcagua", -32.65, -70.01, 120);
line("Rocky Mountains", 280, [[60, -140], [55, -130], [49, -120], [44, -113], [39, -106], [33, -105]]);
line("Appalachian Mountains", 210, [[47, -68], [43, -72], [38, -80], [34, -83], [31, -85]]);
line("Sierra Madre Occidental", 200, [[29, -109], [25, -107], [21, -104]]);
line("Sierra Madre Oriental", 180, [[25, -99], [22, -99], [19, -97]]);
line("Great Dividing Range", 240, [[-16, 145], [-21, 148], [-26, 152], [-31, 151], [-36, 149]]);
line("Australian Alps", 130, [[-35, 148], [-36.5, 148.5], [-37.5, 147]]);
line("Southern Alps", 150, [[-42, 172], [-43.5, 170], [-45, 168], [-46.5, 167]]);
line("Transantarctic Mountains", 320, [[-75, 160], [-78, 170], [-80, -175], [-78, -160], [-76, -145]]);
line("Ellsworth Mountains", 170, [[-78, -85], [-79, -82], [-80, -82]]);
point("Vinson Massif", -78.525, -85.617, 100);

// Rivers
line("Nile River", 170, [[-3, 32], [0, 32.5], [4, 32], [9, 31], [15, 32.5], [22, 32.5], [27, 30.5], [30, 31]]);
line("Congo River", 180, [[-11, 26], [-7, 25], [-4, 20], [0, 18], [-3, 16], [-6, 12]]);
line("Niger River", 170, [[9, -10], [14, -4], [17, -3], [15, 1], [11, 5], [5, 6]]);
line("Zambezi River", 150, [[-11, 24], [-15, 26], [-18, 26], [-18, 32], [-17, 35]]);
line("Orange River", 140, [[-28, 28], [-29, 24], [-29, 20], [-28.5, 17]]);
line("Senegal River", 120, [[13.5, -12], [15, -13], [16, -14], [16, -16]]);
line("Volga River", 180, [[57, 33], [55, 38], [53, 46], [48, 47], [46, 48]]);
line("Danube River", 150, [[48, 8], [48, 14], [47, 18], [45, 22], [45, 27], [45, 29]]);
line("Rhine River", 100, [[46.5, 9], [47.5, 8], [49, 8], [51, 7], [52, 6]]);
line("Rhône River", 90, [[46, 9.5], [45, 6], [44, 5], [43.3, 4.8]]);
line("Elbe River", 100, [[50, 14], [51, 13], [52, 11], [53.5, 9]]);
line("Dnieper River", 140, [[55, 34], [53, 31], [51, 30], [48, 33], [46.5, 32]]);
line("Dniester River", 100, [[49, 25], [48, 27], [47, 29], [46, 30]]);
line("Thames River", 55, [[51.7, -2], [51.5, -1], [51.5, 0.5]]);
line("Po River", 75, [[45, 7], [45, 9], [45, 11], [45, 12]]);
line("Yangtze River", 220, [[33, 96], [31, 95], [29, 95], [30, 103], [30, 109], [31, 113], [31, 121]]);
line("Ganges River", 190, [[30, 79], [29, 82], [27, 84], [26, 88], [22, 90]]);
line("Indus River", 180, [[32, 78], [30, 72], [27, 68], [24, 67]]);
line("Mekong River", 150, [[33, 95], [27, 101], [21, 101], [17, 102], [13, 105], [10, 106]]);
line("Yenisei River", 210, [[52, 93], [57, 92], [63, 88], [69, 84]]);
line("Ob River", 210, [[52, 85], [57, 70], [62, 67], [68, 73]]);
line("Lena River", 210, [[53, 105], [59, 116], [64, 127], [71, 128]]);
line("Amur River", 180, [[53, 122], [50, 128], [48, 135], [48, 141]]);
line("Huang He (Yellow River)", 160, [[35, 96], [37, 102], [40, 106], [38, 111], [37, 118]]);
line("Tigris River", 130, [[38, 39], [36, 43], [34, 44], [31, 47]]);
line("Euphrates River", 150, [[39, 39], [36, 38], [34, 40], [32, 44], [31, 47]]);
line("Amazon River", 240, [[-5, -75], [-4, -70], [-3, -65], [-3, -60], [-1, -55], [0, -50]]);
line("Mississippi River", 200, [[47, -95], [43, -91], [38, -91], [33, -91], [29, -90]]);
line("Missouri River", 180, [[46, -111], [45, -106], [42, -101], [39, -95]]);
line("Orinoco River", 150, [[7, -71], [8, -67], [8, -63], [9, -60]]);
line("Paraná River", 170, [[-16, -48], [-20, -51], [-24, -54], [-29, -57], [-34, -58]]);
line("Paraguay River", 130, [[-14, -57], [-19, -58], [-24, -57], [-28, -57]]);
line("Rio Bravo (Rio Grande)", 120, [[37, -107], [32, -106], [29, -104], [27, -100], [26, -98]]);
line("Yukon River", 170, [[64, -141], [64, -150], [63, -157], [62, -164]]);
line("Mackenzie River", 180, [[61, -119], [64, -123], [67, -130], [69, -134]]);
line("São Francisco River", 150, [[-14, -45], [-12, -44], [-10, -43], [-10, -36]]);
line("Murray River", 130, [[-34, 141], [-35, 143], [-35, 146], [-36, 149]]);
line("Darling River", 130, [[-26, 142], [-29, 144], [-32, 144], [-34, 143]]);
line("Murrumbidgee River", 90, [[-35, 147], [-35.5, 145], [-35, 143]]);
line("Sepik River", 85, [[-4, 141], [-4, 145], [-4.2, 147]]);
line("Fly River", 90, [[-6, 141], [-7, 144], [-8.5, 146]]);

// Lakes
area("Lake Victoria", -1, 33, 190);
area("Lake Tanganyika", -6, 29.5, 110);
area("Lake Malawi", -12, 34.5, 110);
area("Lake Chad", 13, 14, 170);
area("Lake Turkana", 3.5, 36, 120);
area("Lake Ladoga", 60.8, 31.5, 150);
area("Lake Onega", 62, 35.5, 115);
area("Lake Vänern", 58.9, 13.5, 90);
area("Lake Geneva", 46.4, 6.5, 75);
area("Lake Balaton", 46.8, 17.5, 65);
area("Lake Baikal", 53.5, 108, 190);
area("Lake Balkhash", 46, 74, 180);
area("Lake Issyk-Kul", 42.4, 77.2, 95);
area("Lake Superior", 47.7, -87.5, 200);
area("Lake Michigan", 44, -87, 170);
area("Lake Huron", 45, -82.5, 160);
area("Lake Erie", 42.2, -81.2, 120);
area("Lake Ontario", 43.7, -77.8, 110);
area("Lake Titicaca", -15.8, -69.4, 90);
area("Lake Nicaragua", 11.5, -85.5, 100);
area("Great Bear Lake", 66, -120, 180);
area("Lake Maracaibo", 9.8, -71.5, 100);
area("Lake Poopó", -18.5, -67, 85);
area("Lake Eyre", -28.5, 137.5, 150);
area("Lake Taupō", -38.8, 175.9, 80);
area("Lake Te Anau", -45.1, 167.7, 80);
area("Lake Vostok", -77.5, 106, 150);

// Seas
sea("Mediterranean Sea", 35, 18, 700);
sea("Red Sea", 20, 38, 260);
sea("North Sea", 56, 3, 330);
sea("Baltic Sea", 58, 20, 340);
sea("Black Sea", 43, 34, 310);
sea("Norwegian Sea", 68, 2, 430);
sea("Barents Sea", 75, 40, 470);
sea("Aegean Sea", 37, 26, 220);
sea("Adriatic Sea", 42, 17, 230);
sea("Arabian Sea", 15, 64, 600);
sea("South China Sea", 12, 114, 570);
sea("East China Sea", 29, 126, 400);
sea("Sea of Japan", 40, 136, 380);
sea("Yellow Sea", 35, 123, 260);
sea("Philippine Sea", 18, 137, 700);
sea("Bering Sea", 58, -175, 500);
sea("Sea of Okhotsk", 55, 150, 450);
sea("Caspian Sea", 41, 51, 350);
area("Aral Sea", 45, 60, 190);
sea("Caribbean Sea", 15, -75, 650);
sea("Labrador Sea", 58, -55, 420);
sea("Beaufort Sea", 72, -140, 430);
sea("Coral Sea", -18, 155, 550);
sea("Tasman Sea", -40, 160, 450);
sea("Arafura Sea", -9, 134, 300);
sea("Timor Sea", -12, 125, 300);
sea("Solomon Sea", -8, 154, 300);
sea("Weddell Sea", -72, -40, 500);
area("Ross Sea", -74, 175, 500);
sea("Amundsen Sea", -72, -115, 430);
sea("Bellingshausen Sea", -70, -80, 390);
sea("Scotia Sea", -57, -40, 370);

// Gulfs
sea("Gulf of Guinea", 2, 4, 300);
sea("Gulf of Aden", 12, 48, 230);
sea("Bay of Biscay", 45, -5, 270);
sea("Gulf of Finland", 60, 27, 180);
sea("Gulf of Bothnia", 63, 20, 260);
sea("Gulf of Lion", 43, 4, 180);
sea("Persian Gulf", 27, 51, 260);
sea("Bay of Bengal", 15, 87, 470);
sea("Gulf of Oman", 24, 59, 170);
sea("Gulf of Thailand", 10, 102, 250);
sea("Gulf of Tonkin", 19, 107, 170);
sea("Gulf of Mexico", 25, -90, 550);
sea("Gulf of Alaska", 57, -145, 380);
sea("Gulf of California", 27, -111, 230);
sea("Gulf of Saint Lawrence", 48, -60, 300);
sea("Gulf of Panama", 7, -80, 180);
area("Gulf of Venezuela", 12, -70, 150);
sea("Gulf of Guayaquil", -3, -81, 150);
sea("Gulf of Carpentaria", -14, 139, 300);
area("Spencer Gulf", -34, 136, 130);
sea("Gulf of Papua", -9, 145, 170);

// Peninsulas
landArea("Somali Peninsula (Horn of Africa)", 8, 48, 430);
landArea("Iberian Peninsula", 40, -4, 390);
landArea("Italian Peninsula", 42, 13, 340);
landArea("Balkan Peninsula", 41, 22, 390);
landArea("Scandinavian Peninsula", 64, 15, 600);
landArea("Jutland Peninsula", 56, 9.5, 150);
landArea("Crimean Peninsula", 45, 34, 130);
landArea("Arabian Peninsula", 22, 46, 560);
landArea("Indian Peninsula", 17, 79, 530);
landArea("Indochinese Peninsula", 17, 103, 500);
landArea("Korean Peninsula", 37, 127, 210);
landArea("Anatolian Peninsula", 39, 33, 350);
landArea("Kamchatka Peninsula", 57, 160, 340);
landArea("Malay Peninsula", 7, 101, 260);
landArea("Alaska Peninsula", 57, -158, 270);
landArea("Baja California Peninsula", 27, -112, 320);
landArea("Florida Peninsula", 27.5, -81.5, 240);
landArea("Yucatán Peninsula", 20, -89, 250);
landArea("Labrador Peninsula", 55, -67, 480);
landArea("Nova Scotia Peninsula", 45, -63.5, 170);
landArea("Guajira Peninsula", 12, -72, 130);
landArea("Paraguaná Peninsula", 11.8, -69.8, 100);
landArea("Cape York Peninsula", -14, 143, 260);
landArea("Eyre Peninsula", -33, 135, 170);
landArea("Antarctic Peninsula", -68, -64, 260);

// Straits and canals
point("Strait of Gibraltar", 35.97, -5.6, 110, true);
point("Bab-el-Mandeb Strait", 12.6, 43.3, 110, true);
point("Bosphorus Strait", 41.1, 29.1, 85);
point("Dardanelles Strait", 40.2, 26.4, 85, true);
point("English Channel", 50.5, 0, 190, true);
point("Bering Strait", 65.8, -169, 120, true);
point("Strait of Malacca", 4, 100.5, 180, true);
point("Strait of Hormuz", 26.6, 56.5, 110, true);
point("Strait of Florida", 24.5, -80.5, 140, true);
point("Strait of Magellan", -53.5, -72, 150);
point("Strait of Juan de Fuca", 48.3, -124.5, 130);
point("Torres Strait", -10.5, 142, 130, true);
point("Bass Strait", -39.5, 147, 130, true);
point("Drake Passage", -58, -65, 230, true);
sea("Mozambique Channel", -17, 42, 300);

const map = L.map("map", {
  zoomControl: true,
  attributionControl: false,
  worldCopyJump: false,
  minZoom: 1,
  maxZoom: 7,
  maxBounds: [[-86, -220], [86, 220]],
  maxBoundsViscosity: 0.8
}).setView([15, 0], 1);

const markers = L.layerGroup().addTo(map);
let queue = [];
let questionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let answered = false;
let landPolygons = [];

const featureName = document.getElementById("featureName");
const questionCount = document.getElementById("questionCount");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextFeature");
const mapError = document.getElementById("mapError");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const score = document.getElementById("score");
const answeredCount = document.getElementById("answeredCount");
const correctCount = document.getElementById("correctCount");
const incorrectCount = document.getElementById("incorrectCount");
const gamePanel = document.getElementById("gamePanel");
const resultPanel = document.getElementById("resultPanel");

function shuffled(items) {
  const result = items.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function radians(degrees) {
  return degrees * Math.PI / 180;
}

function distanceKm(a, b) {
  const lat1 = radians(a[0]);
  const lat2 = radians(b[0]);
  const dLat = lat2 - lat1;
  const dLon = radians(((b[1] - a[1] + 540) % 360) - 180);
  const haversine = Math.sin(dLat / 2) ** 2
    + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function distanceToSegmentKm(pointLatLon, start, end) {
  const referenceLat = radians(pointLatLon[0]);
  const longitudeScale = Math.max(0.01, Math.cos(referenceLat));
  const project = coordinate => {
    const longitudeDelta = ((coordinate[1] - pointLatLon[1] + 540) % 360) - 180;
    return [
      radians(coordinate[0] - pointLatLon[0]) * 6371,
      radians(longitudeDelta) * 6371 * longitudeScale
    ];
  };
  const a = project(start);
  const b = project(end);
  const segmentX = b[0] - a[0];
  const segmentY = b[1] - a[1];
  const lengthSquared = segmentX * segmentX + segmentY * segmentY;
  const amount = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1,
    -(a[0] * segmentX + a[1] * segmentY) / lengthSquared));
  return Math.hypot(a[0] + amount * segmentX, a[1] + amount * segmentY);
}

function distanceFromFeature(feature, position) {
  if (feature.type !== "line") {
    return Math.max(0, distanceKm(position, feature.coordinates[0]) - feature.toleranceKm);
  }

  let closest = Infinity;
  for (let i = 1; i < feature.coordinates.length; i += 1) {
    closest = Math.min(closest,
      distanceToSegmentKm(position, feature.coordinates[i - 1], feature.coordinates[i]));
  }
  return Math.max(0, closest - feature.toleranceKm);
}

function featureCenter(feature) {
  if (feature.type !== "line") return feature.coordinates[0];
  return feature.coordinates[Math.floor(feature.coordinates.length / 2)];
}

function pointInRing(pointLatLon, ring) {
  const latitude = pointLatLon[0];
  const longitude = pointLatLon[1];
  let inside = false;

  for (let i = 0, j = ring.length - 1; i < ring.length; j = i, i += 1) {
    const first = ring[i];
    const second = ring[j];
    const firstLongitude = longitude + (((first[0] - longitude + 540) % 360) - 180);
    const secondLongitude = longitude + (((second[0] - longitude + 540) % 360) - 180);
    const intersects = ((first[1] > latitude) !== (second[1] > latitude))
      && longitude < (secondLongitude - firstLongitude) * (latitude - first[1])
        / (second[1] - first[1]) + firstLongitude;
    if (intersects) inside = !inside;
  }
  return inside;
}

function isOnLand(position) {
  return landPolygons.some(polygon => {
    if (position[0] < polygon.minLat || position[0] > polygon.maxLat) return false;
    const crossesDateLine = polygon.maxLon - polygon.minLon > 180;
    if (!crossesDateLine && (position[1] < polygon.minLon || position[1] > polygon.maxLon)) return false;
    if (crossesDateLine && Math.abs(position[1]) < 150) return false;
    if (polygon.outer.length < 4 || !pointInRing(position, polygon.outer)) return false;
    return !polygon.holes.some(ring => pointInRing(position, ring));
  });
}

function collectLandPolygons(featuresData) {
  const polygons = [];
  featuresData.forEach(feature => {
    const geometry = feature.geometry;
    if (!geometry) return;
    const parts = geometry.type === "Polygon"
      ? [geometry.coordinates]
      : geometry.type === "MultiPolygon" ? geometry.coordinates : [];
    parts.forEach(rings => {
      const outer = rings[0];
      if (!outer || outer.length < 4) return;
      const latitudes = outer.map(coordinate => coordinate[1]);
      polygons.push({
        outer,
        holes: rings.slice(1),
        minLat: Math.min(...latitudes),
        maxLat: Math.max(...latitudes),
        minLon: Math.min(...outer.map(coordinate => coordinate[0])),
        maxLon: Math.max(...outer.map(coordinate => coordinate[0]))
      });
    });
  });
  return polygons;
}

function formatDistance(distance) {
  if (distance < 1) return "less than 1 km";
  const rounded = distance < 100 ? Math.round(distance / 5) * 5 : Math.round(distance / 25) * 25;
  return `about ${rounded.toLocaleString("en-US")} km`;
}

function clearAnswerMarkers() {
  markers.clearLayers();
}

function revealFeature(feature) {
  const center = featureCenter(feature);
  if (feature.type === "line") {
    L.polyline(feature.coordinates, {
      color: "#26734d",
      weight: 7,
      opacity: 0.8,
      lineCap: "round",
      lineJoin: "round",
      interactive: false
    }).addTo(markers);
    feature.coordinates.forEach(coordinate => {
      L.circle(coordinate, {
        radius: feature.toleranceKm * 1000,
        color: "#26734d",
        weight: 1,
        opacity: 0.25,
        fillColor: "#26734d",
        fillOpacity: 0.08,
        interactive: false
      }).addTo(markers);
    });
  } else {
    L.circle(center, {
      radius: feature.toleranceKm * 1000,
      color: "#26734d",
      weight: 2,
      opacity: 0.9,
      fillColor: "#26734d",
      fillOpacity: 0.12,
      interactive: false
    }).addTo(markers);
  }

  L.circleMarker(center, {
    radius: 9,
    color: "#fff",
    weight: 3,
    fillColor: "#26734d",
    fillOpacity: 1,
    interactive: false
  }).addTo(markers);
}

function updateStats() {
  const answeredTotal = correctAnswers + incorrectAnswers;
  const accuracy = answeredTotal ? Math.round(correctAnswers / answeredTotal * 100) : 0;
  const progress = answeredTotal / queue.length * 100;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `Question ${Math.min(questionIndex + 1, queue.length)} of ${queue.length}`;
  score.textContent = `${accuracy}%`;
  correctCount.textContent = correctAnswers;
  incorrectCount.textContent = incorrectAnswers;
  answeredCount.textContent = answeredTotal;
}

function renderQuestion() {
  if (questionIndex >= queue.length) {
    showResults();
    return;
  }

  answered = false;
  clearAnswerMarkers();
  feedback.className = "feedback physical-feedback";
  feedback.textContent = "";
  nextButton.disabled = true;
  nextButton.textContent = "Next →";

  const current = queue[questionIndex];
  featureName.textContent = current.name;
  questionCount.textContent = `Question ${questionIndex + 1} of ${queue.length}`;
  updateStats();
}

function handleMapClick(event) {
  if (answered || questionIndex >= queue.length) return;
  answered = true;

  const current = queue[questionIndex];
  const guess = [event.latlng.lat, event.latlng.lng];
  const distance = distanceFromFeature(current, guess);
  const landClickInWaterFeature = current.water && isOnLand(guess);
  const isCorrect = distance === 0 && !landClickInWaterFeature;

  revealFeature(current);
  L.circleMarker(event.latlng, {
    radius: 7,
    color: "#fff",
    weight: 3,
    fillColor: "#d64545",
    fillOpacity: 1,
    interactive: false
  }).addTo(markers);

  if (isCorrect) {
    correctAnswers += 1;
    feedback.className = "feedback correct physical-feedback";
    feedback.textContent = "Correct! Your click was within the accepted answer zone.";
  } else {
    incorrectAnswers += 1;
    feedback.className = "feedback wrong physical-feedback";
    feedback.textContent = landClickInWaterFeature && distance === 0
      ? "Incorrect. This feature is in the water, so click in the blue area around its location."
      : `Incorrect. The feature is marked in green. Your click was ${formatDistance(distance)} from the accepted answer zone.`;
  }

  nextButton.disabled = false;
  if (questionIndex === queue.length - 1) nextButton.textContent = "See results →";
  updateStats();
}

function showResults() {
  const total = queue.length;
  const accuracy = total ? Math.round(correctAnswers / total * 100) : 0;
  gamePanel.hidden = true;
  resultPanel.classList.add("visible");
  document.getElementById("finalScore").textContent = `${accuracy}%`;
  document.getElementById("finalCorrect").textContent = correctAnswers;
  document.getElementById("finalIncorrect").textContent = incorrectAnswers;
  document.getElementById("finalTotal").textContent = `You answered all ${total} physical geography features.`;
  featureName.textContent = "Quiz complete!";
  questionCount.textContent = `${total} questions`;
  progressFill.style.width = "100%";
  progressText.textContent = `${total} / ${total} questions`;
  nextButton.disabled = true;
}

function startQuiz() {
  queue = shuffled(features);
  questionIndex = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  resultPanel.classList.remove("visible");
  gamePanel.hidden = false;
  renderQuestion();
}

async function loadBlankMap() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson"
    );
    if (!response.ok) throw new Error(`Map data request failed (${response.status}).`);
    const data = await response.json();
    if (!data || data.type !== "FeatureCollection" || !Array.isArray(data.features)) {
      throw new Error("The map data is not a valid GeoJSON feature collection.");
    }
    landPolygons = collectLandPolygons(data.features);

    L.geoJSON(data, {
      style: {
        stroke: true,
        color: "#f8fbff",
        weight: 1.5,
        fillColor: "#f8fbff",
        fillOpacity: 1,
        interactive: false
      },
      interactive: false
    }).addTo(map);

    map.fitWorld({ padding: [12, 12] });
    map.on("click", handleMapClick);
    featureName.textContent = "";
    startQuiz();
  } catch (error) {
    console.error("Could not load the blank world map.", error);
    featureName.textContent = "Map unavailable";
    mapError.className = "feedback wrong";
    mapError.textContent = "The blank world map could not be loaded. Check your internet connection and reload the page.";
  }
}

nextButton.addEventListener("click", () => {
  if (!answered) return;
  questionIndex += 1;
  renderQuestion();
});

document.getElementById("playAgain").addEventListener("click", startQuiz);

window.addEventListener("resize", () => map.invalidateSize());

loadBlankMap();
