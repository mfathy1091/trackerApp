import { apiGetTransactions } from '@api/apiClient';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const queryClient = useQueryClient();

const useGetTransactions = () => {
    return useQuery({
        queryFn: apiGetTransactions,
        queryKey: ['transactions'],
    });
};

export { useGetTransactions };
