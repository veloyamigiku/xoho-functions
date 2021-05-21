import { ranking } from '../data/ranking';
import { ResponseHeader } from '../data/response_header';
import { getCommon } from '../utils/get_common';

export const handler = async (event, context) => {
  const common = getCommon(event);
  const data = ranking(common);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  };
}
