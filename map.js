const locDic = {
  "Craggy Gardens - 5500'": {
    'link': './images/Craggy Gardens 6-4-22.jpg',
    'date': 'June 4, 2022',
    'photog': 'Evan Fisher',
    'handle': 'https://twitter.com/EFisherWX',
    'loc': [35.7003, -82.3796]
  },
  "Inspiration Point - 4700'": {
    'link': './images/Inspiration Point 5-30-22.jpg',
    'date': 'May 30, 2022',
    'photog': 'Billy Bowling',
    'handle': 'https://twitter.com/babowling12',
    'loc': [35.6361, -83.4424]
  },
  "Private Property - 3800'": {
    'link': './images/Private 5-27-22.jpg',
    'date': 'May 27, 2022',
    'photog': 'Evan Fisher',
    'handle': 'https://twitter.com/EFisherWX',
    'loc': [35.5564, -82.4527]
  },
}

const map = L.map('map').setView([35.77651938476333, -82.62112321657582], 10);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
}).addTo(map);

let name;
for (let key in locDic){
  L.marker(locDic[key]['loc']).addTo(map).bindPopup(`<center><h2>${key}</h2><h3>${locDic[key]['date']} - <a href='${locDic[key]['handle']}' target='_blank'>${locDic[key]['photog']}</a></h3><img src='${locDic[key]['link']}' style='width:400px;z-index:0;' id='${key}'></img></center>`, {maxWidth: "auto"});
}

//let m1 = L.marker([35.7003, -82.3796]).addTo(map);
//m1.bindPopup(`<center><h2>Craggy Gardens - 5500'</h2><p>June 4, 2022 - Click to enlarge<p><div id='imgDiv'><img src='./images/test.jpg' style='width:250px;z-index:0;' onclick='enlargeImg()' id='img1'></img></div></center>`).openPopup();

//let m2 = L.marker([36.1962, -82.0704]).addTo(map);
//m2.bindPopup(`<center><h2>Roan Mountain - 6000'</h2><p>June 4, 2022 - Click to enlarge<p><div id='imgDiv'><img src='https://bloximages.chicago2.vip.townnews.com/averyjournal.com/content/tncms/assets/v3/editorial/2/93/29392452-99f6-59a4-8cdf-d537d4347068/5745db0854175.image.jpg' style='width:250px;z-index:0;' onclick='enlargeImg()' id='img1'></img></div></center>`).openPopup();
