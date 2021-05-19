import { menu } from '../data/menu';
import { getCommon } from '../utils/get_common';
import { ResponseHeader } from '../data/response_header';

export const handler = async (event, context) => {
  const common = getCommon(event);
  const data = menu(common);
  return {
    statusCode: 200,
    headers: ResponseHeader, 
    body: JSON.stringify(data)
  }
}
