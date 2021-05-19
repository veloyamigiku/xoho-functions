import { ResponseHeader } from '../data/response_header';
import { topBanner } from '../data/top_banner';
import { getCommon } from '../utils/get_common';

export const handler = async (event, context) => {
  const common = getCommon(event);
  const data = topBanner(common);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  }
}
