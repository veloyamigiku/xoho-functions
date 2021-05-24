import { ResponseHeader } from '../data/response_header';
import { service } from '../data/service';
import { getCommon } from '../utils/get_common';

export const handler = async (event, context) => {
  const common = getCommon(event);
  const data = service(common);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  };
}
