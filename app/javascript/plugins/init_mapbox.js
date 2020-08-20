import mapboxgl from 'mapbox-gl';
import { addPopupsInBox, addMarkersToMap, managePopups } from './manage_map_elements'

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10',
      center: [2.3454, 48.8549], // starting position [lng, lat]
      zoom: 15 // starting zoom
    });

    const markers = JSON.parse(mapElement.dataset.markers);
    addMarkersToMap(markers, map);
    addPopupsInBox(markers, map);

    map.on('moveend', function() {
      addMarkersToMap(markers, map);
      managePopups(markers, map);
    });

    $('#hour-input').on('change', function () {
      managePopups(markers, map);
    });
  }
};

export { initMapbox };
