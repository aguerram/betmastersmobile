import axios from 'axios'
import {AsyncStorage} from 'react-native';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.request.use(function (config) {

    let auth = _retrieveJWT()

    config.headers = {
        ...config.headers,
        'Authorization': auth ? `Bearer ${auth}` : null
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
_retrieveJWT = async () => {
    try {
        const value = await AsyncStorage.getItem('authToken');
        if (value !== null) {
            return value
        }
    } catch (error) {

    }
    return '';
};
export default axios;
