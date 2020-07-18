import mapboxgl from 'mapbox-gl';

const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lon, marker.lat ]));
    map.fitBounds(bounds, { padding: 20, maxZoom: 15, duration: 0 });
};

const changeMarkerOnZoom = (zoomLevel, markers, map) => {
  if (zoomLevel < 13) {
    console.log("large");
      const popups = document.querySelectorAll(".mapboxgl-popup");
      popups.forEach((popup) => {
        popup.remove();
      });
  } else {
    console.log("close");
    const neLng = map.getBounds()["_ne"].lng;
    const neLat = map.getBounds()["_ne"].lat;
    const swLng = map.getBounds()["_sw"].lng;
    const swLat = map.getBounds()["_sw"].lat;
    console.log(neLng, neLat, swLng, swLat);
    markers.forEach((marker) => {
      if ( swLng < marker.lon && marker.lon < neLng && marker.lat > swLat && marker.lat < neLat) {
        const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([ marker.lon, marker.lat ])
        .setHTML(`<p class="popup">${marker.avg0}</p>`)
        .addTo(map);
      };
    });
  }
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
    map.on('zoomend', function() {
      const zoomLevel = map.getZoom();
      changeMarkerOnZoom(zoomLevel, markers, map);
    });
    fitMapToMarkers(map, markers);
  }
};

export { initMapbox }
