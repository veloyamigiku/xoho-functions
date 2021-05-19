import { commonReact } from '../data/common_react';
import { commonVue } from '../data/common_vue';

export const getCommon = (event) => {
  const frontType = event.queryStringParameters['front_type']
  switch (frontType) {
    case 'react':
      return commonReact;
    case 'vue':
      return commonVue;
    default:
      return {};
  }
}
