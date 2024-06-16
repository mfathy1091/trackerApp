import { apiGetCategories, apiGetTransactions } from '@api/apiClient';
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

export { useGetCategories, useGetTransactions };
