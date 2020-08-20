const generateMarkerHtml = (element) => {
  element.className = 'marker';
  element.style.backgroundColor = "#59B0E3";
  element.style.width = "5px";
  element.style.height = "5px";
  element.style.borderRadius = "50%";
  element.style.fontSize = '0.5rem';
};

const generatePopupHtml = (number1, number2) => {
  return `<p>${number1} / ${number2}</p>`
};

export { generateMarkerHtml, generatePopupHtml }