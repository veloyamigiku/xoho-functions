import { information } from '../data/information';
import { getCommon } from '../utils/get_common';
import { ResponseHeader } from '../data/response_header';

export const handler = async (event, context) => {
  const common = getCommon(event);
  const data = information(common);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  };
}
