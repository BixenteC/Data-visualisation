
const mymap = L.map('checkinMap').setView([0, 0], 1);
const attribution =
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);

// Making a marker with a custom tile
const issIcon = L.icon({
      iconUrl: 'iss200.png',
      iconSize: [50, 32],
      iconAnchor: [25, 16],
});

getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();
  
  for (item of data) {
    const marker = L.marker([item.lat, item.lon]).addTo(mymap);
    let txt = `The weather here at ${item.lat}, ${item.lon}...`
    
    if (item.air.value < 0) {
      txt += 'No air quality reading.'

    } else {

    }
    

    marker.bindPopup(txt);
    /*
    const root = document.createElement('p');
    const geo = document.createElement('div');
    const date = document.createElement('div');

    geo.textContent = `${item.lat}°, ${item.lon}°`;
    const dateString = new Date(item.timestamp).toLocaleString();
    date.textContent = dateString;

    root.append(geo, date);
    document.body.append(root);
    */
  }
  console.log(data);
}