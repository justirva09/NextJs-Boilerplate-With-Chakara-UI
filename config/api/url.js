import appConfig from '../appConfig';

const baseUrl = {
    // example how to wrrite end-point API
    login: `${appConfig.url.api}/v1/login`,
    profile: `${appConfig.url.api}/v1/user`,
}

export default baseUrl;
