import { movieScreen } from "../data/movie_schedule_screen"
import { ResponseHeader } from "../data/response_header"
import { getDayOfWeekStr } from "../utils/date";

export const handler = async (event, context) => {

  const year = parseInt(event.queryStringParameters['year']);
  const month = parseInt(event.queryStringParameters['month']);
  const day = parseInt(event.queryStringParameters['day'])
  const theater = parseInt(event.queryStringParameters['theater']);
  const title = event.queryStringParameters['title'];

  const res = {
    year: year,
    month: month,
    day: day,
    d: getDayOfWeekStr(year, month, day),
    title: title,
    screen: movieScreen
  }

  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(res)
  }
  
}
