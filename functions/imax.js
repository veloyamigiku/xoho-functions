import { imax } from "../data/imax"
import { ResponseHeader } from "../data/response_header"

export const handler = async (event, context) => {

  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(imax)
  }
  
}
