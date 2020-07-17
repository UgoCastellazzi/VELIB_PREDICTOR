import mapboxgl from 'mapbox-gl';

const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lon, marker.lat ]));
    map.fitBounds(bounds, { padding: 20, maxZoom: 15, duration: 0 });
};

const changeMarkerOnZoom = (zoomLevel, markers) => {
  if (zoomLevel < 13) {
    console.log("large");
  } else {
    console.log("close");
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
      // const element = document.createElement('p');
      // element.className = 'marker';
      // element.innerText = marker.avg0;
      // element.style.color = "blue";
      // element.style.fontSize = '0.5rem';
      new mapboxgl.Marker(element)
        .setLngLat([ marker.lon, marker.lat ])
        .addTo(map);
    });
    map.on('zoomend', function() {
      const zoomLevel = map.getZoom();
      changeMarkerOnZoom(zoomLevel);
      });
    fitMapToMarkers(map, markers);
  }
};

export { initMapbox }

// afficher les chiffres via des popups, les cacher quand on est pas assez zommés