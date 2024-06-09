import { create } from 'apisauce';

export const api = create({
    baseURL: 'http://10.0.2.2:8000/api',
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
    },
});

const apiGetTransactions = async () => {
    const response = await api.get('/transactions');
    console.log('apiGetTransactions Response : ', response);
    return response;
};

export { apiGetTransactions };
