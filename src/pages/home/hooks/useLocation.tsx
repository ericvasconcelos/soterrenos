import axios from 'axios';
import { useEffect, useState } from 'react';

import { OPEN_STREET_API_URL } from '@/envs';
import { fetchZipCode } from '@/services/zipCode';

export const useGetLocation = () => {
  const [city, setCity] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const { data } = await axios.get(
            `${OPEN_STREET_API_URL}/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
          );
          const postcode = data?.address?.postcode.replace('-', '');
          const result = await fetchZipCode(postcode);
          setCity(result.localidade);
        } catch (err) {
          setError('Erro ao buscar informações de localização.');
          return err;
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []);

  return {
    city,
    loading,
    error,
  };
};
