import { comingSoon } from '../data/coming_soon';
import { getCommon } from '../utils/get_common';
import { ResponseHeader } from '../data/response_header';

export const handler = async (event, content) => {
  const common = getCommon(event);
  const data = comingSoon(common);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  };
}
