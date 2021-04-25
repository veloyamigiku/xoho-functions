import { data } from '../data/footer_link';

export const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
