import { topMenu } from '../data/top_menu';
import { getCommon } from '../utils/get_common';
import { ResponseHeader } from '../data/response_header';

export const handler = async (event, context) => {
  const common = getCommon(event);
  const activePage = event.queryStringParameters['active_page']
  const data = topMenu(common, activePage);
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  }
}
