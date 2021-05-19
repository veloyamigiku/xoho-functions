import { importantInformation } from "../data/important_information"
import { getCommon } from '../utils/get_common';
import { ResponseHeader } from "../data/response_header"

export const handler = async (event, context) => {
  const common = getCommon(event);
  const data = importantInformation(common);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  }
}
