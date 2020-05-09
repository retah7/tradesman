export function formatToDDMMYY(dateObj) {
  let month = String(dateObj.getMonth() + 1).padStart(2, '0');
  let day = String(dateObj.getDate()).padStart(2, '0');
  let year = dateObj.getFullYear();
  return day + "-" + month + "-" + year;
}

export function formatToHHMMSS(dateObj) {
  return dateObj.toTimeString().split(" ")[0];
}
