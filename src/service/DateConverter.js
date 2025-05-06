class DateConverter {
  getTodaysDate() {
    var date = new Date();
    var dateString;

    dateString =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
    return dateString;
  }
  formatDate(date) {
    var result;

    result =
      date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2);
    return result;
  }
}
export default new DateConverter();
