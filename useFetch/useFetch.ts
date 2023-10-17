import { useEffect, useState } from "react";

interface TypeBBad {
  quote: string;
  author: string;
}

interface TypeEstado {
  data: null | TypeBBad[];
  isLoading: boolean;
  hasError: null;
}
export const useFetch = (url: string) => {
  const [estado, setEstado] = useState<TypeEstado>({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async (url: string) => {
    setEstado({ ...estado, isLoading: true });

    const resp = await fetch(url);
    const data = await resp.json();

    setEstado({
      data: data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch(url);
  }, [url]);

  return {
    data: estado.data,
    isLoading: estado.isLoading,
    hasError: estado.hasError,
  };
};
