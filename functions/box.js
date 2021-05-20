import { ResponseHeader } from '../data/response_header';
import { getCommon } from '../utils/get_common';
import { box } from '../data/box';

export const handler = async (event, context) => {
  const common = getCommon(event);
  const data = box(common);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  };
}
