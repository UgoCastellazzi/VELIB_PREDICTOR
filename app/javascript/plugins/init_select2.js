import $ from 'jquery';
import 'select2';

const hours = ["00h","2h","4h","6h","8h","10h","12h","14h","16h","18h","20h","22h"];

const initSelect2 = () => {
  $('#hour-input').select2({ data: hours, width: '100%', minimumResultsForSearch: Infinity });
};

const getUserInput = () => {
  const select = document.getElementById("hour-input");
  return select.value;
};

export { initSelect2, getUserInput };