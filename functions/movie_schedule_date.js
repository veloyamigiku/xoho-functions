import { ResponseHeader } from "../data/response_header"
import { getDayOfWeek, getDayOfWeekStr } from "../utils/date";

export const handler = async (event, context) => {

  const year = parseInt(event.queryStringParameters['year']);
  const month = parseInt(event.queryStringParameters['month']);
  const firstDay = parseInt(event.queryStringParameters['day']);
  const dayInterval = 14;
  
  var scheduleDateList = [];
  var date = new Date(
    year,
    month - 1,
    firstDay);
  for (var i = 0; i < dayInterval; i++) {
    const dIdx = getDayOfWeek(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate());
    const d = getDayOfWeekStr(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate());
    var option = "";
    switch (dIdx) {
      case 2:
        option = "シネマイレージデイ";
        break;
      case 3:
        option = "ＴＯＨＯウェンズデイ";
        break;
      default:
        break;
    }
    scheduleDateList.push({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      d: d,
      option: option
    });
    date.setDate(date.getDate() + 1);
  }

  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(scheduleDateList)
  }

}
