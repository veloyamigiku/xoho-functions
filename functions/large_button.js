import { largeButton } from '../data/large_button';
import { getCommon } from '../utils/get_common';
import { ResponseHeader } from '../data/response_header';

export const handler = async (event, context) => {
  
  const params = getCommon(event);
  const pageType = event.queryStringParameters["page_type"];
  const data = largeButton(params, pageType);
  
  return {
    statusCode: 200,
    headers: ResponseHeader,
    body: JSON.stringify(data)
  };

}
