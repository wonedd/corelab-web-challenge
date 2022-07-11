import { useQuery } from 'react-query';
import { api } from '../api';

type IVehicle = {
  color: string;
  year: number;
  brand: string;
};

type GetVehiclesResponse = {
  filtered: IVehicle[];
};

export async function getVehicles(): Promise<GetVehiclesResponse> {
  const { data } = await api.get('/filter');

  return {
    filtered: data,
  };
}

export function useFilter() {
  return useQuery(['/filter'], () => getVehicles(), {
    staleTime: 60000,
  });
}
