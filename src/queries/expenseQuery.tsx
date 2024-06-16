import { apiGetAccounts, apiGetCategories, apiGetTransactions } from '@api/apiClient';
import { useQuery } from '@tanstack/react-query';

const useGetTransactions = () => {
    return useQuery({
        queryFn: apiGetTransactions,
        queryKey: ['transactions'],
    });
};

const useGetCategories = () => {
    return useQuery({
        queryFn: apiGetCategories,
        queryKey: ['categories'],
    });
};

const useGetAccounts = () => {
    return useQuery({
        queryFn: apiGetAccounts,
        queryKey: ['accounts'],
    });
};

export { useGetAccounts, useGetCategories, useGetTransactions };
