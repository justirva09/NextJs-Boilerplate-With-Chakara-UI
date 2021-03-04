import baseUrl from './url';
import ApiRequest from './config';

const API = {};

// example: no need api_token
API.login = ApiRequest.post(baseUrl.login);
// example: need Api token
API.getProfile = ApiRequest.get(baseUrl.profile, true);

export default API;
