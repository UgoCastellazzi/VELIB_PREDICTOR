import mapboxgl from 'mapbox-gl';


const removePopups = () => {
  const popups = document.querySelectorAll(".mapboxgl-popup");
  popups.forEach((popup) => {
    popup.remove();
  });
};

const addPopupsInBox = (markers, map) => {
  removePopups();
  const neLng = map.getBounds()["_ne"].lng;
  const neLat = map.getBounds()["_ne"].lat;
  const swLng = map.getBounds()["_sw"].lng;
  const swLat = map.getBounds()["_sw"].lat;
  markers.forEach((marker) => {
    if ( swLng < marker.lon && marker.lon < neLng && marker.lat > swLat && marker.lat < neLat) {
      const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([ marker.lon, marker.lat ])
      .setHTML(`<p class="popup">${marker.avg0}</p>`)
      .addTo(map);
    };
  });
};

const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lon, marker.lat ]));
    map.fitBounds(bounds, { padding: 20, maxZoom: 15, duration: 0 });
};

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    const markers = JSON.parse(mapElement.dataset.markers);
    markers.forEach((marker) => {
      const element = document.createElement('div');
      element.className = 'marker';
      element.style.backgroundColor = "blue";
      element.style.width = "5px";
      element.style.height = "5px";
      element.style.fontSize = '0.5rem';
      new mapboxgl.Marker(element)
        .setLngLat([ marker.lon, marker.lat ])
        .addTo(map);
    });
    map.on('moveend', function() {
      const zoomLevel = map.getZoom();
      if (zoomLevel < 14.5) {
        removePopups();
      } else {
        addPopupsInBox(markers, map);
      }
    });
    fitMapToMarkers(map, markers);
  }
};

export { initMapbox }
