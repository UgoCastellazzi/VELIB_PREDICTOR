import mapboxgl from 'mapbox-gl';
import { generateMarkerHtml, generatePopupHtml } from './generate_html'
import { matchHours } from './match_hours'
import { getUserInput } from './init_select2'

const createAPopup = (marker, map) => {
  const userInput = getUserInput();
  const userInputTranslated = matchHours[`${userInput}`]
  const popup = new mapboxgl.Popup({ closeOnClick: false })
  .setLngLat([ marker.lon, marker.lat ])
  .setHTML(generatePopupHtml(marker[`current_${userInputTranslated}`], marker["capacity"]))
  .addTo(map);
};

const createAMarker = (marker, map) => {
  const element = document.createElement('div');
  generateMarkerHtml(element);
  new mapboxgl.Marker(element)
    .setLngLat([ marker.lon, marker.lat ])
    .addTo(map);

}

const removePopups = () => {
  const popups = document.querySelectorAll(".mapboxgl-popup");
  popups.forEach((popup) => {
    popup.remove();
  });
};

const removeMarkers = () => {
  const markers = document.querySelectorAll(".marker");
  markers.forEach((marker) => {
    marker.remove();
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
      createAPopup(marker, map);
    };
  });
};

const addMarkersToMap = (markers, map) => {
  removeMarkers();
  const neLng = map.getBounds()["_ne"].lng;
  const neLat = map.getBounds()["_ne"].lat;
  const swLng = map.getBounds()["_sw"].lng;
  const swLat = map.getBounds()["_sw"].lat;
  markers.forEach((marker) => {
    if ( swLng < marker.lon && marker.lon < neLng && marker.lat > swLat && marker.lat < neLat) {
      createAMarker(marker, map);
    };
  });
};

const managePopups = (markers, map) => {
  const zoomLevel = map.getZoom();
    if (zoomLevel < 14.5) {
      removePopups();
   } else {
      addPopupsInBox(markers, map);
  }
}

export { removePopups, addPopupsInBox, addMarkersToMap, managePopups }
  