import React, { useQuery } from 'react';
import axios from 'axios';

const useAPIRequest = (url, method = 'GET', body = {}) => {
  const { data, loading, error } = useQuery(url, () => axios[method](url, body));

  return {
    data,
    loading,
    error,
  };
};

export default useAPIRequest;