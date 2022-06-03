import axios from 'axios';

const axiosCustom = axios.create({
    baseURL: 'http://localhost:3001',
});

/**
 * Заголовок разрешающий устанавливать куки от сервера
 * Нужен только для рефреша
 */
axiosCustom.defaults.withCredentials = true;

export default axiosCustom;