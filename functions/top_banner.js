import { ResponseHeader } from '../data/response_header';
import { topBanner } from '../data/top_banner';

export const handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(topBanner)
  }
}
