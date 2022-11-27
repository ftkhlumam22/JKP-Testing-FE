const formatDate = (date) => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const formatDateNumeric = (value) => {
  let options = { year: "numeric", month: "long", day: "numeric" };
  let date = new Date(value).toLocaleString("id-ID", options);
  return date;
};

const formatPrice = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(number)
    .replace(",00", "");
};

export { formatDate, formatDateNumeric, formatPrice };
