const generateMarkerHtml = (element) => {
  element.className = 'marker';
  element.style.backgroundColor = "#59B0E3";
  element.style.width = "5px";
  element.style.height = "5px";
  element.style.borderRadius = "50%";
  element.style.fontSize = '0.5rem';
};

const getRightColor = (number1, number2) => {
  if (number1 / number2 < 0.25) {
    return "#EF3054"
  } else if ( number1 / number2 < 0.5 ) {
    return "#FFAD05"
  } else {
    return "#16E0BD"
  }
};

const generatePopupHtml = (number1, number2) => {
  const percent = number1 / number2 * 100
  const color = getRightColor(number1, number2);
  return `<div class="popup-container">
  <div class="popup-progress-bar-container">
    <div class="popup-progress-bar" style="background-color: ${color}; width: ${percent}%;"></div>
  </div>
  <p class="popup-progress-number" style="color: ${color}">${number1} / ${number2} </p>
</div>`
  // `<p>${number1} / ${number2}</p>`
};

export { generateMarkerHtml, generatePopupHtml }