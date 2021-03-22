import {name, version} from '../../package.json';

export const environment = {
  production: false,
  NAME: name,
  VERSION: version,
  REST_USER: 'http://localhost:8081',
  REST_CORE: 'http://localhost:8082',
  REST_CUSTOMER_SUPPORT: 'http://localhost:8083'
};

