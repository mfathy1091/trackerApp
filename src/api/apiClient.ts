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

const apiGetAccounts = async () => {
    const response = await api.get('/accounts');
    console.log('apiGetAccounts Response : ', response);
    return response;
};

const apiGetCategories = async () => {
    const response = await api.get('/categories');
    console.log('apiGetCategories Response : ', response);
    return response;
};

export { apiGetAccounts, apiGetCategories, apiGetTransactions };
