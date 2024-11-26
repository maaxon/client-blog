import { useCallback, useEffect, useState } from "react";

export const useService = <T, A extends unknown[]>(service: (...args: A) => Promise<T>, args: A) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setData(undefined)
    try {
      const response = await service(...args);
      setIsLoading(false);
      setData(response);
    } catch {
      setHasError(true);
      setIsLoading(false);
    }
  },[...args]);

  useEffect(() => {
    fetchData();
  }, [...args]);
  return { data, isLoading, hasError };
};